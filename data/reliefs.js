/*
 * Every answer the Diagnosis game accepts. Cases must use one of these names
 * exactly; the rest are there so the player has plausible wrong answers.
 * Aliases are matched case-insensitively when the player types.
 */
window.IP_DATA = window.IP_DATA || {};

window.IP_DATA.reliefs = [
  { name: 'Annual investment allowance', aliases: ['AIA'] },
  { name: 'Full expensing', aliases: ['FE', '100% main rate FYA'] },
  {
    name: '50% special rate first-year allowance',
    aliases: ['50% FYA', 'SR allowance', 'special rate FYA'],
  },
  { name: '40% main rate first-year allowance', aliases: ['40% FYA', 'main rate FYA'] },
  { name: 'Super-deduction', aliases: ['superdeduction', '130%'] },
  {
    name: '100% first-year allowance: zero-emission cars',
    aliases: ['ZEC', 'electric cars', 'EV cars'],
  },
  {
    name: '100% first-year allowance: electric vehicle charge points',
    aliases: ['charge points', 'EVCP', 'EV charging'],
  },
  {
    name: 'Enhanced capital allowances (energy and water efficient)',
    aliases: ['ECA', 'ECAs', 'energy technology list'],
  },
  { name: 'Main pool writing down allowance', aliases: ['WDA', 'main pool', 'main rate'] },
  {
    name: 'Special rate pool writing down allowance',
    aliases: ['special rate pool', 'special rate'],
  },
  { name: 'Small pools allowance', aliases: ['small pools', 'SPA'] },
  { name: 'Short-life asset election', aliases: ['short life asset', 'SLA', 'depooling'] },
  { name: 'Balancing allowance', aliases: ['BA'] },
  { name: 'Structures and buildings allowance', aliases: ['SBA'] },
  {
    name: 'Freeport and investment zone enhanced SBA',
    aliases: ['freeport SBA', 'enhanced SBA', 'investment zone SBA'],
  },
  {
    name: 'Freeport and investment zone enhanced capital allowances',
    aliases: ['freeport capital allowances', 'freeport ECA', 'investment zone capital allowances'],
  },
  { name: 'Industrial buildings allowance', aliases: ['IBA'] },
  { name: 'Agricultural buildings allowance', aliases: ['ABA'] },
  { name: 'Business premises renovation allowance', aliases: ['BPRA'] },
  { name: 'Flat conversion allowance', aliases: ['FCA', 'flats over shops'] },
  {
    name: 'Research and development allowances',
    aliases: ['RDA', 'R&D allowances', 'scientific research allowance'],
  },
  { name: 'Land remediation relief', aliases: ['LRR', 'contaminated land'] },
  { name: 'Mineral extraction allowances', aliases: ['MEA'] },
  { name: 'Patent allowances', aliases: ['patents'] },
  { name: 'Know-how allowances', aliases: ['knowhow'] },
  { name: 'Dredging allowances', aliases: ['dredging'] },
  {
    name: 'Replacement of domestic items relief',
    aliases: ['RDIR', 'replacement furniture relief'],
  },
  { name: 'Enterprise zone enhanced capital allowances', aliases: ['enterprise zone', 'EZ ECA'] },
];
