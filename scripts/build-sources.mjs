/*
 * Builds the source library in sources/: the primary texts every lesson,
 * case and fact is checked against and linked to.
 *
 *   node scripts/build-sources.mjs            fetch everything
 *   node scripts/build-sources.mjs legislation|manual|judgments
 *
 * Sources (all Crown copyright, reusable under the Open Government Licence v3.0):
 *   - legislation.gov.uk: CAA 2001 (every section and top-level schedule), CTA 2009
 *     Part 14, TCGA 1992 s 37B and FA 1998 Sch 18 paras 78-83. Revised text as
 *     published, with the date it is valid from and any changes not yet applied.
 *   - GOV.UK Content API: every page of HMRC's Capital Allowances Manual.
 *   - Find Case Law (The National Archives): a short list of modern judgments that
 *     review the classic plant cases, under the Open Justice Licence. The classic
 *     cases themselves predate Find Case Law; HMRC's manual summarises them.
 *
 * Output is one JSON object per line, sorted, so re-runs produce small diffs.
 */
import { mkdir, writeFile } from 'node:fs/promises';

const OUT = new URL('../sources/', import.meta.url);
const USER_AGENT = 'InsufferablePedantry/1.0 (+https://github.com/JoeBrowse/Insufferable-Pedantry)';
const CONCURRENCY = 4;
const LEG = 'https://www.legislation.gov.uk';

// ---------------------------------------------------------------- helpers

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, accept, attempt = 1) {
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': USER_AGENT, accept },
      signal: AbortSignal.timeout(60000),
    });
    if (res.status === 429 || res.status >= 500) throw new Error(`HTTP ${res.status}`);
    if (!res.ok) return null;
    return accept.includes('json') ? res.json() : res.text();
  } catch (err) {
    if (attempt >= 4) throw new Error(`${url}: ${err.message}`);
    await sleep(2000 * attempt);
    return get(url, accept, attempt + 1);
  }
}

async function pool(items, fn) {
  const out = new Array(items.length);
  let next = 0;
  let done = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i]);
        done += 1;
        if (done % 100 === 0) console.log(`  ${done}/${items.length}`);
      }
    }),
  );
  return out;
}

const decode = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&');

const squash = (s) =>
  s
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

async function writeJsonl(name, rows) {
  rows.sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
  await writeFile(new URL(name, OUT), rows.map((r) => JSON.stringify(r)).join('\n') + '\n');
  console.log(`wrote sources/${name}: ${rows.length} rows`);
}

// ---------------------------------------------------------------- legislation

// Turns a CLML provision into plain text that keeps its numbering, e.g.
// "56A(1) This section applies ... (3)(a) if the chargeable period ...".
const BLOCK =
  /<\/?(Body|Schedules?|Part|Chapter|Pblock|PsubBlock|P\d?group|P\d?para|P\d|Text|Para|Tabular|table|tr|td|th|BlockAmendment|UnorderedList|OrderedList|ListItem|ScheduleBody|Reference)\b[^>]*>/g;

function clmlToText(xml) {
  const start = xml.search(/<(Body|Schedules)\b/);
  const end = Math.max(xml.lastIndexOf('</Body>'), xml.lastIndexOf('</Schedules>'));
  const body = start >= 0 ? xml.slice(start, end) : '';
  return (
    squash(
      decode(
        body
          .replace(/<Commentary[\s\S]*?<\/Commentary>/g, '')
          .replace(/<(CommentaryRef|MarginNoteRef|FootnoteRef)[^>]*\/>/g, '')
          .replace(/<Title>([\s\S]*?)<\/Title>/g, '\n$1\n')
          .replace(/<P1[^>]*>\s*<Pnumber[^>]*>([\s\S]*?)<\/Pnumber>/g, '\n$1 ')
          .replace(/<P([2-6])[^>]*>\s*<Pnumber[^>]*>([\s\S]*?)<\/Pnumber>/g, '\n($2) ')
          .replace(/<Number>([\s\S]*?)<\/Number>/g, '\n$1 ')
          .replace(BLOCK, '\n')
          .replace(/<[^>]+>/g, ''),
      ),
    )
      .replace(/\( (\w+) \)/g, '($1)')
      // Keep each provision number on the same line as its text.
      .replace(/^(\(\w+\)|\d+[A-Z]*)\n+(?=\S)/gm, '$1 ')
  );
}

function meta(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([^<]*)<`));
  return m ? decode(m[1]).trim() : '';
}

function unapplied(xml) {
  return [...xml.matchAll(/<ukm:UnappliedEffect [^>]*>/g)].map((m) => {
    const attr = (k) => (m[0].match(new RegExp(`${k}="([^"]*)"`)) || [])[1] || '';
    return `${attr('Type')} ${attr('AffectedProvisions')} by ${attr('AffectingURI').replace(/^.*\/id\//, '')}`.trim();
  });
}

async function legislationProvision(act, path) {
  const url = `${LEG}/${act.uri}/${path}`;
  const xml = await get(`${url}/data.xml`, 'application/xml');
  if (!xml) return null;
  const heading = (xml.match(/<P1group[^>]*>\s*<Title>([\s\S]*?)<\/Title>/) || [])[1];
  const label = path
    .replace(/^section\//, 's ')
    .replace(/^schedule\/(\w+)\/paragraph\/(\w+)$/, 'Sch $1 para $2')
    .replace(/^schedule\//, 'Sch ');
  return {
    id: `${act.short} ${label}`,
    source: act.title,
    cite: `${act.short}, ${label}`,
    title: heading ? squash(decode(heading.replace(/<[^>]+>/g, ' '))) : meta(xml, 'dc:title'),
    url,
    validFrom: meta(xml, 'dct:valid'),
    unappliedChanges: unapplied(xml),
    text: clmlToText(xml),
  };
}

async function provisionsUnder(act, contentsPath, filter) {
  const xml = await get(`${LEG}/${act.uri}/${contentsPath}/data.xml`, 'application/xml');
  if (!xml) throw new Error(`No contents for ${act.short} at ${contentsPath}`);
  const re = new RegExp(
    `DocumentURI="http://www\\.legislation\\.gov\\.uk/${act.uri}/((?:section|schedule)/[^"]+)"`,
    'g',
  );
  return [...new Set([...xml.matchAll(re)].map((m) => m[1]))].filter(filter);
}

const ACTS = [
  {
    short: 'CAA 2001',
    title: 'Capital Allowances Act 2001',
    uri: 'ukpga/2001/2',
    // Every section, plus each schedule as a whole.
    paths: (act) =>
      provisionsUnder(act, 'contents', (p) => /^section\/\w+$|^schedule\/\w+$/.test(p)),
  },
  {
    short: 'CTA 2009',
    title: 'Corporation Tax Act 2009',
    uri: 'ukpga/2009/4',
    // Part 14 (land remediation relief) is ss 1143-1179.
    paths: (act) =>
      provisionsUnder(act, 'contents', (p) => {
        const n = Number((p.match(/^section\/(\d+)[A-Z]*$/) || [])[1]);
        return n >= 1143 && n <= 1179;
      }),
    keep: (row) => /^Part 14\n/i.test(row.text),
  },
  {
    short: 'TCGA 1992',
    title: 'Taxation of Chargeable Gains Act 1992',
    uri: 'ukpga/1992/12',
    paths: async () => ['section/37B'],
  },
  {
    short: 'FA 1998',
    title: 'Finance Act 1998',
    uri: 'ukpga/1998/36',
    paths: async () => [78, 79, 80, 81, 82, 83].map((n) => `schedule/18/paragraph/${n}`),
  },
];

async function legislation() {
  const rows = [];
  for (const act of ACTS) {
    const paths = await act.paths(act);
    console.log(`${act.short}: ${paths.length} provisions`);
    const got = (await pool(paths, (p) => legislationProvision(act, p))).filter(Boolean);
    rows.push(...(act.keep ? got.filter(act.keep) : got));
  }
  await writeJsonl('legislation.jsonl', rows);
}

// ---------------------------------------------------------------- HMRC manual

const MANUAL = '/hmrc-internal-manuals/capital-allowances-manual';

function htmlToText(html) {
  return squash(
    decode(
      (html || '')
        .replace(/<(script|style)[\s\S]*?<\/\1>/g, '')
        .replace(/<\/(p|h\d|li|tr|div|pre|blockquote)>/g, '\n')
        .replace(/<br\s*\/?>/g, '\n')
        .replace(/<li[^>]*>/g, '\n• ')
        .replace(/<[^>]+>/g, ' '),
    ),
  );
}

async function manual() {
  const root = await get(`https://www.gov.uk/api/content${MANUAL}`, 'application/json');
  const seen = new Set();
  let frontier = (root.details.child_section_groups || []).flatMap((g) => g.child_sections);
  const rows = [];
  while (frontier.length) {
    const batch = frontier.filter((s) => !seen.has(s.base_path));
    batch.forEach((s) => seen.add(s.base_path));
    const pages = await pool(batch, (s) =>
      get(`https://www.gov.uk/api/content${s.base_path}`, 'application/json'),
    );
    frontier = [];
    pages.forEach((page, i) => {
      if (!page) return;
      const d = page.details || {};
      const id = (d.section_id || batch[i].section_id || '').toUpperCase();
      rows.push({
        id: `HMRC ${id}`,
        source: 'HMRC Capital Allowances Manual',
        cite: id,
        title: page.title,
        url: `https://www.gov.uk${batch[i].base_path}`,
        updated: (page.public_updated_at || '').slice(0, 10),
        text: htmlToText(d.body),
      });
      for (const g of d.child_section_groups || []) frontier.push(...g.child_sections);
    });
    console.log(`manual: ${rows.length} pages so far, ${frontier.length} queued`);
  }
  await writeJsonl('hmrc-ca-manual.jsonl', rows);
}

// ---------------------------------------------------------------- judgments

const JUDGMENTS = [
  'uksc/2026/12', // Orsted West of Duddon Sands: "on the provision of" plant
  'ewca/civ/2025/279',
  'ukut/tcc/2023/260', // Gunfleet Sands
  'ewca/civ/2022/1587', // Urenco Chemplants: plant, setting and premises
  'ewca/civ/2021/105', // SSE Generation: List B and plant
  'ukftt/tc/2024/1163', // Mersey Docks and Harbour Company
  'ukut/tcc/2023/169', // Perenco
  'ukftt/tc/2026/1096',
  'ukut/tcc/2026/142', // Cats North Sea
  'ukut/tcc/2026/305', // FC Shipping
];

async function judgment(uri) {
  const url = `https://caselaw.nationalarchives.gov.uk/${uri}`;
  const xml = await get(`${url}/data.xml`, 'application/xml');
  if (!xml) return null;
  const cite = meta(xml, 'uk:cite') || uri;
  const name = meta(xml, 'FRBRname') || (xml.match(/<FRBRname value="([^"]+)"/) || [])[1] || '';
  const court = meta(xml, 'uk:court');
  const date = (xml.match(/<FRBRdate date="([^"]+)"/) || [])[1] || '';
  const paras = [
    ...xml.matchAll(/<paragraph[^>]*>\s*<num[^>]*>([\s\S]*?)<\/num>([\s\S]*?)<\/paragraph>/g),
  ].map(
    (m) =>
      `[${squash(decode(m[1].replace(/<[^>]+>/g, ''))).replace(/\.$/, '')}] ${squash(decode(m[2].replace(/<[^>]+>/g, ' ')))}`,
  );
  return {
    id: cite,
    source: 'Find Case Law',
    cite,
    title: decode(name),
    court,
    date,
    url,
    text: paras.length ? paras.join('\n') : squash(decode(xml.replace(/<[^>]+>/g, ' '))),
  };
}

async function judgments() {
  const rows = (await pool(JUDGMENTS, judgment)).filter(Boolean);
  await writeJsonl('judgments.jsonl', rows);
}

// ---------------------------------------------------------------- run

const which = process.argv[2];
await mkdir(OUT, { recursive: true });
if (!which || which === 'legislation') await legislation();
if (!which || which === 'manual') await manual();
if (!which || which === 'judgments') await judgments();
