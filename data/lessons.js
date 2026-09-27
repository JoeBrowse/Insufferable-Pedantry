/*
 * Learn units. A unit with `lessons` is playable; a unit with only `preview` shows as coming soon.
 * Question types: mcq (options + answerIndex), tf (answerBool), match (pairs), number (answerNumber + unit).
 * Each lesson was reviewed by three independent checkers (statute, case law, exam setter) and passed a final gate.
 */
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
            prompt:
              'Yarmouth v France (1887), source of the classic definition of plant, concerned which asset?',
            options: ['A horse', 'A steam crane', 'A brewery vat', 'A shop counter'],
            answerIndex: 0,
            explain:
              "A vicious horse was plant under the Employers' Liability Act 1880. The case was not about tax.",
          },
          {
            type: 'mcq',
            prompt: "On Lindley LJ's definition in Yarmouth v France, which is NOT plant?",
            options: [
              'Fixed apparatus used in the business',
              'Live animals kept for permanent business use',
              'Stock-in-trade bought for sale',
              'Movable goods kept for permanent business use',
            ],
            answerIndex: 2,
            explain:
              'Plant excludes stock-in-trade. It covers goods and chattels, fixed or movable, live or dead, kept for permanent employment in the business.',
          },
          {
            type: 'tf',
            prompt:
              'In Benson v Yard Arm Club, a ship used as a floating restaurant was held not to be plant.',
            answerBool: true,
            explain:
              'True. The ship was the place in which the restaurant trade was carried on, not apparatus with which it was carried on.',
          },
          {
            type: 'mcq',
            prompt:
              'Under Wimpy v Warland, an item will usually not be plant if it functions as what?',
            options: [
              'Part of the premises',
              'Decor attracting customers',
              'Equipment that is easily moved',
              'An asset with a long life',
            ],
            answerIndex: 0,
            explain:
              'Items functioning as part of the premises, rather than trade apparatus, are not plant, save rare cases like the Barclay Curle dry dock.',
          },
          {
            type: 'match',
            prompt: 'Match each item to the CAA 2001 list containing it.',
            pairs: [
              {
                left: 'Windows',
                right: 'List A',
              },
              {
                left: 'Runway',
                right: 'List B',
              },
              {
                left: 'Cold stores',
                right: 'List C',
              },
            ],
            explain:
              'List A (s21): treated as buildings. List B (s22): excluded structures. List C (s23): unaffected by ss21–22.',
          },
          {
            type: 'tf',
            prompt: 'An item listed in List C (s23) automatically qualifies as plant or machinery.',
            answerBool: false,
            explain:
              's23: ss21–22 do not affect whether it is plant or machinery; it must still qualify on general principles or under another provision.',
          },
        ],
      },
      {
        id: 'plant-2',
        title: 'The cases',
        questions: [
          {
            type: 'mcq',
            prompt: 'Which of these did the UK courts ultimately hold was NOT plant?',
            options: [
              'Building society window screens',
              "Shipbuilder's dry dock",
              'Petrol station canopy',
              "Shoe manufacturer's knives and lasts",
            ],
            answerIndex: 2,
            explain:
              "Dixon v Fitch's Garage: the canopy was mere shelter, not apparatus for supplying petrol. The other three were held plant.",
          },
          {
            type: 'match',
            prompt: 'Match each case to the item it held to be plant.',
            pairs: [
              {
                left: 'Jarrold v John Good',
                right: 'Movable office partitions',
              },
              {
                left: 'Cooke v Beach Station',
                right: 'Caravan park swimming pool',
              },
              {
                left: 'Schofield v R & H Hall',
                right: 'Grain silos',
              },
              {
                left: 'Munby v Furlong',
                right: "Barrister's law books",
              },
            ],
            explain:
              'All held to be plant. Munby v Furlong (CA) overruled Daphne v Shaw on professional books.',
          },
          {
            type: 'mcq',
            prompt:
              'J Lyons & Co v Attorney-General (1944): why were the electric lamps and fittings in a teashop not plant?',
            options: [
              'They were part of the setting, not apparatus',
              'They were bought as stock-in-trade',
              'They were not kept for permanent use',
            ],
            answerIndex: 0,
            explain:
              'The lamps merely provided general lighting, so were part of the setting in which the trade was carried on, not apparatus used in it.',
          },
          {
            type: 'tf',
            prompt:
              'In Hampton v Fortes Autogrill, false ceilings concealing pipes and wiring were held to be plant.',
            answerBool: false,
            explain:
              'Not plant: the ceilings only hid services and performed no function in the restaurant trade.',
          },
          {
            type: 'mcq',
            prompt: 'Gray v Seymours Garden Centre (CA, 1995): why was the planteria not plant?',
            options: [
              'It functioned as premises, not apparatus',
              'Its cost was revenue, not capital',
              'It was not purpose-built for the trade',
            ],
            answerIndex: 0,
            explain:
              'CA: though used to keep the plants in good condition, the planteria was the premises where the trade was carried on, not apparatus.',
          },
          {
            type: 'tf',
            prompt:
              'In IRC v Scottish & Newcastle Breweries, decor and murals in hotels were held to be plant.',
            answerBool: true,
            explain:
              'HL (1982): creating atmosphere was part of the hotel trade, so the decor was plant.',
          },
        ],
      },
    ],
  },
  {
    id: 'pools',
    title: 'Pools and rates',
    lessons: [
      {
        id: 'pools-1',
        title: 'Main and special rate',
        questions: [
          {
            type: 'mcq',
            prompt: 'Company, year to 31 March 2027: main pool and special rate pool WDA rates?',
            options: ['14% and 6%', '18% and 6%', '14% and 8%', '18% and 8%'],
            answerIndex: 0,
            explain:
              'Main rate cut from 18% to 14% from 1 April 2026 for companies; special rate stays 6%.',
          },
          {
            type: 'match',
            prompt: 'Match each topic to its CAA 2001 section.',
            pairs: [
              {
                left: 'Thermal insulation',
                right: 's28',
              },
              {
                left: 'Integral features',
                right: 's33A',
              },
              {
                left: 'Meaning of long-life asset',
                right: 's91',
              },
              {
                left: 'Special rate expenditure',
                right: 's104A',
              },
            ],
            explain:
              's104A lists special rate expenditure; s28, s33A and s91 underpin three of its categories.',
          },
          {
            type: 'mcq',
            prompt: 'Which of these is NOT an integral feature under s33A?',
            options: [
              'Lift',
              'Cold water system',
              'External solar shading',
              'Thermal insulation of a building',
            ],
            answerIndex: 3,
            explain:
              'Thermal insulation within s28 is special rate (s104A), but s33A does not list it as an integral feature.',
          },
          {
            type: 'mcq',
            prompt: 'Long-life asset (s91): minimum expected useful economic life?',
            options: ['15 years', '20 years', '25 years', '30 years'],
            answerIndex: 2,
            explain:
              's91: plant or machinery reasonably expected to have a useful economic life of at least 25 years.',
          },
          {
            type: 'mcq',
            prompt:
              's93: a fixture expected to have a 30-year useful economic life escapes long-life treatment in a building used wholly or mainly as:',
            options: ['An office', 'A factory', 'A laboratory', 'A power station'],
            answerIndex: 0,
            explain:
              's93 excludes from long-life treatment fixtures in buildings used wholly or mainly as dwelling-houses, retail shops, showrooms, hotels or offices.',
          },
          {
            type: 'tf',
            prompt:
              'A company with no associated or group companies and a 12-month chargeable period has a £100,000 long-life asset monetary limit.',
            answerBool: true,
            explain:
              'Long-life monetary limit: £100,000 for a 12-month chargeable period, proportionately reduced for shorter periods; nothing here requires it to be divided.',
          },
        ],
      },
      {
        id: 'pools-2',
        title: 'Computations',
        questions: [
          {
            type: 'number',
            prompt:
              'Company, year to 31 March 2027: main pool b/f £50,000, no additions or disposals. Maximum WDA?',
            answerNumber: 7000,
            unit: '£',
            explain: '£50,000 × 14% = £7,000. Period starts on 1 April 2026, so no hybrid rate.',
          },
          {
            type: 'mcq',
            prompt:
              'Company, year to 31 March 2027, buys used 2020-registered 80 g/km car for £20,000. No other assets. Maximum allowance?',
            options: ['£1,200', '£2,800', '£8,000', '£20,000'],
            answerIndex: 0,
            explain:
              'Over 50 g/km, so special rate pool: £20,000 × 6%. Cars get no AIA or 40% FYA; it is neither new nor zero-emission.',
          },
          {
            type: 'number',
            prompt:
              'Company, year to 31 March 2027: special rate pool b/f £40,000, no additions; 2019-acquired special rate asset sold for £10,000 (below cost). Maximum WDA?',
            answerNumber: 1800,
            unit: '£',
            explain:
              '(£40,000 − £10,000) × 6% = £1,800. The asset predates the 50% FYA, so all proceeds reduce the pool before the WDA.',
          },
          {
            type: 'mcq',
            prompt:
              'Company, year to 31 March 2027: main pool b/f plus additions less disposals is £800, no AIA/FYA claimed. Maximum WDA?',
            options: ['£112', '£144', '£800', '£1,000'],
            answerIndex: 2,
            explain:
              'Balance of £1,000 or less for a 12-month period: s56A lets the whole £800 be claimed.',
          },
          {
            type: 'tf',
            prompt: 'The s56A small pools allowance can be claimed on a single asset pool.',
            answerBool: false,
            explain: 's56A applies only to the main pool and the special rate pool.',
          },
          {
            type: 'match',
            prompt:
              'Year to 31 March 2027: match each used car purchase, all 2020-registered, to its pool.',
            pairs: [
              {
                left: 'Bought by company, 50 g/km',
                right: 'Main pool',
              },
              {
                left: 'Bought by company, 51 g/km',
                right: 'Special rate pool',
              },
              {
                left: 'Sole trader, some private use by trader',
                right: 'Single asset pool',
              },
            ],
            explain:
              "50 g/km or less: main pool; above: special rate pool. Trader's partial private use: single asset pool; allowances reduced on a just and reasonable basis.",
          },
        ],
      },
    ],
  },
  {
    id: 'sba',
    title: 'Structures and buildings',
    lessons: [
      {
        id: 'sba-1',
        title: 'The basics',
        questions: [
          {
            type: 'mcq',
            prompt:
              'SBA requires construction to begin, and every contract for the construction works to be made, on or after which date?',
            options: ['29 October 2018', '1 April 2020', '6 April 2018', '1 January 2019'],
            answerIndex: 0,
            explain:
              'If any contract for the construction works predates 29 October 2018, construction is treated as beginning before then, so that expenditure gets no SBA.',
          },
          {
            type: 'tf',
            prompt:
              'For chargeable periods ending before 1 April 2020, the SBA rate was 2% a year.',
            answerBool: true,
            explain: 'FA 2020 raised the rate to 3% from 1 April 2020 (CT) and 6 April 2020 (IT).',
          },
          {
            type: 'match',
            prompt: 'Match each cost to its capital allowances treatment.',
            pairs: [
              {
                left: 'Warehouse walls, floor and roof',
                right: 'SBA qualifying expenditure',
              },
              {
                left: 'Buying the site',
                right: 'Excluded: land',
              },
              {
                left: 'Planning application fees',
                right: 'Excluded: planning',
              },
              {
                left: 'Passenger lift',
                right: 'Plant and machinery allowances',
              },
            ],
            explain:
              'Land and planning costs are excluded from SBA; a lift is an integral feature (s33A), so it gets plant and machinery allowances.',
          },
          {
            type: 'mcq',
            prompt: 'Which use is residential use, so no SBA?',
            options: ['Student accommodation', 'Hotel run as a trade', 'Office block', 'Warehouse'],
            answerIndex: 0,
            explain:
              'Student accommodation is expressly residential use, so not qualifying use; a hotel run as a trade is not a dwelling-house.',
          },
          {
            type: 'number',
            prompt:
              'Company, year to 31 March 2027: 2024 qualifying expenditure £1,000,000; relevant interest, qualifying use throughout; allowance statement; outside special tax sites. SBA?',
            answerNumber: 30000,
            unit: '£',
            explain:
              '3% a year straight line; allowance period, relevant interest and qualifying use cover the whole year, so no apportionment: £1,000,000 × 3% = £30,000.',
          },
          {
            type: 'mcq',
            prompt: 'Which is NOT required in an SBA allowance statement?',
            options: [
              'Date of earliest written construction contract',
              'Amount of qualifying expenditure',
              'Date first in non-residential use',
              'Planning permission reference number',
            ],
            answerIndex: 3,
            explain:
              'It must identify the building and state earliest written construction contract date, qualifying expenditure and first non-residential use date; no statement, no SBA.',
          },
        ],
      },
      {
        id: 'sba-2',
        title: 'Details and disposals',
        questions: [
          {
            type: 'tf',
            prompt: 'Selling a building triggers an SBA balancing allowance or balancing charge.',
            answerBool: false,
            explain:
              "Part 2A has no balancing adjustments; the buyer continues the seller's remaining allowances.",
          },
          {
            type: 'mcq',
            prompt:
              "The seller has claimed SBA. How is it treated in the seller's chargeable gain?",
            options: [
              'Clawed back as a balancing charge',
              'Added to disposal consideration',
              "Added to the buyer's base cost",
              'Ignored for chargeable gains',
            ],
            answerIndex: 1,
            explain:
              "TCGA 1992 s37B adds SBA claimed to the seller's disposal consideration, increasing a gain or reducing a loss.",
          },
          {
            type: 'number',
            prompt:
              'Company buys used office for £800,000; original qualifying cost £500,000 (3% rate). SBA for its next 12-month accounting period, qualifying use throughout?',
            answerNumber: 15000,
            unit: '£',
            explain:
              'The buyer continues on original qualifying expenditure, not price paid: £500,000 × 3% = £15,000.',
          },
          {
            type: 'match',
            prompt: 'Match each SBA measure to its figure.',
            pairs: [
              {
                left: 'Standard annual rate',
                right: '3%',
              },
              {
                left: 'Special tax site annual rate',
                right: '10%',
              },
              {
                left: 'Standard write-off period',
                right: '33⅓ years',
              },
              {
                left: 'Special tax site write-off period',
                right: '10 years',
              },
            ],
            explain:
              'Standard 3% writes off in 33⅓ years; special tax sites at 10% write off in 10 years.',
          },
          {
            type: 'mcq',
            prompt:
              'English freeport tax site: when does the enhanced 10% SBA relief window currently end?',
            options: [
              '30 September 2031',
              '30 September 2034',
              '30 September 2026',
              '5 April 2031',
            ],
            answerIndex: 0,
            explain:
              'English freeport relief window, including enhanced SBA, was extended from 30 September 2026 to 30 September 2031.',
          },
          {
            type: 'mcq',
            prompt: 'When does the SBA allowance period begin?',
            options: [
              'Later of first non-residential use and expenditure incurred',
              'When the construction contract is signed',
              'When construction is completed',
              'Earlier of first non-residential use and expenditure incurred',
            ],
            answerIndex: 0,
            explain:
              's270AA: later of first non-residential use and the day qualifying expenditure is incurred.',
          },
        ],
      },
    ],
  },
  {
    id: 'fya',
    title: 'AIA and first-year allowances',
    preview: [
      {
        id: 'fya-1',
        title: 'Annual investment allowance',
      },
      {
        id: 'fya-2',
        title: 'Full expensing and friends',
      },
    ],
  },
  {
    id: 'fixtures',
    title: 'Fixtures',
    preview: [
      {
        id: 'fixtures-1',
        title: 'The pooling requirement',
      },
      {
        id: 'fixtures-2',
        title: 'Section 198 elections',
      },
    ],
  },
  {
    id: 'disposals',
    title: 'Disposals',
    preview: [
      {
        id: 'disposals-1',
        title: 'Disposal values',
      },
      {
        id: 'disposals-2',
        title: 'Balancing adjustments',
      },
    ],
  },
];
