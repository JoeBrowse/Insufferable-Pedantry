/*
 * Looks things up in the source library (sources/*.jsonl).
 *
 *   node scripts/sources.mjs search <words or /regex/> [--in legislation|manual|judgments] [--limit 20]
 *   node scripts/sources.mjs show <id> [--grep <words>] [--context 600]
 *   node scripts/sources.mjs quote <id> "<exact words>"
 *
 * `quote` exits 0 only if the words appear in that source, ignoring differences
 * in whitespace, quote marks and dashes. It is how citations are proved.
 */
import { readFileSync } from 'node:fs';

const DIR = new URL('../sources/', import.meta.url);
const FILES = {
  legislation: 'legislation.jsonl',
  manual: 'hmrc-ca-manual.jsonl',
  judgments: 'judgments.jsonl',
};

function load(which) {
  const names = which ? [FILES[which]] : Object.values(FILES);
  return names.flatMap((f) =>
    readFileSync(new URL(f, DIR), 'utf8')
      .split('\n')
      .filter(Boolean)
      .map((l) => JSON.parse(l)),
  );
}

export function normalise(s) {
  return String(s)
    .replace(/[‘’‛′]/g, "'")
    .replace(/[“”″]/g, '"')
    .replace(/[‐-―−]/g, '-')
    .replace(/ /g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function flag(args, name, fallback) {
  const i = args.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const v = args[i + 1];
  args.splice(i, 2);
  return v;
}

function matcher(q) {
  const m = q.match(/^\/(.+)\/([a-z]*)$/);
  if (m) {
    const re = new RegExp(m[1], m[2].includes('i') ? m[2] : `${m[2]}i`);
    return (text) => {
      const hit = re.exec(text);
      return hit ? hit.index : -1;
    };
  }
  const words = normalise(q).split(' ').filter(Boolean);
  return (text) => {
    if (!words.every((w) => normalise(text).includes(w))) return -1;
    return Math.max(0, text.toLowerCase().indexOf(words[0]));
  };
}

// Every place in the raw text where the phrase occurs, whitespace-insensitive.
function positions(text, phrase) {
  const m = phrase.match(/^\/(.+)\/([a-z]*)$/);
  const re = m
    ? new RegExp(m[1], 'gi')
    : new RegExp(
        phrase
          .trim()
          .split(/\s+/)
          .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
          .join('\\s+'),
        'gi',
      );
  return [...text.matchAll(re)].map((x) => x.index);
}

function snippet(text, at, width) {
  const t = text.replace(/\s+/g, ' ');
  const start = Math.max(0, at - width / 2);
  return `${start > 0 ? '…' : ''}${t.slice(start, start + width)}${start + width < t.length ? '…' : ''}`;
}

const [cmd, ...args] = process.argv.slice(2);
const which = flag(args, 'in');
const limit = Number(flag(args, 'limit', 20));
const context = Number(flag(args, 'context', 600));
const grep = flag(args, 'grep');

if (cmd === 'search') {
  const find = matcher(args.join(' '));
  const hits = load(which)
    .map((r) => ({ r, at: find(`${r.title}\n${r.text}`) }))
    .filter((h) => h.at >= 0);
  console.log(`${hits.length} matches${hits.length > limit ? ` (showing ${limit})` : ''}`);
  for (const { r, at } of hits.slice(0, limit)) {
    console.log(`\n[${r.id}] ${r.title}\n${r.url}\n${snippet(`${r.title}\n${r.text}`, at, 300)}`);
  }
} else if (cmd === 'show') {
  const id = args.join(' ');
  const r = load(which).find((x) => x.id.toLowerCase() === id.toLowerCase());
  if (!r) {
    console.error(`No source with id "${id}". Use search to find ids.`);
    process.exit(2);
  }
  console.log(`[${r.id}] ${r.title}\n${r.url}`);
  if (r.validFrom) console.log(`Revised text valid from ${r.validFrom}`);
  if (r.unappliedChanges && r.unappliedChanges.length) {
    console.log(`Changes not yet applied by legislation.gov.uk: ${r.unappliedChanges.join('; ')}`);
  }
  if (r.updated) console.log(`Page updated ${r.updated}`);
  if (!grep) {
    console.log(`\n${r.text}`);
  } else {
    let shownTo = -1;
    let n = 0;
    for (const at of positions(r.text, grep)) {
      if (at < shownTo || n >= 10) continue;
      const from = Math.max(0, at - context / 2);
      shownTo = at + context / 2;
      console.log(`\n…${r.text.slice(from, shownTo)}…`);
      n += 1;
    }
    if (!n) console.log('\n(no match in this source)');
  }
} else if (cmd === 'quote') {
  const [id, ...words] = args;
  const r = load(which).find((x) => x.id.toLowerCase() === String(id).toLowerCase());
  if (!r) {
    console.error(`No source with id "${id}".`);
    process.exit(2);
  }
  const ok = normalise(r.text).includes(normalise(words.join(' ')));
  console.log(ok ? `FOUND in ${r.id}` : `NOT FOUND in ${r.id}`);
  process.exit(ok ? 0 : 1);
} else {
  console.error('Usage: sources.mjs search|show|quote … (see the comment at the top of this file)');
  process.exit(2);
}
