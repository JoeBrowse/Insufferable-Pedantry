/*
 * Fetches capital allowances news from free public sources and writes
 * data/news-live.js. Run daily by .github/workflows/news.yml.
 *
 * Titles and summaries are taken verbatim from each source. Nothing is
 * rewritten, so every item says exactly what its publisher said.
 *
 * Each source is independent: if one is down or changes shape, the others
 * still publish and the previous items for that source are kept.
 */
import { readFile, writeFile } from 'node:fs/promises';

const OUT = new URL('../data/news-live.js', import.meta.url);
const MAX_ITEMS = 40;
const MAX_AGE_DAYS = 548; // about 18 months
const TIMEOUT_MS = 20000;
// A judgment must use the phrase this often to count as a capital allowances case,
// rather than one that mentions it in passing.
const MIN_CASE_MENTIONS = 6;
const USER_AGENT = 'InsufferablePedantry/1.0 (+https://github.com/JoeBrowse/Insufferable-Pedantry)';

// Only items that mention one of these in their title or summary are kept.
const TOPIC =
  /capital allowance|full expensing|annual investment allowance|structures and buildings allowance|first[- ]year allowance|writing[- ]down allowance|plant (and|or) machinery|super-deduction|land remediation relief/i;

const ALLOWED_URL =
  /^https:\/\/(www\.gov\.uk|www\.legislation\.gov\.uk|caselaw\.nationalarchives\.gov\.uk)\//;

// ---------------------------------------------------------------- helpers

async function get(url, accept) {
  const res = await fetch(url, {
    headers: { 'user-agent': USER_AGENT, accept },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return accept.includes('json') ? res.json() : res.text();
}

function decodeXml(text) {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .trim();
}

function tag(xml, name) {
  const m = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
  return m ? decodeXml(m[1]) : '';
}

function entries(xml) {
  return xml
    .split(/<entry[\s>]/)
    .slice(1)
    .map((e) => e.split('</entry>')[0]);
}

function oneLine(text, max = 220) {
  const s = String(text || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s;
}

function isoDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

// ---------------------------------------------------------------- sources

// GOV.UK site search: HMRC and Treasury guidance, policy papers, consultations.
// Sorting the search by date surfaces anything that says "capital" or
// "allowances", so take the most relevant results and date-filter them here.
async function govuk() {
  const queries = [
    'capital allowances',
    'full expensing',
    'annual investment allowance',
    'structures and buildings allowance',
  ];
  const skipFormats = new Set(['hmrc_manual_section', 'manual_section', 'statistics', 'form']);
  const items = [];
  for (const q of queries) {
    const params = new URLSearchParams({
      q,
      count: '50',
      fields: 'title,link,description,public_timestamp,format,organisations',
    });
    const data = await get(`https://www.gov.uk/api/search.json?${params}`, 'application/json');
    for (const r of data.results || []) {
      if (skipFormats.has(r.format)) continue;
      if (!TOPIC.test(`${r.title} ${r.description}`)) continue;
      const orgs = (r.organisations || []).map((o) => o.acronym || o.title || '').join(' ');
      let label = 'GOV.UK';
      if (/consultation/.test(r.format || '')) label = 'Consultation';
      else if (/HMRC|Revenue/i.test(orgs)) label = 'HMRC';
      else if (/Treasury/i.test(orgs)) label = 'Treasury';
      items.push({
        id: `govuk:${r.link}`,
        date: isoDate(r.public_timestamp),
        tag: label,
        headline: oneLine(r.title, 160),
        standfirst: oneLine(r.description),
        source: 'GOV.UK',
        url: `https://www.gov.uk${r.link}`,
      });
    }
  }
  return items;
}

// HMRC Capital Allowances Manual change notes, one item per day of changes.
async function camUpdates() {
  const data = await get(
    'https://www.gov.uk/api/content/hmrc-internal-manuals/capital-allowances-manual',
    'application/json',
  );
  const notes = (data.details && data.details.change_notes) || [];
  const byDay = new Map();
  for (const n of notes) {
    const day = isoDate(n.published_at);
    if (!day) continue;
    if (!byDay.has(day)) byDay.set(day, []);
    byDay.get(day).push(n.section_id || n.title);
  }
  return [...byDay].map(([day, sections]) => {
    const unique = [...new Set(sections)];
    return {
      id: `cam:${day}`,
      date: day,
      tag: 'HMRC',
      headline: `Capital Allowances Manual: ${unique.length} ${unique.length === 1 ? 'page' : 'pages'} updated`,
      standfirst: oneLine(unique.join(', ')),
      source: 'HMRC manual',
      url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/updates',
    };
  });
}

// Find Case Law (The National Archives): cases against HMRC whose judgment
// actually turns on capital allowances, judged by how often it uses the phrase.
async function caselaw({ cutoff }) {
  const params = new URLSearchParams({
    query: '"capital allowances"',
    order: '-date',
    per_page: '50',
  });
  const xml = await get(
    `https://caselaw.nationalarchives.gov.uk/atom.xml?${params}`,
    'application/atom+xml',
  );
  const candidates = entries(xml)
    .map((e) => {
      const title = tag(e, 'title');
      const link =
        (e.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/) ||
          e.match(/<link[^>]*href="([^"]+)"/) ||
          [])[1] || '';
      const court = tag(tag(e, 'author'), 'name');
      return {
        id: `caselaw:${link}`,
        date: isoDate(tag(e, 'published') || tag(e, 'updated')),
        tag: 'Case law',
        headline: oneLine(title, 160),
        standfirst: court,
        source: 'Find Case Law',
        url: decodeXml(link),
      };
    })
    .filter((item) => /revenue (and|&) customs|HMRC/i.test(item.headline))
    .filter((item) => item.date && item.date >= cutoff && ALLOWED_URL.test(item.url));

  const kept = [];
  for (const item of candidates) {
    let text;
    try {
      text = await get(`${item.url}/data.xml`, 'application/xml');
    } catch (err) {
      console.warn(`  skipped ${item.url}: ${err.message}`);
      continue;
    }
    const mentions = (text.match(/capital allowance/gi) || []).length;
    const cite = decodeXml((text.match(/<uk:cite>([^<]+)<\/uk:cite>/) || [])[1] || '');
    console.log(`  ${String(mentions).padStart(4)} mentions  ${item.headline}`);
    if (mentions < MIN_CASE_MENTIONS) continue;
    kept.push({ ...item, standfirst: cite ? `${item.standfirst} · ${cite}` : item.standfirst });
  }
  return kept;
}

// legislation.gov.uk: statutory instruments with "capital allowances" in the title.
async function legislation() {
  const params = new URLSearchParams({ title: 'capital allowances' });
  const xml = await get(
    `https://www.legislation.gov.uk/uksi/data.feed?${params}`,
    'application/atom+xml',
  );
  // The feed's title search matches the words separately, so check the phrase.
  return entries(xml)
    .filter((e) => /capital allowances/i.test(tag(e, 'title')))
    .map((e) => {
      const id = tag(e, 'id');
      const url = id.replace(
        /^http:\/\/www\.legislation\.gov\.uk\/id\//,
        'https://www.legislation.gov.uk/',
      );
      return {
        id: `leg:${url}`,
        date: isoDate(tag(e, 'published') || tag(e, 'updated')),
        tag: 'Legislation',
        headline: oneLine(tag(e, 'title'), 160),
        standfirst: oneLine(tag(e, 'summary')) || 'Statutory instrument',
        source: 'legislation.gov.uk',
        url,
      };
    });
}

const SOURCES = { govuk, camUpdates, caselaw, legislation };

// ---------------------------------------------------------------- run

async function previousItems() {
  try {
    const text = await readFile(OUT, 'utf8');
    const m = text.match(
      /window\.IP_DATA\.liveNews = ([\s\S]*?);\n\nwindow\.IP_DATA\.liveNewsUpdated/,
    );
    return m ? JSON.parse(m[1]) : [];
  } catch {
    return [];
  }
}

function valid(item, cutoff) {
  return (
    item.date &&
    item.date >= cutoff &&
    item.headline &&
    ALLOWED_URL.test(item.url) &&
    !/[\s"'<>]/.test(item.url)
  );
}

async function main() {
  const previous = await previousItems();
  const cutoff = new Date(Date.now() - MAX_AGE_DAYS * 864e5).toISOString().slice(0, 10);
  const collected = [];

  for (const [name, fetchSource] of Object.entries(SOURCES)) {
    const prefix = {
      govuk: 'govuk:',
      camUpdates: 'cam:',
      caselaw: 'caselaw:',
      legislation: 'leg:',
    }[name];
    try {
      const items = (await fetchSource({ cutoff })).filter((i) => valid(i, cutoff));
      console.log(`${name}: ${items.length} items`);
      for (const i of items.slice(0, 3)) console.log(`  ${i.date} ${i.headline}`);
      collected.push(...items);
    } catch (err) {
      const kept = previous.filter((i) => i.id.startsWith(prefix));
      console.warn(`${name}: failed (${err.message}); keeping ${kept.length} previous items`);
      collected.push(...kept);
    }
  }

  const seen = new Set();
  const items = collected
    .sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id))
    .filter((i) => {
      if (seen.has(i.id)) return false;
      seen.add(i.id);
      return true;
    })
    .slice(0, MAX_ITEMS);

  if (JSON.stringify(items) === JSON.stringify(previous)) {
    console.log('No change.');
    return;
  }

  const file = `/* Generated by scripts/fetch-news.mjs. Do not edit by hand. */
window.IP_DATA = window.IP_DATA || {};

window.IP_DATA.liveNews = ${JSON.stringify(items, null, 2)};

window.IP_DATA.liveNewsUpdated = ${JSON.stringify(new Date().toISOString().slice(0, 10))};
`;
  await writeFile(OUT, file);
  console.log(`Wrote ${items.length} items.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
