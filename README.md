# Insufferable Pedantry

A prototype learning game for UK capital allowances. It has three sections,
each opened from a card at the bottom of the screen:

- **Learn**: short Duolingo-style lessons, grouped into units.
- **Diagnosis**: clues arrive one at a time and you name the relief. Solving on an earlier clue scores more points.
- **Daily fact**: one capital allowances fact a day, the same for everyone, changing at midnight.

The front page leads with today's fact and lists the latest news. The **News** page shows everything, newest first, with each item linked to its source.

A tour runs the first time the site opens. The **Tour** button replays it.

## Run it

Live at https://joebrowse.github.io/Insufferable-Pedantry/ (GitHub Pages, from the `gh-pages` branch).

Locally: open `index.html` in a browser. There is no build step and nothing to install.

## Add content

Everything the site shows lives in `data/`:

| File           | Holds                                                         |
| -------------- | ------------------------------------------------------------- |
| `news.js`      | hand-picked news items (`id`, `date`, `tag`, `headline`, `standfirst`, `source`, `url`) |
| `diagnosis.js` | cases: five clues, most oblique first, and an `answer`        |
| `news-live.js` | the daily feed, written by `scripts/fetch-news.mjs`. Don't edit it by hand |
| `facts.js`     | daily facts, shown in order, one per day, cycling round |
| `reliefs.js`   | every relief name the Diagnosis game accepts, with aliases    |
| `lessons.js`   | units and lessons. A unit with only `preview` shows as "Coming soon" |

Lessons support four question types: `mcq`, `tf`, `match` and `number`. The
shapes are described at the top of `lessons.js`.

## Sources

`sources/` is a library of primary texts, downloaded by `scripts/build-sources.mjs`:

- Capital Allowances Act 2001 (every section and schedule), CTA 2009 Part 14, TCGA 1992 s 37B and FA 1998 Sch 18 paras 78-83, from legislation.gov.uk (revised text, with the date it is valid from and any changes not yet applied)
- every page of HMRC's Capital Allowances Manual, from GOV.UK
- ten modern capital allowances judgments, from Find Case Law

Every lesson question, diagnosis clue and daily fact cites this library with an exact quote. Search it, or check a quote, with `node scripts/sources.mjs search|show|quote`. In the development repo, a test fails if any item has no source or any quote is not in the library word for word.

The legislation and the HMRC manual are Crown copyright, reused under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). Judgments are from Find Case Law (The National Archives), under the Open Justice Licence.

## Daily news feed

`scripts/fetch-news.mjs` pulls items about capital allowances from the GOV.UK search API, the HMRC Capital Allowances Manual change notes, Find Case Law and legislation.gov.uk. It uses each source's own titles and summaries, with nothing rewritten. `.github/workflows/news.yml` runs it every morning and commits `data/news-live.js` when anything has changed. Hand-picked items in `news.js` take priority over feed items that link to the same page.

## Progress

Progress is saved in the browser's `localStorage`, so it stays on that one
device. To start again, clear the site's data.

## Directions it could grow

- More units: fixtures, disposals, cars and case law
- Diagnosis cases on case-law outcomes, not just reliefs
- Accounts and a leaderboard
