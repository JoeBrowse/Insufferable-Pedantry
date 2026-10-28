/*
 * Learn units. A unit with `lessons` is playable; a unit with only `preview` shows as coming soon.
 * Question types: mcq (options + answerIndex), tf (answerBool), match (pairs), number (answerNumber + unit).
 * Every item cites the source library (sources/*.jsonl) with a quote that tests/unit/insufferable-pedantry-content.test.ts
 * confirms word for word; each was then passed by an independent auditor.
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
            sources: [
              {
                id: '[2022] EWCA Civ 1587',
                url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
                quote: 'whether a vicious horse was a',
              },
              {
                id: '[2022] EWCA Civ 1587',
                url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
                quote:
                  'used in the business of a wharfinger for the purposes of the Employers Liability Act 1880',
              },
              {
                id: '[2022] EWCA Civ 1587',
                url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
                quote: 'Holding that it was, Lindley LJ said at 658',
              },
              {
                id: '[2023] UKUT 260 (TCC)',
                url: 'https://caselaw.nationalarchives.gov.uk/ukut/tcc/2023/260',
                quote: 'the horse in the seminal case of Yarmouth v France',
              },
              {
                id: 'HMRC CA21100',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
                quote:
                  'It was not a tax case but was a case under the Employer’s Liability Act 1880.',
              },
            ],
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
            sources: [
              {
                id: 'HMRC CA21100',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
                quote:
                  'not his stock-in-trade which he buys or makes for sale; but all goods and chattels, fixed or movable, live or dead, which he keeps for permanent employment in the business',
              },
            ],
          },
          {
            type: 'tf',
            prompt:
              'In Benson v Yard Arm Club, a ship used as a floating restaurant was held not to be plant.',
            answerBool: true,
            explain:
              'True. The ship was the place in which the restaurant trade was carried on, not apparatus with which it was carried on.',
            sources: [
              {
                id: 'HMRC CA21100',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
                quote:
                  'The ship was the structure within which the restaurant trade was carried on rather than apparatus with which it was carried on.',
              },
              {
                id: '[2022] EWCA Civ 1587',
                url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
                quote:
                  'a ship used as a floating restaurant, although a chattel, was held not to be plant because it was the place in which the business was conducted',
              },
            ],
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
            sources: [
              {
                id: 'HMRC CA21140',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21140',
                quote:
                  'an item used for carrying on the business is not plant if the business use is as the premises (or part of the premises) or place on which the business is conducted',
              },
              {
                id: 'HMRC CA21130',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21130',
                quote:
                  'except in the rare case where the premises themselves are plant, like the dry dock in Barclay Curle',
              },
              {
                id: 'HMRC CA21140',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21140',
                quote:
                  'lighting to create atmosphere and to attract customers was allowed in Wimpy',
              },
              {
                id: 'HMRC CA21100',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
                quote:
                  'You should accept that an asset that has an expected life of two years or more (the 2 year test) is sufficiently durable to be plant.',
              },
            ],
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
            sources: [
              {
                id: 'CAA 2001 s 21',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/21',
                quote: 'Walls, floors, ceilings, doors, gates, shutters, windows and stairs.',
              },
              {
                id: 'CAA 2001 s 22',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/22',
                quote: 'a park for vehicles or containers, or an airstrip or runway',
              },
              {
                id: 'CAA 2001 s 23',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/23',
                quote: 'Cold stores.',
              },
            ],
          },
          {
            type: 'tf',
            prompt: 'An item listed in List C (s23) automatically qualifies as plant or machinery.',
            answerBool: false,
            explain:
              's23(3) only lifts the ss21–22 exclusions; HMRC requires a List C asset to function as plant at common law.',
            sources: [
              {
                id: 'CAA 2001 s 23',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/23',
                quote:
                  'Sections 21 and 22 also do not affect the question whether expenditure on any item described in list C is, for the purposes of this Act, expenditure on the provision of plant or machinery.',
              },
              {
                id: 'HMRC CA21010',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21010',
                quote:
                  'Items described in ‘List C’ are not automatically treated as if they were plant.',
              },
            ],
          },
        ],
      },
      {
        id: 'plant-2',
        title: 'The cases',
        questions: [
          {
            type: 'mcq',
            prompt: 'Which of these did the courts hold was NOT plant?',
            options: [
              "Shipbuilder's dry dock",
              'Floating restaurant ship',
              "Shoe manufacturer's knives and lasts",
            ],
            answerIndex: 1,
            explain:
              'Benson v Yard Arm Club: the ship was the place where the business was conducted. The dry dock and the knives and lasts were plant.',
            sources: [
              {
                id: '[2022] EWCA Civ 1587',
                url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
                quote:
                  'a ship used as a floating restaurant, although a chattel, was held not to be plant because it was the place in which the business was conducted',
              },
              {
                id: 'HMRC CA22050',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca22050',
                quote: 'CIR v Barclay Curle and Co Ltd 45TC221 - a dry dock was found to be plant',
              },
              {
                id: 'HMRC CA21100',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
                quote:
                  'knives and lasts which had an average life of 3 years and which were used by a shoemaker were held to be plant',
              },
            ],
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
                left: 'Leeds Permanent v Proctor',
                right: 'Window display screens',
              },
            ],
            explain:
              'All held to be plant: each was part of the setting or a structure, yet also apparatus used in the trade.',
            sources: [
              {
                id: 'HMRC CA21120',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21120',
                quote: 'moveable partitions were held to be plant',
              },
              {
                id: 'HMRC CA22060',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca22060',
                quote:
                  'In the case of Cooke v Beach Station Caravans Ltd 49TC514 a swimming pool was held to be plant',
              },
              {
                id: '[2022] EWCA Civ 1587',
                url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
                quote: 'holding that grain silos, viewed as a whole, qualified as plant',
              },
              {
                id: 'HMRC CA21120',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21120',
                quote:
                  'The High Court held that the window screens were part of the shop furniture with which the trade of the society was carried on',
              },
            ],
          },
          {
            type: 'mcq',
            prompt:
              'J Lyons & Co v Attorney-General (1944): why were the lamps held not to be plant?',
            options: [
              'They were setting, not apparatus',
              'They formed part of the building',
              'Lighting can never be plant',
            ],
            answerIndex: 0,
            explain:
              'Uthwatt J: the lamps were part of the general setting, not apparatus. Atmospheric lighting was later allowed in Wimpy.',
            sources: [
              {
                id: 'HMRC CA21110',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21110',
                quote:
                  'He decided that the lamps were not plant because they were part of the general setting in which the business was carried on',
              },
              {
                id: 'HMRC CA21110',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21110',
                quote:
                  'The lamps were not part of the building and so the question was whether they were plant',
              },
              {
                id: 'HMRC CA21140',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21140',
                quote:
                  'lighting to create atmosphere and to attract customers was allowed in Wimpy',
              },
            ],
          },
          {
            type: 'tf',
            prompt:
              'In Hampton v Fortes Autogrill, false ceilings concealing pipes and wiring were held to be plant.',
            answerBool: false,
            explain:
              'Not plant: the ceilings only concealed service pipes and wiring, and were not apparatus used in the restaurant trade.',
            sources: [
              {
                id: 'HMRC CA22080',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca22080',
                quote:
                  "The ceilings' only function was to conceal service pipes, wiring etc. They were not apparatus with which the company carried on its trade of running a restaurant",
              },
            ],
          },
          {
            type: 'mcq',
            prompt: 'Gray v Seymours Garden Centre (CA, 1995): why was the planteria not plant?',
            options: [
              'It functioned as premises, not apparatus',
              'It performed no function in the trade',
              'It was not purpose-built for the trade',
            ],
            answerIndex: 0,
            explain:
              'CA: though purpose-built and with a functional aspect, the planteria was part of the premises in which the business was carried on.',
            sources: [
              {
                id: '[2024] UKFTT 1163 (TC)',
                url: 'https://caselaw.nationalarchives.gov.uk/ukftt/tc/2024/1163',
                quote:
                  'the planteria was part of the premises in which the taxpayer&#8217;s business was carried on and even though the planteria had a functional aspect, that did not mean that it was plant',
              },
              {
                id: '[2024] UKFTT 1163 (TC)',
                url: 'https://caselaw.nationalarchives.gov.uk/ukftt/tc/2024/1163',
                quote:
                  'instructive examples of cases where purpose-built structures of a specialised nature have been held to fall on the premises side of the line',
              },
              {
                id: '[2022] EWCA Civ 1587',
                url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
                quote:
                  'Gray (Inspector of Taxes) v Seymours Garden Centre (Horticulture) [1995] STC 706 (CA)',
              },
            ],
          },
          {
            type: 'tf',
            prompt:
              'In IRC v Scottish & Newcastle Breweries, tapestries and murals were held to be plant.',
            answerBool: true,
            explain:
              'HL (1982): though part of the setting, they created the atmosphere the trade provided to customers, so were plant.',
            sources: [
              {
                id: 'HMRC CA21140',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21140',
                quote:
                  'items like the tapestries, murals, prints and sculptures in the Scottish and Newcastle case were part of the setting but they qualified for capital allowances as plant',
              },
              {
                id: 'HMRC CA21130',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21130',
                quote:
                  'went to create the atmosphere or ambience that it was an important function of the company’s particular trade to provide for its customers to resort to and enjoy',
              },
              {
                id: '[2021] EWCA Civ 105',
                url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2021/105',
                quote:
                  'the decision of the House of Lords in Commissioners of Inland Revenue v Scottish & Newcastle Breweries Ltd [1982] 1 WLR 322',
              },
            ],
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
              's56(1): 14% main rate, for company periods beginning on or after 1 April 2026 (CA23220); s104D(1): special rate 6%.',
            sources: [
              {
                id: 'CAA 2001 s 56',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56',
                quote:
                  'the amount of the writing-down allowance to which a person is entitled for a chargeable period is 14% of the amount by which AQE exceeds TDR',
              },
              {
                id: 'CAA 2001 s 104D',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104D',
                quote:
                  'in respect of expenditure which is special rate expenditure is 6% of the amount by which AQE exceeds TDR',
              },
              {
                id: 'HMRC CA23220',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23220',
                quote:
                  '1 April 2026 for Corporation Tax or 6 April 2026 for Income Tax is 14% (FA 2026)',
              },
            ],
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
            sources: [
              {
                id: 'CAA 2001 s 28',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/28',
                quote:
                  'adding insulation against loss of heat to a building occupied by him for the purposes of the qualifying activity',
              },
              {
                id: 'CAA 2001 s 33A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33A',
                quote:
                  'expenditure on the provision or replacement of an integral feature of a building or structure',
              },
              {
                id: 'CAA 2001 s 91',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/91',
                quote: '"long-life asset" means plant or machinery which',
              },
              {
                id: 'CAA 2001 s 104A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104A',
                quote:
                  'expenditure incurred on or after the first relevant date to which section 28 (thermal insulation) applies',
              },
              {
                id: 'CAA 2001 s 104A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104A',
                quote:
                  'expenditure incurred on or after that date to which section 33A (integral features) applies',
              },
              {
                id: 'CAA 2001 s 104A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104A',
                quote:
                  'long-life asset expenditure (within the meaning of Chapter 10) incurred on or after that date',
              },
            ],
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
              's33A(5) lists lifts, cold water systems and external solar shading; s33A(6) excludes insulating assets. s28 insulation is special rate under s104A.',
            sources: [
              {
                id: 'CAA 2001 s 33A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33A',
                quote: 'a lift, an escalator or a moving walkway',
              },
              {
                id: 'CAA 2001 s 33A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33A',
                quote: 'a cold water system',
              },
              {
                id: 'CAA 2001 s 33A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33A',
                quote: 'external solar shading',
              },
              {
                id: 'CAA 2001 s 33A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33A',
                quote:
                  'do not include any asset whose principal purpose is to insulate or enclose the interior of a building',
              },
              {
                id: 'CAA 2001 s 104A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104A',
                quote:
                  'expenditure incurred on or after the first relevant date to which section 28 (thermal insulation) applies',
              },
            ],
          },
          {
            type: 'mcq',
            prompt: 'Long-life asset (s91): minimum expected useful economic life?',
            options: ['15 years', '20 years', '25 years', '30 years'],
            answerIndex: 2,
            explain:
              's91: plant or machinery reasonably expected to have a useful economic life of at least 25 years.',
            sources: [
              {
                id: 'CAA 2001 s 91',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/91',
                quote:
                  'can reasonably be expected to have a useful economic life of at least 25 years',
              },
            ],
          },
          {
            type: 'mcq',
            prompt:
              's93: a fixture expected to have a 30-year useful economic life escapes long-life treatment in a building used wholly or mainly as:',
            options: ['An office', 'A factory', 'A laboratory', 'A power station'],
            answerIndex: 0,
            explain:
              's93 excludes from long-life treatment fixtures in buildings used wholly or mainly as dwelling-houses, retail shops, showrooms, hotels or offices.',
            sources: [
              {
                id: 'CAA 2001 s 93',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/93',
                quote:
                  'Expenditure is not long-life asset expenditure if it is incurred on the provision of plant or machinery which is a fixture in',
              },
              {
                id: 'CAA 2001 s 93',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/93',
                quote: 'as a dwelling-house, hotel, office, retail shop or showroom',
              },
            ],
          },
          {
            type: 'tf',
            prompt:
              'A company with no associated companies and a 12-month chargeable period has a £100,000 long-life asset monetary limit.',
            answerBool: true,
            explain:
              's99(1): £100,000 for a 12-month period; s99(4) divides it only where the company has associated companies.',
            sources: [
              {
                id: 'CAA 2001 s 99',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/99',
                quote:
                  'The monetary limit in the case of a chargeable period of 12 months is £100,000.',
              },
              {
                id: 'CAA 2001 s 99',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/99',
                quote: 'If, in a chargeable period, a company has one or more associated companies',
              },
            ],
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
            explain:
              '£50,000 × 14% = £7,000. 14% applies to periods beginning on or after 1 April 2026, so no hybrid rate.',
            sources: [
              {
                id: 'CAA 2001 s 56',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56',
                quote:
                  'The amount of the writing-down allowance to which a person is entitled for a chargeable period is 14% of the amount by which AQE exceeds TDR.',
              },
              {
                id: 'HMRC CA23220',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23220',
                quote: '1 April 2026 for Corporation Tax or 6 April 2026 for Income Tax is 14%',
              },
              {
                id: 'HMRC CA23222',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23222',
                quote:
                  'When a chargeable period begins before, and ends on or after, the date the main or special rate of WDA changes, a hybrid rate is used',
              },
            ],
          },
          {
            type: 'mcq',
            prompt:
              'Company, year to 31 March 2027, buys used 2020-registered 80 g/km car for £20,000. No other assets. Maximum allowance?',
            options: ['£1,200', '£2,800', '£8,000', '£20,000'],
            answerIndex: 0,
            explain:
              'Over 50 g/km, so special rate pool: £20,000 × 6%. Cars get no AIA; a used car gets no 40% FYA.',
            sources: [
              {
                id: 'CAA 2001 s 104A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104A',
                quote:
                  'expenditure incurred on or after the second relevant date on the provision of a car that is not a main rate car',
              },
              {
                id: 'CAA 2001 s 104AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104AA',
                quote:
                  'the applicable CO2 emissions figure in relation to the car does not exceed 50 grams per kilometre driven',
              },
              {
                id: 'CAA 2001 s 104D',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104D',
                quote: 'is 6% of the amount by which AQE exceeds TDR',
              },
              {
                id: 'CAA 2001 s 38B',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/38B',
                quote:
                  'The expenditure is incurred on the provision of a car (as defined by section 268A).',
              },
              {
                id: 'CAA 2001 s 45U',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/45U',
                quote:
                  'it is expenditure on plant or machinery which is unused and not second-hand',
              },
              {
                id: 'HMRC CA23153',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23153',
                quote:
                  'Cars do not qualify for annual investment allowance, super-deduction, full expensing or 50% first-year allowances.',
              },
            ],
          },
          {
            type: 'number',
            prompt:
              'Company, year to 31 March 2027: special rate pool b/f £40,000, no additions; 2019-acquired special rate asset sold for £10,000 (below cost). Maximum WDA?',
            answerNumber: 1800,
            unit: '£',
            explain:
              '(£40,000 − £10,000) × 6% = £1,800. Bought before 1 April 2023, so no s45S FYA: full proceeds reduce the pool; s59B does not apply.',
            sources: [
              {
                id: 'CAA 2001 s 61',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/61',
                quote: 'The net proceeds of the sale',
              },
              {
                id: 'CAA 2001 s 62',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/62',
                quote:
                  'is limited to the qualifying expenditure incurred by the person on its provision',
              },
              {
                id: 'CAA 2001 s 104D',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104D',
                quote: 'is 6% of the amount by which AQE exceeds TDR',
              },
              {
                id: 'CAA 2001 s 45S',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/45S',
                quote: 'it is incurred on or after 1 April 2023',
              },
              {
                id: 'CAA 2001 s 59B',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/59B',
                quote:
                  'This section applies if a first-year allowance has been made to a company in respect of first-year qualifying expenditure under section 45S which is special rate expenditure.',
              },
            ],
          },
          {
            type: 'mcq',
            prompt:
              'Company, year to 31 March 2027: main pool b/f plus additions less disposals is £800, no AIA/FYA claimed. Maximum WDA?',
            options: ['£112', '£144', '£800', '£1,000'],
            answerIndex: 2,
            explain:
              'Balance of £1,000 or less for a 12-month period: s56A lets the whole £800 be claimed, not 14% (£112).',
            sources: [
              {
                id: 'CAA 2001 s 56A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56A',
                quote:
                  'the amount of the writing-down allowance to which a person is entitled for a chargeable period is the amount by which AQE exceeds TDR',
              },
              {
                id: 'CAA 2001 s 56A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56A',
                quote: 'The small pool limit is £1,000',
              },
              {
                id: 'HMRC CA23220',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23220',
                quote: 'is 18% (FA 2012)',
              },
            ],
          },
          {
            type: 'tf',
            prompt: 'The s56A small pools allowance can be claimed on a single asset pool.',
            answerBool: false,
            explain: 's56A applies only to the main pool and the special rate pool.',
            sources: [
              {
                id: 'CAA 2001 s 56A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56A',
                quote:
                  'This section applies in relation to the main pool and the special rate pool.',
              },
              {
                id: 'CAA 2001 s 104D',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104D',
                quote:
                  'In the case of expenditure in the special rate pool, this section is subject to section 56A',
              },
            ],
          },
          {
            type: 'match',
            prompt:
              'Year to 31 March 2027: match each used car purchase, all 2020-registered with qualifying emissions certificates, to its pool.',
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
              "50 g/km or less: main pool; above: special rate pool. Trader's partial private use: single asset pool, allowances reduced on a just and reasonable basis.",
            sources: [
              {
                id: 'CAA 2001 s 104AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104AA',
                quote:
                  'the applicable CO2 emissions figure in relation to the car does not exceed 50 grams per kilometre driven',
              },
              {
                id: 'CAA 2001 s 104AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104AA',
                quote:
                  'when the car is first registered, it is so registered on the basis of a qualifying emissions certificate',
              },
              {
                id: 'CAA 2001 s 104A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104A',
                quote:
                  'expenditure incurred on or after the second relevant date on the provision of a car that is not a main rate car',
              },
              {
                id: 'CAA 2001 s 206',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/206',
                quote:
                  'Qualifying expenditure to which this subsection applies, if allocated to a pool, must be allocated to a single asset pool.',
              },
              {
                id: 'CAA 2001 s 207',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/207',
                quote:
                  'must be reduced to an amount which is just and reasonable having regard to the relevant circumstances',
              },
            ],
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
            sources: [
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote:
                  'the construction of a building or structure begins on or after 29 October 2018',
              },
              {
                id: 'CAA 2001 s 270AB',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AB',
                quote:
                  'is treated as beginning before 29 October 2018 if any contract for works to be carried out in the course of the construction of that particular building or structure',
              },
            ],
          },
          {
            type: 'tf',
            prompt:
              'A company entitled to SBA on 31 March 2020 that keeps the relevant interest can get a catch-up allowance when its allowance period ends.',
            answerBool: true,
            explain:
              's270GD: extra 1% × days claimed to 31 March 2020 ÷ 365, given when the allowance period ends if still entitled then.',
            sources: [
              {
                id: 'CAA 2001 s 270GD',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270GD',
                quote:
                  'The person is entitled to an additional amount of allowance for the chargeable period in which the allowance period ends.',
              },
              {
                id: 'CAA 2001 s 270GD',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270GD',
                quote:
                  'The additional amount of the allowance is 1% of the qualifying expenditure multiplied by the following fraction',
              },
              {
                id: 'CAA 2001 s 270GD',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270GD',
                quote:
                  'the person does not dispose of the relevant interest in the building or structure before the end of the period',
              },
              {
                id: 'CAA 2001 s 270GD',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270GD',
                quote: '(b) for corporation tax purposes, 31 March 2020.',
              },
              {
                id: 'CAA 2001 s 270GD',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270GD',
                quote:
                  'at the end of the allowance period, the person is entitled to an allowance under this Part',
              },
            ],
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
              'Land and planning costs are excluded (s270BG); a lift is an integral feature (s33A), so excluded from SBA (s270BI) and gets PMA.',
            sources: [
              {
                id: 'CAA 2001 s 270BB',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270BB',
                quote:
                  'capital expenditure is incurred on the construction of a building or structure',
              },
              {
                id: 'CAA 2001 s 270BG',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270BG',
                quote: 'on the acquisition of land or rights in or over land',
              },
              {
                id: 'CAA 2001 s 270BG',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270BG',
                quote:
                  'Expenditure incurred on, or in connection with, seeking planning permission (including fees and related costs) is “excluded expenditure”',
              },
              {
                id: 'CAA 2001 s 33A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33A',
                quote: 'a lift, an escalator or a moving walkway',
              },
              {
                id: 'CAA 2001 s 270BI',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270BI',
                quote:
                  'Expenditure which is capital expenditure on the provision of plant or machinery for the purposes of Part 2 (plant and machinery allowances) is “excluded expenditure”',
              },
              {
                id: 'CAA 2001 s 33A',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33A',
                quote:
                  'the expenditure were capital expenditure on the provision of plant or machinery for the purposes of the qualifying activity',
              },
            ],
          },
          {
            type: 'mcq',
            prompt: 'Which use is residential use, so no SBA?',
            options: [
              'Purpose-built student accommodation',
              'Hotel run as a trade',
              'Office block',
              'Warehouse',
            ],
            answerIndex: 0,
            explain:
              'Student accommodation (purpose-built, available 165+ days yearly) is listed residential use (s270CF); HMRC treats hotel rooms as non-residential use for SBA.',
            sources: [
              {
                id: 'CAA 2001 s 270CF',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270CF',
                quote: '(iii) student accommodation (see subsection (3)),',
              },
              {
                id: 'CAA 2001 s 270CF',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270CF',
                quote:
                  'the accommodation is available for occupation by students on at least 165 days of each calendar year',
              },
              {
                id: 'CAA 2001 s 270CF',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270CF',
                quote:
                  'a building or structure is in “non-residential use” if it is in use which is not residential use',
              },
              {
                id: 'HMRC CA93450',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca93450',
                quote: 'It operates a popular hotel in which 8 rooms are in need of updating',
              },
              {
                id: 'HMRC CA93450',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca93450',
                quote: 'when each renovated room is first brought into non-residential use',
              },
            ],
          },
          {
            type: 'number',
            prompt:
              'Company, year to 31/3/2027: £1m qualifying expenditure (2024; contracts 2023); relevant interest; non-residential trade use all year; allowance statement; not special tax site. SBA?',
            answerNumber: 30000,
            unit: '£',
            explain:
              '3% a year straight line; allowance period, relevant interest and qualifying use cover the whole year, so no apportionment: £1,000,000 × 3% = £30,000.',
            sources: [
              {
                id: 'CAA 2001 s 270CE',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270CE',
                quote:
                  'A building or structure is in “qualifying use” for the purposes of this Part if it is in non-residential use for the purposes of a qualifying activity carried out by the person who has the relevant interest in the building or structure.',
              },
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote:
                  'the construction of a building or structure begins on or after 29 October 2018',
              },
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote: '(b) in the case of other qualifying expenditure, 3% of the expenditure.',
              },
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote: '(b) in the case of other qualifying expenditure, 33 1/3 years.',
              },
              {
                id: 'HMRC CA91300',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91300',
                quote:
                  'For subsequent years, Tom will be able to claim £1 million × 3% = £30,000 per year.',
              },
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote:
                  'on or after the later of the day on which the building or structure is first brought into qualifying use by the person and the day on which the qualifying expenditure is incurred',
              },
            ],
          },
          {
            type: 'mcq',
            prompt: 'Which is NOT required in an SBA allowance statement?',
            options: [
              'Date of earliest construction contract',
              'Amount of qualifying expenditure',
              'Date first in non-residential use',
              'Planning permission reference number',
            ],
            answerIndex: 3,
            explain:
              'It must identify the building and state earliest contract date, qualifying expenditure and first non-residential use date; absent before first claim, expenditure is nil.',
            sources: [
              {
                id: 'CAA 2001 s 270IA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270IA',
                quote:
                  '(a) the date of the earliest ... contract for the construction of the building or structure,',
              },
              {
                id: 'CAA 2001 s 270IA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270IA',
                quote:
                  '(b) the amount of qualifying expenditure incurred on its construction or acquisition,',
              },
              {
                id: 'CAA 2001 s 270IA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270IA',
                quote:
                  '(c) the date on which the building or structure is first brought into non-residential use',
              },
              {
                id: 'CAA 2001 s 270IA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270IA',
                quote:
                  'the amount of the qualifying expenditure is treated as nil unless, before the current owner first makes a claim for an allowance under this Part, the allowance statement requirement is met',
              },
            ],
          },
        ],
      },
      {
        id: 'sba-2',
        title: 'Details and disposals',
        questions: [
          {
            type: 'tf',
            prompt:
              'When a building is entirely demolished, unclaimed SBA is given as a balancing allowance.',
            answerBool: false,
            explain:
              'On full demolition SBA ceases; any unclaimed SBA is lost, and SBA claimed is added to capital gains consideration.',
            sources: [
              {
                id: 'HMRC CA91500',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91500',
                quote:
                  'The remainder of any unclaimed SBA on the costs of the building will be lost.',
              },
            ],
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
              'TCGA 1992 s 37B(2) adds the SBA made to the seller to the disposal consideration, increasing a gain or reducing a loss.',
            sources: [
              {
                id: 'TCGA 1992 s 37B',
                url: 'https://www.legislation.gov.uk/ukpga/1992/12/section/37B',
                quote:
                  'the consideration for the disposal is treated as being increased by an amount equal to the amount of the structures and buildings allowance that has been made to the transferor',
              },
            ],
          },
          {
            type: 'number',
            prompt:
              'Company buys used office for £800,000; original qualifying cost £500,000 (3% rate). SBA for its next 12-month accounting period, qualifying use throughout?',
            answerNumber: 15000,
            unit: '£',
            explain:
              'The buyer continues on original qualifying expenditure, not price paid: £500,000 × 3% = £15,000.',
            sources: [
              {
                id: 'HMRC CA91010',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91010',
                quote:
                  'SBA for the purchaser will continue to be calculated by reference to the original qualifying expenditure on the building.',
              },
              {
                id: 'HMRC CA91300',
                url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91300',
                quote:
                  'The purchase price Veronica pays does not change the amount of the SBA available.',
              },
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote: 'in the case of other qualifying expenditure, 3% of the expenditure',
              },
            ],
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
              'Standard 3% writes off in 33⅓ years; special tax sites at 10% write off in 10 years (s 270AA(2A), (5)).',
            sources: [
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote: 'in the case of other qualifying expenditure, 3% of the expenditure',
              },
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote:
                  'in the case of special tax site qualifying expenditure, 10% of the expenditure',
              },
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote: 'in the case of other qualifying expenditure, 33 1/3 years',
              },
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote: 'in the case of special tax site qualifying expenditure, 10 years',
              },
            ],
          },
          {
            type: 'mcq',
            prompt:
              'For enhanced SBA Condition A, when is construction of the building treated as beginning?',
            options: [
              'When the first works contract is entered',
              'When work physically starts on site',
              'When planning permission is granted',
              'When expenditure is first incurred',
            ],
            answerIndex: 0,
            explain:
              's 270BNA(7) deems construction to begin when the first contract for construction works is entered into.',
            sources: [
              {
                id: 'CAA 2001 s 270BNA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270BNA',
                quote:
                  'the construction of a building or structure is treated as beginning when the first contract for works to be carried out in the course of the construction of that particular building or structure',
              },
            ],
          },
          {
            type: 'mcq',
            prompt: 'When does the 33⅓-year SBA period begin?',
            options: [
              'Later of first non-residential use and expenditure incurred',
              'When the construction contract is signed',
              'When construction is completed',
              'Earlier of first non-residential use and expenditure incurred',
            ],
            answerIndex: 0,
            explain:
              's 270AA(2)(b)(ii): later of first non-residential use and the day qualifying expenditure is incurred.',
            sources: [
              {
                id: 'CAA 2001 s 270AA',
                url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
                quote:
                  'beginning with the later of the day on which the building or structure is first brought into non-residential use and the day on which the qualifying expenditure is incurred',
              },
            ],
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
