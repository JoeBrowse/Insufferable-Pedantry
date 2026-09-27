/*
 * Diagnosis cases. Five clues each, most oblique first. `answer` must match a name in reliefs.js.
 * Each case was reviewed by three independent checkers (statute, case law, exam setter) and passed a final gate.
 */
window.IP_DATA = window.IP_DATA || {};

window.IP_DATA.cases = [
  {
    id: 'c-aia',
    answer: 'Annual investment allowance',
    clues: [
      'Relieves plant costs in the period incurred.',
      'Not available to trustees.',
      'Main and special rate plant both qualify; cars do not.',
      'Second-hand plant can qualify; denied to partnerships with a corporate partner.',
      '£1m cap, pro rata for short periods, one per group.',
    ],
    explain:
      '100% relief on up to £1m a year of plant spend, cars excluded; £1m since 2019, made permanent from April 2023.',
    ref: 'CAA 2001, ss 38A and 51A',
  },
  {
    id: 'c-fe',
    answer: 'Full expensing',
    clues: [
      'Unused, not second-hand plant or machinery only.',
      'Companies within the charge to corporation tax only.',
      'No monetary cap and no end date.',
      'Special rate expenditure and cars excluded.',
      '100% allowance rate; succeeded the 130% regime from 1 April 2023.',
    ],
    explain:
      "Companies' 100% FYA from 1 April 2023: unused main rate plant or machinery; exclusions include cars and leasing; permanent since FA 2024.",
    ref: 'CAA 2001, s 45S',
  },
  {
    id: 'c-sba',
    answer: 'Structures and buildings allowance',
    clues: [
      'Cost of the land itself never qualifies.',
      'Straight line, not reducing balance.',
      'No balancing adjustment on sale; the buyer carries on claiming.',
      'Allowances claimed are added to disposal proceeds for gains.',
      '3% a year over 33⅓ years.',
    ],
    explain:
      'Non-residential construction works begun and contracted from 29 October 2018: 3% a year (2% before 1 April 2020; income tax, 6 April).',
    ref: 'CAA 2001, Part 2A',
  },
  {
    id: 'c-sla',
    answer: 'Short-life asset election',
    clues: [
      'Changes the timing of relief, not the total.',
      'Plant and machinery only; unavailable for special rate expenditure.',
      'Ships excluded; by statute each item gets its own pool.',
      'Irrevocable; companies have two years to opt in.',
      'Eight-year cut-off from end of period expenditure incurred; then main pool.',
    ],
    explain:
      'Opt to pool an asset singly so a disposal before the eight-year cut-off can give a balancing allowance.',
    ref: 'CAA 2001, ss 83–89',
  },
  {
    id: 'c-lrr',
    answer: 'Land remediation relief',
    clues: [
      'Companies only.',
      'Total deduction exceeds what was actually spent.',
      'Loss can be surrendered for a 16% payable credit.',
      'Barred if company, or person with relevant connection, caused contamination, even partly.',
      'Costs of dealing with Japanese knotweed can qualify.',
    ],
    explain:
      'Companies deduct 150% of qualifying expenditure remediating contaminated or long-derelict UK land; resulting losses surrenderable for 16% payable credit.',
    ref: 'CTA 2009, Part 14',
  },
];
