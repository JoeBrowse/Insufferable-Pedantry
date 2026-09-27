# Insufferable Pedantry

A prototype learning game for UK capital allowances. It has three sections,
each opened from a card at the bottom of the screen:

- **News**: recent CA changes, newest first, each linked to its source.
- **Diagnosis**: clues arrive one at a time and you name the relief. Solving on an earlier clue scores more points.
- **Learn**: short Duolingo-style lessons, grouped into units.

A tour runs the first time the site opens. The **Tour** button replays it.

## Run it

Live at https://joebrowse.github.io/Insufferable-Pedantry/ (GitHub Pages, from the `gh-pages` branch).

Locally: open `index.html` in a browser. There is no build step and nothing to install.

## Add content

Everything the site shows lives in `data/`:

| File           | Holds                                                         |
| -------------- | ------------------------------------------------------------- |
| `news.js`      | news items (`id`, `date`, `tag`, `headline`, `standfirst`, `source`, `url`) |
| `diagnosis.js` | cases: five clues, most oblique first, and an `answer`        |
| `reliefs.js`   | every relief name the Diagnosis game accepts, with aliases    |
| `lessons.js`   | units and lessons. A unit with only `preview` shows as "Coming soon" |

Lessons support four question types: `mcq`, `tf`, `match` and `number`. The
shapes are described at the top of `lessons.js`.

## Progress

Progress is saved in the browser's `localStorage`, so it stays on that one
device. To start again, clear the site's data.

## Directions it could grow

- News pulled live from GOV.UK, HMRC manuals and tribunal feeds
- More units: fixtures, disposals, cars and case law
- Diagnosis cases on case-law outcomes, not just reliefs
- Accounts and a leaderboard
