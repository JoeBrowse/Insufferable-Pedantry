/*
 * Insufferable Pedantry: prototype app.
 *
 * No framework and no build step, so it opens straight from disk. Content lives
 * in data/*.js; this file only renders it. Progress is kept in localStorage,
 * which is per-browser and may be unavailable, so every read and write is
 * guarded and the app works without it.
 */
(function () {
  'use strict';

  const DATA = window.IP_DATA || {};
  const RELIEFS = DATA.reliefs || [];
  const NEWS = mergeNews(DATA.news || [], DATA.liveNews || []);
  const CASES = DATA.cases || [];
  const UNITS = DATA.units || [];

  const STORE_KEY = 'insufferable-pedantry.v1';
  const CLUES_PER_CASE = 5;
  const HEARTS = 3;
  const XP_PER_LESSON = 10;
  const XP_CLEAN_BONUS = 5;

  // ---------------------------------------------------------------- state

  function freshState() {
    return {
      tutorialDone: false,
      readNews: [],
      cases: {},
      caseIndex: 0,
      lessons: {},
      xp: 0,
      streak: 0,
      lastDay: null,
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? Object.assign(freshState(), JSON.parse(raw)) : freshState();
    } catch {
      return freshState();
    }
  }

  const state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch {
      // Storage blocked or full: progress lasts for this visit only.
    }
  }

  // ---------------------------------------------------------------- helpers

  // Hand-picked items win over the daily feed when both link to the same page.
  function mergeNews(curated, live) {
    const key = (n) => n.url.replace(/\/$/, '').toLowerCase();
    const seen = new Set(curated.map(key));
    return curated
      .concat(live.filter((n) => !seen.has(key(n))))
      .sort((a, b) => b.date.localeCompare(a.date));
  }

  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value === null || value === undefined || value === false) continue;
      if (key === 'class') el.className = value;
      else if (key === 'text') el.textContent = value;
      else if (key.startsWith('on')) el.addEventListener(key.slice(2), value);
      else el.setAttribute(key, value === true ? '' : value);
    }
    for (const child of children.flat()) {
      if (child === null || child === undefined || child === false) continue;
      el.append(child instanceof Node ? child : String(child));
    }
    return el;
  }

  // Static, trusted markup only (icons).
  function svg(markup) {
    const t = document.createElement('template');
    t.innerHTML = markup.trim();
    return t.content.firstChild;
  }

  const ICON_CHECK =
    '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="square"/></svg>';
  const ICON_HEART =
    '<svg class="heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.7 4.5c2.2 0 3.7 1.2 4.6 2.6.9-1.4 2.4-2.6 4.6-2.6 3.7 0 5.8 3.8 4.3 7.2C19.5 16.4 12 21 12 21z"/></svg>';

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function dayKey(d) {
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function formatDate(iso) {
    const d = new Date(`${iso}T12:00:00`);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function normalise(text) {
    return String(text)
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9%]+/g, ' ')
      .trim();
  }

  function plural(n, one, many) {
    return `${n} ${n === 1 ? one : many || `${one}s`}`;
  }

  // ---------------------------------------------------------------- derived figures

  function unreadNews() {
    return NEWS.filter((n) => !state.readNews.includes(n.id));
  }

  function casePoints() {
    return Object.values(state.cases).reduce((sum, r) => sum + (r.points || 0), 0);
  }

  function allLessons() {
    return UNITS.flatMap((u) => (u.lessons || []).map((l) => ({ unit: u, lesson: l })));
  }

  function nextLesson() {
    return allLessons().find(({ lesson }) => !state.lessons[lesson.id]) || null;
  }

  function lessonsDone() {
    return allLessons().filter(({ lesson }) => state.lessons[lesson.id]).length;
  }

  function liveStreak() {
    if (!state.lastDay) return 0;
    const today = dayKey(new Date());
    const y = new Date();
    y.setDate(y.getDate() - 1);
    return state.lastDay === today || state.lastDay === dayKey(y) ? state.streak : 0;
  }

  // ---------------------------------------------------------------- routing

  const SECTIONS = ['home', 'news', 'diagnosis', 'learn'];
  const view = document.getElementById('view');

  function currentSection() {
    const s = location.hash.replace('#', '');
    return SECTIONS.includes(s) ? s : 'home';
  }

  function render() {
    const section = currentSection();
    const renderers = {
      home: renderHome,
      news: renderNews,
      diagnosis: renderDiagnosis,
      learn: renderLearn,
    };
    view.replaceChildren(renderers[section]());
    updateDock(section);
  }

  function go(section) {
    if (currentSection() === section) render();
    else location.hash = section;
  }

  window.addEventListener('hashchange', () => {
    render();
    window.scrollTo(0, 0);
  });

  // ---------------------------------------------------------------- dock

  function updateDock(section) {
    document.querySelectorAll('.dock-card').forEach((card) => {
      const active = card.dataset.section === section;
      card.classList.toggle('is-active', active);
      if (active) card.setAttribute('aria-current', 'page');
      else card.removeAttribute('aria-current');
    });

    const unread = unreadNews().length;
    setMeta('news', unread ? `${unread} unread` : 'All read');

    const played = Object.keys(state.cases).length;
    setMeta('diagnosis', `${played}/${CASES.length} · ${casePoints()} pts`);

    setMeta('learn', `${lessonsDone()}/${allLessons().length} · ${state.xp} XP`);
  }

  function setMeta(name, text) {
    const el = document.querySelector(`[data-meta="${name}"]`);
    if (el) el.textContent = text;
  }

  // ---------------------------------------------------------------- home

  function renderHome() {
    const lead = NEWS[0];
    const next = nextLesson();
    const nextCase = CASES[firstOpenCase()];

    return h(
      'div',
      null,
      lead &&
        h(
          'section',
          { class: 'lead', 'aria-label': 'Latest' },
          h('span', { class: 'kicker', text: lead.tag }),
          h('h1', { class: 'lead-headline' }, h('a', { href: '#news', text: lead.headline })),
          h('p', { class: 'standfirst', text: lead.standfirst }),
          h('span', { class: 'meta', text: formatDate(lead.date) }),
        ),
      h('h2', { class: 'list-label', text: 'Up next' }),
      h(
        'ul',
        { class: 'plain-list' },
        next &&
          h(
            'li',
            null,
            h(
              'a',
              { class: 'row-link', href: '#learn' },
              h('span', { class: 'kicker', text: 'Learn' }),
              h('span', { class: 'row-title', text: `${next.unit.title}: ${next.lesson.title}` }),
            ),
          ),
        nextCase &&
          h(
            'li',
            null,
            h(
              'a',
              { class: 'row-link', href: '#diagnosis' },
              h('span', { class: 'kicker', text: 'Diagnosis' }),
              h('span', {
                class: 'row-title',
                text: `Case ${firstOpenCase() + 1} of ${CASES.length}`,
              }),
            ),
          ),
      ),
      h(
        'p',
        { class: 'record' },
        h('span', null, 'Streak ', h('b', { text: plural(liveStreak(), 'day') })),
        h('span', null, 'Learning ', h('b', { text: `${state.xp} XP` })),
        h('span', null, 'Diagnosis ', h('b', { text: plural(casePoints(), 'point') })),
      ),
    );
  }

  // ---------------------------------------------------------------- news

  function renderNews() {
    const unread = new Set(unreadNews().map((n) => n.id));

    // Seen once the list has been shown; the badges stay for this visit.
    state.readNews = NEWS.map((n) => n.id);
    saveState();

    return h(
      'div',
      null,
      h(
        'div',
        { class: 'section-head' },
        h('h1', { class: 'section-title', text: 'News' }),
        h('span', { class: 'meta', text: plural(unread.size, 'new item') }),
      ),
      DATA.liveNewsUpdated &&
        h('p', {
          class: 'meta news-feed-note',
          text: `Checked daily: GOV.UK, HMRC manuals, legislation.gov.uk, Find Case Law. Last change ${formatDate(DATA.liveNewsUpdated)}.`,
        }),
      h(
        'ul',
        { class: 'news-list' },
        NEWS.map((item) =>
          h(
            'li',
            { class: 'news-item' },
            h(
              'div',
              { class: 'news-top' },
              h('span', { class: 'kicker', text: item.tag }),
              unread.has(item.id) && h('span', { class: 'badge-new', text: 'New' }),
            ),
            h('h2', { class: 'news-headline', text: item.headline }),
            h('p', { class: 'news-standfirst', text: item.standfirst }),
            h(
              'span',
              { class: 'meta' },
              `${formatDate(item.date)} · `,
              h('a', {
                class: 'news-source',
                href: item.url,
                target: '_blank',
                rel: 'noopener noreferrer',
                text: `${item.source} ↗`,
              }),
            ),
          ),
        ),
      ),
    );
  }

  // ---------------------------------------------------------------- diagnosis

  // The case in progress is kept in memory only; finished cases are saved.
  let round = null;

  function firstOpenCase() {
    const i = CASES.findIndex((c) => !state.cases[c.id]);
    return i === -1 ? 0 : i;
  }

  function openRound(index) {
    const c = CASES[index];
    if (!c) return null;
    const saved = state.cases[c.id];
    round = {
      index,
      revealed: saved ? CLUES_PER_CASE : 1,
      wrong: saved ? saved.wrong || [] : [],
      finished: Boolean(saved),
      hint: '',
      fresh: -1,
    };
    state.caseIndex = index;
    saveState();
    return round;
  }

  function findRelief(text) {
    const q = normalise(text);
    if (!q) return null;
    return (
      RELIEFS.find(
        (r) => normalise(r.name) === q || (r.aliases || []).some((a) => normalise(a) === q),
      ) || null
    );
  }

  function suggest(text) {
    const words = normalise(text).split(' ').filter(Boolean);
    if (!words.length) return [];
    return RELIEFS.filter((r) => {
      const hay = normalise([r.name, ...(r.aliases || [])].join(' '));
      return words.every((w) => hay.includes(w));
    }).slice(0, 6);
  }

  function finishRound(solved) {
    const c = CASES[round.index];
    round.finished = true;
    round.revealed = CLUES_PER_CASE;
    state.cases[c.id] = {
      solved,
      points: solved ? CLUES_PER_CASE + 1 - round.cluesAtSolve : 0,
      wrong: round.wrong,
    };
    saveState();
  }

  function submitGuess(text) {
    const c = CASES[round.index];
    const relief = findRelief(text);
    if (!relief) {
      round.hint = 'Pick a relief from the suggestions.';
      return;
    }
    round.hint = '';
    if (relief.name === c.answer) {
      round.cluesAtSolve = round.revealed;
      finishRound(true);
      return;
    }
    if (!round.wrong.includes(relief.name)) round.wrong.push(relief.name);
    if (round.revealed >= CLUES_PER_CASE) {
      finishRound(false);
    } else {
      round.revealed += 1;
      round.fresh = round.revealed - 1;
    }
  }

  function renderDiagnosis() {
    if (!CASES.length) return h('p', { class: 'meta', text: 'No cases loaded.' });
    if (!round) openRound(state.caseIndex < CASES.length ? state.caseIndex : firstOpenCase());

    const c = CASES[round.index];
    const saved = state.cases[c.id];
    const available = CLUES_PER_CASE + 1 - round.revealed;

    const strip = h(
      'div',
      { class: 'case-strip', 'aria-label': 'Cases' },
      CASES.map((kase, i) => {
        const r = state.cases[kase.id];
        const cls = ['case-dot'];
        if (i === round.index) cls.push('is-current');
        if (r) cls.push(r.solved ? 'is-solved' : 'is-failed');
        return h('button', {
          type: 'button',
          class: cls.join(' '),
          'aria-label': `Case ${i + 1}${r ? (r.solved ? ', solved' : ', missed') : ''}`,
          text: String(i + 1),
          onclick: () => {
            openRound(i);
            render();
          },
        });
      }),
    );

    const clues = h(
      'ol',
      { class: 'clues' },
      c.clues.map((clue, i) =>
        i < round.revealed
          ? h('li', { class: `clue${i === round.fresh ? ' is-new' : ''}`, text: clue })
          : h('li', { class: 'clue is-hidden', text: 'Hidden' }),
      ),
    );
    round.fresh = -1;

    const body = round.finished ? renderVerdict(c, saved) : renderGuess();

    return h(
      'div',
      null,
      h(
        'div',
        { class: 'section-head' },
        h('h1', { class: 'section-title', text: 'Diagnosis' }),
        h('span', { class: 'meta', text: `${casePoints()} points in total` }),
      ),
      strip,
      h(
        'div',
        { class: 'case-head' },
        h('h2', { class: 'case-title', text: `Case ${round.index + 1}` }),
        !round.finished &&
          h('span', { class: 'points', text: `Worth ${plural(available, 'point')}` }),
      ),
      clues,
      round.wrong.length > 0 &&
        h(
          'div',
          { class: 'guess' },
          h('span', { class: 'kicker', text: 'Ruled out' }),
          h(
            'ul',
            { class: 'ruled-out' },
            round.wrong.map((w) => h('li', { text: w })),
          ),
        ),
      body,
    );
  }

  function renderGuess() {
    const input = h('input', {
      class: 'field',
      id: 'guess-input',
      type: 'text',
      autocomplete: 'off',
      autocapitalize: 'off',
      spellcheck: 'false',
      placeholder: 'Type a relief, e.g. AIA',
      'aria-label': 'Your diagnosis',
    });
    const list = h('ul', { class: 'suggestions', 'aria-label': 'Suggestions' });

    const drawSuggestions = () => {
      list.replaceChildren(
        ...suggest(input.value).map((r) =>
          h(
            'li',
            null,
            h('button', {
              type: 'button',
              class: 'chip',
              text: r.name,
              onclick: () => {
                input.value = r.name;
                drawSuggestions();
                input.focus();
              },
            }),
          ),
        ),
      );
    };

    const guess = () => {
      submitGuess(input.value);
      render();
      const again = document.getElementById('guess-input');
      if (again) again.focus();
    };

    input.addEventListener('input', drawSuggestions);

    return h(
      'form',
      {
        class: 'guess',
        onsubmit: (e) => {
          e.preventDefault();
          guess();
        },
      },
      h('label', { class: 'kicker', for: 'guess-input', text: 'Your diagnosis' }),
      h(
        'div',
        { class: 'guess-row' },
        input,
        h('button', { class: 'btn btn-primary', type: 'submit', text: 'Guess' }),
      ),
      list,
      round.hint && h('p', { class: 'hint', role: 'alert', text: round.hint }),
      h(
        'div',
        { class: 'guess-actions' },
        h('button', {
          type: 'button',
          class: 'text-btn',
          disabled: round.revealed >= CLUES_PER_CASE,
          text: round.revealed >= CLUES_PER_CASE ? 'No clues left' : 'Next clue (−1 point)',
          onclick: () => {
            round.revealed += 1;
            round.fresh = round.revealed - 1;
            round.hint = '';
            render();
          },
        }),
        h('button', {
          type: 'button',
          class: 'text-btn',
          text: 'Give up',
          onclick: () => {
            finishRound(false);
            render();
          },
        }),
      ),
    );
  }

  function renderVerdict(c, saved) {
    const solved = saved && saved.solved;
    const nextIndex = CASES.findIndex((k, i) => i > round.index && !state.cases[k.id]);
    const target = nextIndex === -1 ? firstOpenCase() : nextIndex;
    const allDone = CASES.every((k) => state.cases[k.id]);

    return h(
      'div',
      { class: `verdict${solved ? '' : ' is-failed'}`, role: 'status' },
      h('span', {
        class: 'kicker',
        text: solved ? `Correct · ${plural(saved.points, 'point')}` : 'The answer',
      }),
      h('p', { class: 'verdict-answer', text: c.answer }),
      h('p', { class: 'verdict-explain', text: c.explain }),
      h('p', { class: 'meta', text: c.ref }),
      h(
        'div',
        { class: 'guess-actions' },
        allDone
          ? h('span', { class: 'meta', text: `All ${CASES.length} cases played.` })
          : h('button', {
              type: 'button',
              class: 'btn btn-primary',
              text: 'Next case',
              onclick: () => {
                openRound(target);
                render();
                window.scrollTo(0, 0);
              },
            }),
      ),
    );
  }

  // ---------------------------------------------------------------- learn

  function renderLearn() {
    const next = nextLesson();
    let number = 0;

    return h(
      'div',
      null,
      h('div', { class: 'section-head' }, h('h1', { class: 'section-title', text: 'Learn' })),
      h(
        'div',
        { class: 'learn-stats' },
        h('span', null, 'Streak ', h('b', { text: plural(liveStreak(), 'day') })),
        h('span', null, h('b', { text: `${state.xp} XP` })),
        h('span', null, h('b', { text: `${lessonsDone()}/${allLessons().length}` }), ' lessons'),
      ),
      UNITS.map((unit, u) => {
        const soon = !unit.lessons || !unit.lessons.length;
        const lessons = soon ? unit.preview || [] : unit.lessons;
        const done = soon ? 0 : lessons.filter((l) => state.lessons[l.id]).length;

        return h(
          'section',
          { class: `unit${soon ? ' is-soon' : ''}` },
          h(
            'div',
            { class: 'unit-head' },
            h('span', { class: 'kicker', text: `Unit ${u + 1}` }),
            h('span', { class: 'meta', text: soon ? 'Coming soon' : `${done}/${lessons.length}` }),
          ),
          h('h2', { class: 'unit-title', text: unit.title }),
          h(
            'ol',
            { class: 'track' },
            lessons.map((lesson) => {
              number += 1;
              const isDone = !soon && Boolean(state.lessons[lesson.id]);
              const isNext = !soon && next && next.lesson.id === lesson.id;
              const cls = ['lesson-row'];
              if (isDone) cls.push('is-done');
              if (isNext) cls.push('is-next');
              return h(
                'li',
                null,
                h(
                  'button',
                  {
                    type: 'button',
                    class: cls.join(' '),
                    disabled: soon,
                    'aria-label': `${lesson.title}${isDone ? ', completed' : ''}`,
                    onclick: soon ? null : () => startLesson(unit, lesson),
                  },
                  h('span', { class: 'node' }, isDone ? svg(ICON_CHECK) : String(number)),
                  h(
                    'span',
                    { class: 'lesson-name' },
                    h('span', { class: 'lesson-title', text: lesson.title }),
                    isNext && h('span', { class: 'start-tag', text: 'Start' }),
                    isDone &&
                      h('span', {
                        class: 'meta',
                        text: `Best ${state.lessons[lesson.id].best}%`,
                      }),
                    !soon &&
                      !isDone &&
                      !isNext &&
                      h('span', {
                        class: 'meta',
                        text: plural(lesson.questions.length, 'question'),
                      }),
                  ),
                ),
              );
            }),
          ),
        );
      }),
    );
  }

  // ---------------------------------------------------------------- lesson player

  const overlayRoot = document.getElementById('overlay-root');
  let keyHandler = null;

  function setKeyHandler(fn) {
    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    keyHandler = fn;
    if (fn) document.addEventListener('keydown', fn);
  }

  function closeOverlay() {
    setKeyHandler(null);
    overlayRoot.replaceChildren();
    document.body.style.overflow = '';
  }

  function startLesson(unit, lesson) {
    const session = {
      unit,
      lesson,
      queue: lesson.questions.map((q) => q),
      total: lesson.questions.length,
      correct: 0,
      hearts: HEARTS,
      mistakes: 0,
      attempts: 0,
    };
    document.body.style.overflow = 'hidden';
    showQuestion(session);
  }

  const KIND_LABEL = {
    mcq: 'Choose one',
    tf: 'True or false?',
    match: 'Match the pairs',
    number: 'Calculate',
  };

  function playerFrame(session, bodyChildren, foot) {
    const pct = Math.round((session.correct / session.total) * 100);
    const hearts = h('div', {
      class: 'hearts',
      'aria-label': `${session.hearts} of ${HEARTS} hearts left`,
    });
    for (let i = 0; i < HEARTS; i++) {
      const icon = svg(ICON_HEART);
      if (i >= session.hearts) icon.classList.add('is-lost');
      hearts.append(icon);
    }

    const frame = h(
      'div',
      { class: 'player', role: 'dialog', 'aria-modal': 'true', 'aria-label': session.lesson.title },
      h(
        'div',
        { class: 'player-top' },
        h('button', {
          type: 'button',
          class: 'close-btn',
          'aria-label': 'Close lesson',
          text: '×',
          onclick: () => {
            closeOverlay();
            render();
          },
        }),
        h(
          'div',
          {
            class: 'progress',
            role: 'progressbar',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            'aria-valuenow': String(pct),
          },
          h('span', { style: `width:${pct}%` }),
        ),
        hearts,
      ),
      h('div', { class: 'player-body' }, bodyChildren),
      foot,
    );
    overlayRoot.replaceChildren(frame);
    return frame;
  }

  function showQuestion(session) {
    const q = session.queue[0];
    if (!q) return showEnd(session);

    const widget = QUESTION_TYPES[q.type](q);
    const checkBtn = h('button', {
      type: 'button',
      class: 'btn btn-primary',
      text: 'Check',
      disabled: true,
    });
    const feedback = h('div', { class: 'feedback', 'aria-live': 'polite' });
    const footInner = h('div', { class: 'player-foot-inner' }, feedback, checkBtn);
    const foot = h('div', { class: 'player-foot' }, footInner);

    let checked = false;

    const conclude = (correct, answerText) => {
      checked = true;
      session.attempts += 1;
      widget.lock(correct);
      foot.classList.add(correct ? 'is-correct' : 'is-wrong');
      feedback.replaceChildren(
        h('p', { class: 'feedback-title', text: correct ? 'Correct' : `Answer: ${answerText}` }),
        h('p', { class: 'feedback-body', text: q.explain }),
      );
      session.queue.shift();
      if (correct) {
        session.correct += 1;
      } else {
        session.mistakes += 1;
        session.hearts -= 1;
        session.queue.push(q);
      }
      checkBtn.textContent = 'Continue';
      checkBtn.disabled = false;
      checkBtn.focus();
    };

    const onCheck = () => {
      if (checked) {
        if (session.hearts <= 0) showFail(session);
        else showQuestion(session);
        return;
      }
      const result = widget.check();
      conclude(result.correct, result.answerText);
    };

    checkBtn.addEventListener('click', onCheck);
    widget.onReady = (ready) => {
      if (!checked) checkBtn.disabled = !ready;
    };
    widget.onComplete = () => conclude(true, '');

    playerFrame(
      session,
      [
        h('p', { class: 'kicker q-kind', text: KIND_LABEL[q.type] }),
        h('h2', { class: 'q-prompt', text: q.prompt }),
        widget.el,
      ],
      foot,
    );

    setKeyHandler((e) => {
      if (e.key === 'Escape') {
        closeOverlay();
        render();
      } else if (e.key === 'Enter' && !checkBtn.disabled) {
        e.preventDefault();
        checkBtn.click();
      } else if (!checked && widget.key) {
        widget.key(e.key);
      }
    });

    if (widget.focus) widget.focus();
  }

  function choiceWidget(labels, correctIndex, extraClass) {
    let selected = -1;
    const buttons = labels.map((label, i) =>
      h(
        'button',
        {
          type: 'button',
          class: 'option',
          onclick: () => select(i),
        },
        h('span', { class: 'option-key', text: String(i + 1) }),
        h('span', { text: label }),
      ),
    );
    const widget = {
      el: h('div', { class: `options ${extraClass || ''}`.trim() }, buttons),
      onReady: () => {},
      check: () => ({ correct: selected === correctIndex, answerText: labels[correctIndex] }),
      lock: () => {
        buttons.forEach((b, i) => {
          b.disabled = true;
          if (i === correctIndex) b.classList.add('is-right');
          else if (i === selected) b.classList.add('is-wrong');
        });
      },
      key: (k) => {
        const n = Number(k);
        if (n >= 1 && n <= labels.length) select(n - 1);
      },
    };
    function select(i) {
      selected = i;
      buttons.forEach((b, j) => b.classList.toggle('is-selected', i === j));
      widget.onReady(true);
    }
    return widget;
  }

  const QUESTION_TYPES = {
    mcq(q) {
      const order = shuffle(q.options.map((_, i) => i));
      return choiceWidget(
        order.map((i) => q.options[i]),
        order.indexOf(q.answerIndex),
      );
    },

    tf(q) {
      return choiceWidget(['True', 'False'], q.answerBool ? 0 : 1, 'tf-options');
    },

    number(q) {
      const input = h('input', {
        class: 'field',
        type: 'text',
        inputmode: 'decimal',
        autocomplete: 'off',
        'aria-label': 'Your answer',
      });
      const prefix = q.unit === '£' ? h('span', { class: 'number-affix', text: '£' }) : null;
      const suffix =
        q.unit && q.unit !== '£' ? h('span', { class: 'number-affix', text: q.unit }) : null;
      const format = (n) => {
        const s = Number(n).toLocaleString('en-GB');
        if (q.unit === '£') return `£${s}`;
        if (q.unit === '%') return `${s}%`;
        return q.unit ? `${s} ${q.unit}` : s;
      };
      const parse = () => Number(input.value.replace(/[£,%\s]/g, '').replace(/years?$/i, ''));
      const widget = {
        el: h('div', { class: 'number-row' }, prefix, input, suffix),
        onReady: () => {},
        check: () => {
          const value = parse();
          return {
            correct: Number.isFinite(value) && Math.abs(value - q.answerNumber) < 1e-9,
            answerText: format(q.answerNumber),
          };
        },
        lock: () => {
          input.disabled = true;
        },
        focus: () => input.focus(),
      };
      input.addEventListener('input', () =>
        widget.onReady(input.value.trim() !== '' && Number.isFinite(parse())),
      );
      return widget;
    },

    match(q) {
      const pairs = q.pairs.map((p, i) => ({ ...p, i }));
      let picked = null;
      let matched = 0;

      const make = (side, pair) =>
        h('button', {
          type: 'button',
          class: 'option',
          'data-side': side,
          'data-pair': String(pair.i),
          text: side === 'left' ? pair.left : pair.right,
          onclick: (e) => pick(e.currentTarget),
        });

      const left = shuffle(pairs).map((p) => make('left', p));
      const right = shuffle(pairs).map((p) => make('right', p));

      const widget = {
        el: h(
          'div',
          { class: 'match-grid' },
          h('div', { class: 'match-col' }, left),
          h('div', { class: 'match-col' }, right),
        ),
        onReady: () => {},
        onComplete: () => {},
        check: () => ({ correct: true, answerText: '' }),
        lock: () => {},
      };

      function pick(btn) {
        if (btn.disabled) return;
        if (!picked || picked.dataset.side === btn.dataset.side) {
          if (picked) picked.classList.remove('is-selected');
          picked = btn;
          btn.classList.add('is-selected');
          return;
        }
        const a = picked;
        picked = null;
        a.classList.remove('is-selected');
        if (a.dataset.pair === btn.dataset.pair) {
          [a, btn].forEach((b) => {
            b.disabled = true;
            b.classList.add('is-matched');
          });
          matched += 1;
          if (matched === pairs.length) widget.onComplete();
        } else {
          [a, btn].forEach((b) => {
            b.classList.remove('is-flash');
            b.getBoundingClientRect(); // restart the animation
            b.classList.add('is-flash');
          });
        }
      }

      return widget;
    },
  };

  function showEnd(session) {
    const accuracy = Math.round((session.total / Math.max(session.attempts, 1)) * 100);
    const clean = session.mistakes === 0;
    const earned = XP_PER_LESSON + (clean ? XP_CLEAN_BONUS : 0);
    const prior = state.lessons[session.lesson.id];

    state.xp += earned;
    state.lessons[session.lesson.id] = { best: Math.max(accuracy, prior ? prior.best : 0) };
    const today = dayKey(new Date());
    if (state.lastDay !== today) {
      state.streak = liveStreak() + 1;
      state.lastDay = today;
    }
    saveState();

    const next = nextLesson();
    const done = h('button', {
      type: 'button',
      class: 'btn btn-primary',
      text: 'Continue',
      onclick: () => {
        closeOverlay();
        go('learn');
      },
    });

    playerFrame(
      session,
      h(
        'div',
        { class: 'end-screen' },
        h('span', { class: 'kicker', text: session.unit.title }),
        h('h2', { text: clean ? 'Flawless.' : 'Lesson complete' }),
        h(
          'ul',
          { class: 'end-figures' },
          h('li', null, h('b', { text: `+${earned}` }), h('span', { class: 'meta', text: 'XP' })),
          h(
            'li',
            null,
            h('b', { text: `${accuracy}%` }),
            h('span', { class: 'meta', text: 'Accuracy' }),
          ),
          h(
            'li',
            null,
            h('b', { text: String(state.streak) }),
            h('span', { class: 'meta', text: 'Day streak' }),
          ),
        ),
        h(
          'div',
          { class: 'end-actions' },
          done,
          next &&
            h('button', {
              type: 'button',
              class: 'btn',
              text: 'Next lesson',
              onclick: () => startLesson(next.unit, next.lesson),
            }),
        ),
      ),
      null,
    );
    setKeyHandler((e) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        e.preventDefault();
        done.click();
      }
    });
    done.focus();
  }

  function showFail(session) {
    const retry = h('button', {
      type: 'button',
      class: 'btn btn-primary',
      text: 'Try again',
      onclick: () => startLesson(session.unit, session.lesson),
    });
    playerFrame(
      session,
      h(
        'div',
        { class: 'end-screen' },
        h('span', { class: 'kicker', text: session.unit.title }),
        h('h2', { text: 'Out of hearts' }),
        h('p', {
          class: 'meta',
          text: `${session.correct} of ${session.total} answered correctly.`,
        }),
        h(
          'div',
          { class: 'end-actions' },
          retry,
          h('button', {
            type: 'button',
            class: 'btn',
            text: 'Back to lessons',
            onclick: () => {
              closeOverlay();
              render();
            },
          }),
        ),
      ),
      null,
    );
    setKeyHandler((e) => {
      if (e.key === 'Escape') {
        closeOverlay();
        render();
      }
    });
    retry.focus();
  }

  // ---------------------------------------------------------------- tour

  const TOUR = [
    {
      title: 'Insufferable Pedantry',
      body: 'Capital allowances, gamified. Three sections, one tab each.',
    },
    {
      section: 'news',
      title: 'News',
      body: 'What changed in CA, newest first. Unread items are marked.',
    },
    {
      section: 'diagnosis',
      title: 'Diagnosis',
      body: 'Clues arrive one at a time. Name the relief. Fewer clues, more points.',
    },
    {
      section: 'learn',
      title: 'Learn',
      body: 'Short lessons by topic. Three hearts each. Keep the streak alive.',
    },
    {
      title: 'Ready',
      body: 'Replay this any time from Tour, top right.',
    },
  ];

  function startTour() {
    closeOverlay();
    showTourStep(0);
  }

  function endTour() {
    document.body.classList.remove('is-touring');
    document
      .querySelectorAll('.dock-card')
      .forEach((c) => c.classList.remove('is-spotlit', 'is-dimmed'));
    closeOverlay();
    state.tutorialDone = true;
    saveState();
    go('home');
  }

  function showTourStep(i) {
    const step = TOUR[i];
    const last = i === TOUR.length - 1;

    if (step.section) go(step.section);
    else go('home');
    window.scrollTo(0, 0);

    document.body.classList.add('is-touring');
    document.querySelectorAll('.dock-card').forEach((card) => {
      const lit = card.dataset.section === step.section;
      card.classList.toggle('is-spotlit', lit);
      card.classList.toggle('is-dimmed', Boolean(step.section) && !lit);
    });

    const next = h('button', {
      type: 'button',
      class: 'btn btn-primary',
      text: last ? 'Start' : i === 0 ? 'Show me' : 'Next',
      onclick: () => (last ? endTour() : showTourStep(i + 1)),
    });

    overlayRoot.replaceChildren(
      h('div', { class: 'tour-scrim', onclick: endTour }),
      h(
        'div',
        {
          class: `tour-card${step.section ? '' : ' is-centred'}`,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-labelledby': 'tour-title',
        },
        h(
          'div',
          { class: 'tour-dots', 'aria-label': `Step ${i + 1} of ${TOUR.length}` },
          TOUR.map((_, j) => h('span', { class: j === i ? 'is-on' : '' })),
        ),
        h('h2', { id: 'tour-title', text: step.title }),
        h('p', { text: step.body }),
        h(
          'div',
          { class: 'tour-actions' },
          last
            ? h('span')
            : h('button', { type: 'button', class: 'text-btn', text: 'Skip', onclick: endTour }),
          next,
        ),
      ),
    );

    setKeyHandler((e) => {
      if (e.key === 'Escape') endTour();
    });
    next.focus();
  }

  // ---------------------------------------------------------------- boot

  document.getElementById('dateline').textContent = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  document.getElementById('tour-btn').addEventListener('click', startTour);

  // The tour card sits just above the dock, whose height depends on wrapping.
  const dock = document.getElementById('dock');
  const measureDock = () =>
    document.documentElement.style.setProperty('--dock-h', `${dock.offsetHeight}px`);
  window.addEventListener('resize', measureDock);
  measureDock();

  render();
  if (!state.tutorialDone) startTour();
})();
