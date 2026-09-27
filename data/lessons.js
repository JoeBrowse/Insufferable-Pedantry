window.IP_DATA = window.IP_DATA || {};
window.IP_DATA.units = [
  {
    id: 'plant',
    title: 'Plant or premises',
    lessons: [
      {
        id: 'plant-1',
        title: 'The tests',
        questions: [
          {
            type: 'mcq',
            prompt: 'Placeholder mcq?',
            options: ['A', 'B', 'C'],
            answerIndex: 1,
            explain: 'Because B.',
          },
          { type: 'tf', prompt: 'Placeholder statement.', answerBool: true, explain: 'True.' },
          {
            type: 'match',
            prompt: 'Match them.',
            pairs: [
              { left: 'Horse', right: 'Plant' },
              { left: 'Planteria', right: 'Premises' },
              { left: 'Ship restaurant', right: 'Premises (setting)' },
            ],
            explain: 'Cases.',
          },
          {
            type: 'number',
            prompt: 'Main pool £100,000, 14% WDA. Allowance?',
            answerNumber: 14000,
            unit: '£',
            explain: '14% of £100,000.',
          },
        ],
      },
      {
        id: 'plant-2',
        title: 'The cases',
        questions: [{ type: 'tf', prompt: 'Placeholder.', answerBool: false, explain: 'False.' }],
      },
    ],
  },
  {
    id: 'fixtures',
    title: 'Fixtures',
    preview: [
      { id: 'fixtures-1', title: 'The pooling requirement' },
      { id: 'fixtures-2', title: 'Section 198 elections' },
    ],
  },
];
