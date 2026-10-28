/*
 * Daily facts. One is shown per day, in this order, cycling round.
 * Every item cites the source library (sources/*.jsonl) with a quote that tests/unit/insufferable-pedantry-content.test.ts
 * confirms word for word; each was then passed by an independent auditor.
 */
window.IP_DATA = window.IP_DATA || {};

window.IP_DATA.facts = [
  {
    id: 'f-c20',
    text: "BPRA's statutory expiry was the fifth anniversary of its start date, extendable by Treasury regulations; HMRC says it covered expenditure from 11 April 2007 until March 2017 (companies) or April 2017 (income tax).",
    source: 'CAA 2001 s 360B(2); HMRC CA45100, CA45200',
    tag: 'History',
    sources: [
      {
        id: 'CAA 2001 s 360B',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/360B',
        quote: 'the fifth anniversary of the day appointed under section 92 of FA 2005',
      },
      {
        id: 'CAA 2001 s 360B',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/360B',
        quote: 'such later date as the Treasury may prescribe by regulations',
      },
      {
        id: 'HMRC CA45200',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca45200',
        quote: 'Expenditure must be incurred on or after 11 April 2007 to qualify.',
      },
      {
        id: 'HMRC CA45200',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca45200',
        quote:
          'The scheme originally had a life of 5 years but this was extended for a further 5 years',
      },
      {
        id: 'HMRC CA45100',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca45100',
        quote:
          'Expenditure must be incurred before 31 March 2017 for Corporation Tax and 5 April 2017 for Income Tax to qualify.',
      },
    ],
  },
  {
    id: 'f-s01',
    text: "CAA 2001 has no statutory definition of plant. The classic one comes from Yarmouth v France (1887), not a tax case but an Employers' Liability Act claim about a wharfinger's vicious horse.",
    source: 'Yarmouth v France (1887) 19 QBD 647; HMRC CA21100',
    tag: 'Oddity',
    sources: [
      {
        id: 'HMRC CA21100',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
        quote:
          'Since there is no statutory definition of plant guidance about the meaning of plant has to be found in case law.',
      },
      {
        id: 'HMRC CA21100',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
        quote: 'It was not a tax case but was a case under the Employer’s Liability Act 1880.',
      },
      {
        id: '[2026] UKSC 12',
        url: 'https://caselaw.nationalarchives.gov.uk/uksc/2026/12',
        quote:
          'The classic description is that given by Lord Lindley in Yarmouth v France (1887) 19 QBD 647',
      },
      {
        id: '[2022] EWCA Civ 1587',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
        quote: 'where the issue was whether a vicious horse was a',
      },
      {
        id: '[2022] EWCA Civ 1587',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
        quote: 'used in the business of a wharfinger for the purposes of the Employers Liability',
      },
    ],
  },
  {
    id: 'f-c02',
    text: "A shoemaker's knives and lasts, with an average life of only three years, were held to be plant; HMRC now accepts any asset expected to last two years or more as durable enough.",
    source: 'Hinton (38 TC 391); HMRC CA21100',
    tag: 'Case law',
    sources: [
      {
        id: 'HMRC CA21100',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
        quote:
          'knives and lasts which had an average life of 3 years and which were used by a shoemaker were held to be plant',
      },
      {
        id: 'HMRC CA21100',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
        quote:
          'You should accept that an asset that has an expected life of two years or more (the 2 year test) is sufficiently durable to be plant.',
      },
      {
        id: 'HMRC CA21100',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21100',
        quote: '38TC391',
      },
    ],
  },
  {
    id: 'f-s02',
    text: 'Fixed zoo cages, fish ponds and amusement ride settings appear in List C of s.23, but listing only lifts the buildings and structures exclusions; each must still qualify as plant on ordinary principles.',
    source: 'CAA 2001 s 23(3), List C items 30, 32, 33',
    tag: 'Oddity',
    sources: [
      {
        id: 'CAA 2001 s 23',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/23',
        quote: 'The provision of fixed zoo cages.',
      },
      {
        id: 'CAA 2001 s 23',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/23',
        quote: 'The provision of fish tanks or fish ponds.',
      },
      {
        id: 'CAA 2001 s 23',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/23',
        quote:
          'The provision of structures and other assets for providing the setting for any ride at an amusement park or exhibition.',
      },
      {
        id: 'CAA 2001 s 23',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/23',
        quote:
          'Sections 21 and 22 also do not affect the question whether expenditure on any item described in list C is, for the purposes of this Act, expenditure on the provision of plant or machinery.',
      },
    ],
  },
  {
    id: 'f-c03',
    text: 'In Barclay Curle the House of Lords held that excavating a basin for a dry dock was expenditure on providing plant: the dock could not even be made until the excavation was done.',
    source: 'IRC v Barclay, Curle & Co Ltd [1969] 1 WLR 675',
    tag: 'Case law',
    sources: [
      {
        id: '[2025] EWCA Civ 279',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2025/279',
        quote:
          'the decisions of the House of Lords in Inland Revenue Commissioners v Barclay, Curle & Co Ltd',
      },
      {
        id: '[2021] EWCA Civ 105',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2021/105',
        quote: 'it was held that the cost of excavating a new basin to create a dry dock',
      },
      {
        id: '[2021] EWCA Civ 105',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2021/105',
        quote:
          'shipbuilding trade was expenditure on the provision of the plant which comprised the dry dock',
      },
      {
        id: '[2025] EWCA Civ 279',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2025/279',
        quote: 'could not even be made until the necessary excavating had been done',
      },
    ],
  },
  {
    id: 'f-s03',
    text: 'If spending on an integral feature within 12 months of a first outlay totals over 50% of its replacement cost, s.33B treats it all as replacement; if qualifying expenditure, s.33A bars a revenue deduction.',
    source: 'CAA 2001 ss 33A(3), 33B',
    tag: 'Statute',
    sources: [
      {
        id: 'CAA 2001 s 33B',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33B',
        quote:
          'in the period of 12 months beginning with the initial expenditure being incurred the person incurs further expenditure on the integral feature',
      },
      {
        id: 'CAA 2001 s 33B',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33B',
        quote:
          'is more than 50% of the cost of replacing the integral feature at the time the initial expenditure was incurred',
      },
      {
        id: 'CAA 2001 s 33A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33A',
        quote:
          'If the expenditure is qualifying expenditure, it may not be deducted in calculating the income from the qualifying activity.',
      },
    ],
  },
  {
    id: 'f-c04',
    text: "Megarry J held a caravan park's swimming pool was plant; HMRC summarises it as performing 'the function of providing pleasurable and safe buoyancy for the swimmer'.",
    source: 'Cooke v Beach Station Caravans Ltd 49 TC 514; HMRC CA22060',
    tag: 'Case law',
    sources: [
      {
        id: 'HMRC CA22060',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca22060',
        quote:
          'Megarry J held that the pool was part of the apparatus used for carrying on the trade of operating a caravan park.',
      },
      {
        id: 'HMRC CA22060',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca22060',
        quote:
          'It performed the function of providing pleasurable and safe buoyancy for the swimmer.',
      },
      {
        id: '[2026] UKSC 12',
        url: 'https://caselaw.nationalarchives.gov.uk/uksc/2026/12',
        quote:
          'There the cost of excavating a hole into which a swimming pool was installed with filtration, heating and diving boards was held to be part of the cost of providing a single unit of plant.',
      },
    ],
  },
  {
    id: 'f-s04',
    text: 'A fixture normally means plant that becomes, in law, part of the land; but s.173 also counts any boiler or water-filled radiator installed as part of a space or water heating system.',
    source: 'CAA 2001 s 173(1)',
    tag: 'Statute',
    sources: [
      {
        id: 'CAA 2001 s 173',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/173',
        quote:
          'so installed or otherwise fixed in or to a building or other description of land as to become, in law, part of that building or other land',
      },
      {
        id: 'CAA 2001 s 173',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/173',
        quote:
          'includes any boiler or water-filled radiator installed in a building as part of a space or water heating system',
      },
    ],
  },
  {
    id: 'f-c05',
    text: 'In McVeigh v Arthur Sanderson (1969), Cross J, citing Daphne v Shaw, proceeded on the basis that wallpaper designs were not plant; the Court of Appeal later overturned Daphne in Munby v Furlong (1977).',
    source: '[2025] EWCA Civ 279; Gunfleet [2023] UKUT 260 (TCC)',
    tag: 'Case law',
    sources: [
      {
        id: '[2025] EWCA Civ 279',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2025/279',
        quote: 'McVeigh v Arthur Sanderson & Sons Ltd [1969] 1 WLR 1143',
      },
      {
        id: '[2025] EWCA Civ 279',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2025/279',
        quote:
          'the taxpayer printed patterns on wallpaper and furnishing fabrics by means of wood blocks',
      },
      {
        id: '[2025] EWCA Civ 279',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2025/279',
        quote:
          'Cross J concluded that, having regard to Daphne v Shaw (1926) 11 TC 256 , he should',
      },
      {
        id: '[2025] EWCA Civ 279',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2025/279',
        quote: 'proceed on the basis that these designs are not',
      },
      {
        id: '[2023] UKUT 260 (TCC)',
        url: 'https://caselaw.nationalarchives.gov.uk/ukut/tcc/2023/260',
        quote:
          'has since been overturned by the Court of Appeal in Munby v Furlong (1977) 50 TC 491',
      },
      {
        id: '[2023] UKUT 260 (TCC)',
        url: 'https://caselaw.nationalarchives.gov.uk/ukut/tcc/2023/260',
        quote:
          'The decision was a function of the constraints the High Court felt under by the authority at the time which prevented it from holding the designs were themselves plant.',
      },
    ],
  },
  {
    id: 'f-s05',
    text: "For transfers from April 2014, a fixtures buyer's expenditure is nil if the past owner, entitled to allowances, neither pooled it in a chargeable period starting no later than its exit day nor claimed FYA.",
    source: 'CAA 2001 s 187A(1)-(4); HMRC CA26476',
    tag: 'Statute',
    sources: [
      {
        id: 'CAA 2001 s 187A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/187A',
        quote:
          'was entitled to claim an allowance under this Part in respect of the historic expenditure',
      },
      {
        id: 'CAA 2001 s 187A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/187A',
        quote: 'the new expenditure is to be treated as nil if',
      },
      {
        id: 'CAA 2001 s 187A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/187A',
        quote:
          'the historic expenditure has been allocated to a pool in a chargeable period beginning on or before the day on which the past owner ceases to be treated as the owner of the fixture',
      },
      {
        id: 'CAA 2001 s 187A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/187A',
        quote:
          'a first-year allowance has been claimed in respect of that expenditure (or any part of it)',
      },
      {
        id: 'HMRC CA26476',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca26476',
        quote:
          'takes place on or after 1 April 2014 (corporation tax) or 6 April 2014 (income tax) the current owner will only be able to claim PMA in respect of a fixture if the pooling requirement is met.',
      },
    ],
  },
  {
    id: 'f-c06',
    text: "Lingfield Park's all-weather racetrack was held not to be plant: its artificial surface was part of the premises on which racing took place, not apparatus with which the trade was carried on.",
    source: 'Shove v Lingfield Park 1991 Ltd (2004, CA); HMRC CA21260',
    tag: 'Case law',
    sources: [
      {
        id: 'HMRC CA21260',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21260',
        quote:
          'In Lingfield Park the Court of Appeal held that the surface was not apparatus with which the business was carried on but was part of the setting or premises in which the business was carried on',
      },
      {
        id: '[2024] UKFTT 1163 (TC)',
        url: 'https://caselaw.nationalarchives.gov.uk/ukftt/tc/2024/1163',
        quote:
          'Shove v Lingfield Park 1991 Ltd (2004) 76 TC 363 where the Court of Appeal held that an all-weather race track at a racecourse was not plant',
      },
    ],
  },
  {
    id: 'f-s06',
    text: "Since April 2025 s.35, which denies property businesses allowances for plant in a dwelling-house, has covered former furnished holiday lettings too, yet HMRC accept lifts in a block of flats' common parts escape it.",
    source: 'CAA 2001 s.35; HMRC CA20025, CA23060',
    tag: 'Statute',
    sources: [
      {
        id: 'CAA 2001 s 35',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/35',
        quote:
          'The person’s expenditure is not qualifying expenditure if it is incurred in providing plant or machinery for use in a dwelling-house',
      },
      {
        id: 'HMRC CA20025',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca20025',
        quote:
          'will instead be classified as a UK or overseas property business and will be subject to the exclusion for plant or machinery for use in a dwelling-house',
      },
      {
        id: 'HMRC CA23060',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23060',
        quote:
          'A lift or central heating system serving the common parts of a building which contains two or more dwelling-houses will not comprise part of any dwelling-house',
      },
    ],
  },
  {
    id: 'f-c07',
    text: "Light fittings and décor such as murals and tapestries were held to be plant because creating atmosphere was an important function of the trade; the wiring, found part of the building's fabric, was not.",
    source: 'IRC v Scottish & Newcastle Breweries Ltd (1982, HL); HMRC CA21130',
    tag: 'Case law',
    sources: [
      {
        id: 'HMRC CA21130',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21130',
        quote:
          'The company spent money on light fittings and wiring, and decorative items such as wall plaques, tapestries, murals, prints and sculptures',
      },
      {
        id: 'HMRC CA21130',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21130',
        quote:
          'everything but the electric wiring went to create the atmosphere or ambience that it was an important function of the company’s particular trade to provide for its customers',
      },
      {
        id: 'HMRC CA21130',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21130',
        quote:
          'The Special Commissioners found that the electric wiring was part of the fabric of the building',
      },
      {
        id: 'HMRC CA21130',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21130',
        quote: 'Both the Court of Session and the House of Lords rejected the Inspector’s appeal',
      },
    ],
  },
  {
    id: 'f-s07',
    text: 'Any car first registered before 1 March 2001 is a main rate car regardless of emissions: a V8 first registered in 1999 gets 14%, a new 51g/km hybrid only 6%.',
    source: 'CAA 2001 ss 56, 104A, 104AA, 104D',
    tag: 'Oddity',
    sources: [
      {
        id: 'CAA 2001 s 104AA',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104AA',
        quote: 'a car that is first registered before 1 March 2001',
      },
      {
        id: 'CAA 2001 s 104AA',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104AA',
        quote:
          'Condition B is that the applicable CO2 emissions figure in relation to the car does not exceed 50 grams per kilometre driven',
      },
      {
        id: 'CAA 2001 s 268B',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/268B',
        quote: 'it is propelled solely by electrical power',
      },
      {
        id: 'CAA 2001 s 104A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104A',
        quote:
          'expenditure incurred on or after the second relevant date on the provision of a car that is not a main rate car',
      },
      {
        id: 'CAA 2001 s 56',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56',
        quote:
          'The amount of the writing-down allowance to which a person is entitled for a chargeable period is 14% of the amount by which AQE exceeds TDR',
      },
      {
        id: 'CAA 2001 s 104D',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104D',
        quote: 'is 6% of the amount by which AQE exceeds TDR',
      },
    ],
  },
  {
    id: 'f-c08',
    text: "The House of Lords unanimously refused to treat a department store's entire electrical installation as one item of plant; since April 2008, s.33A treats electrical systems as plant regardless of function.",
    source: 'Cole Brothers Ltd v Phillips 55 TC 188 (HL); CAA 2001 s.33A',
    tag: 'Case law',
    sources: [
      {
        id: 'HMRC CA21170',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21170',
        quote: 'In Cole Brothers Ltd. v Phillips 55TC188',
      },
      {
        id: '[2023] UKUT 260 (TCC)',
        url: 'https://caselaw.nationalarchives.gov.uk/ukut/tcc/2023/260',
        quote:
          'Cole Brothers Ltd v Phillips [1980] STC 518 (expenditure in relation to electrical installation in a department store)',
      },
      {
        id: '[2023] UKUT 260 (TCC)',
        url: 'https://caselaw.nationalarchives.gov.uk/ukut/tcc/2023/260',
        quote:
          'The House of Lords found unanimously against the taxpayer on that question in separate speeches',
      },
      {
        id: 'HMRC CA21170',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21170',
        quote:
          'the taxpayer claimed that the electrical installation in a new retail store should be treated as a single item of plant',
      },
      {
        id: 'HMRC CA21160',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21160',
        quote:
          'Under the rules now in CAA01/S33A, electrical systems and certain other integral features are always treated as if they were plant, regardless of function',
      },
      {
        id: 'HMRC CA21160',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21160',
        quote:
          'For expenditure incurred on or after 1 April 2008 (CT) or on or after 6 April 2008 (IT) see the guidance on integral features',
      },
      {
        id: 'CAA 2001 s 33A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/33A',
        quote: 'an electrical system (including a lighting system)',
      },
    ],
  },
  {
    id: 'f-s08',
    text: "A motorcycle is expressly excluded from the capital allowances definition of 'car' in s.268A, so it can qualify for the Annual Investment Allowance that every car, however clean, is denied.",
    source: 'CAA 2001 ss 38B, 268A',
    tag: 'Oddity',
    sources: [
      {
        id: 'CAA 2001 s 268A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/268A',
        quote: 'In this Part “car” means a mechanically propelled road vehicle other than—',
      },
      {
        id: 'CAA 2001 s 268A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/268A',
        quote: 'a motor cycle',
      },
      {
        id: 'CAA 2001 s 38B',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/38B',
        quote: 'The expenditure is incurred on the provision of a car (as defined by section 268A)',
      },
    ],
  },
  {
    id: 'f-c09',
    text: "A 99-year leaseholder that installed lifts and central heating could not claim allowances because, as landlord's fixtures, they were not owned by it; the statutory fixtures code followed in 1985.",
    source: 'Stokes v Costain Property Investments Ltd (57 TC 688); now CAA 2001 Pt 2 Ch 14',
    tag: 'Case law',
    sources: [
      {
        id: 'HMRC CA26025',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca26025',
        quote:
          "Costain had a 99 year lease over a property and incurred expenditure installing lifts and central heating that were landlord's fixtures",
      },
      {
        id: 'HMRC CA26025',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca26025',
        quote:
          'the word belonging (now ownership) in the plant and machinery legislation meant absolute ownership and Costain did not own the lifts',
      },
      {
        id: 'HMRC CA26025',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca26025',
        quote:
          'Special legislation for fixtures was introduced in 1985. It is in Chapter 14 Part 2 CAA01',
      },
    ],
  },
  {
    id: 'f-s09',
    text: 'Long-life assets had a 6% WDA until April 2008, when moving them into the new special rate pool raised it to 10%; cuts in 2012 and 2019 took it back to exactly 6%.',
    source: 'HMRC CA23220; CAA 2001 ss 104A, 104D',
    tag: 'Rates',
    sources: [
      {
        id: 'HMRC CA23220',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23220',
        quote: 'Prior to April 2008, the rate of WDA was 6% for long-life assets',
      },
      {
        id: 'CAA 2001 s 104A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104A',
        quote:
          'long-life asset expenditure (within the meaning of Chapter 10) incurred on or after that date',
      },
      {
        id: 'HMRC CA23220',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23220',
        quote: '1 or 6 April 2008 is 10% (FA 2008)',
      },
      {
        id: 'HMRC CA23220',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23220',
        quote: '1 or 6 April 2012 is 8% (FA 2011)',
      },
      {
        id: 'HMRC CA23220',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23220',
        quote: '1 or 6 April 2019 is 6% (FA 2018)',
      },
      {
        id: 'CAA 2001 s 104D',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/104D',
        quote: 'is 6% of the amount by which AQE exceeds TDR',
      },
    ],
  },
  {
    id: 'f-c10',
    text: 'A ship moored on the Thames as a floating restaurant was held to be premises, not plant; had it carried passengers on river cruises, it would have been apparatus of the trade.',
    source: 'Benson v Yard Arm Club Ltd (53 TC 67); HMRC CA21260',
    tag: 'Case law',
    sources: [
      {
        id: 'HMRC CA21260',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21260',
        quote:
          'a ship moored on the Thames and used as a floating restaurant was held to be premises',
      },
      {
        id: 'HMRC CA21260',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21260',
        quote:
          'If it had been put to use carrying passengers on river cruises it would have been regarded as apparatus of the trade',
      },
    ],
  },
  {
    id: 'f-s10',
    text: 's.56A lets a main or special rate pool of £1,000 or less be written off at once, the limit pro-rated for short or long periods; HMRC confirm single asset pools cannot use it.',
    source: 'CAA 2001 s.56A; HMRC CA23225',
    tag: 'Rates',
    sources: [
      {
        id: 'CAA 2001 s 56A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56A',
        quote: 'This section applies in relation to the main pool and the special rate pool',
      },
      {
        id: 'CAA 2001 s 56A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56A',
        quote:
          'Where the amount by which AQE exceeds TDR is less than or equal to the small pool limit',
      },
      {
        id: 'CAA 2001 s 56A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56A',
        quote:
          'the amount of the writing-down allowance to which a person is entitled for a chargeable period is the amount by which AQE exceeds TDR',
      },
      {
        id: 'CAA 2001 s 56A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56A',
        quote: 'The small pool limit is £1,000, except that—',
      },
      {
        id: 'CAA 2001 s 56A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56A',
        quote:
          'if the chargeable period is more or less than a year, it is proportionately increased or reduced',
      },
      {
        id: 'HMRC CA23225',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23225',
        quote: 'It does not apply to other pools such as single asset pools',
      },
    ],
  },
  {
    id: 'f-c11',
    text: "A garden centre's 'planteria', a purpose-built structure creating an environment in which plants kept their quality, was held to be premises rather than plant despite its specialised function.",
    source: 'Gray v Seymours Garden Centre (Horticulture) [1995] STC 706 (CA); HMRC CA22090',
    tag: 'Case law',
    sources: [
      {
        id: 'HMRC CA22090',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca22090',
        quote:
          'a planteria, which was effectively an unheated glasshouse, was held not to be plant',
      },
      {
        id: '[2022] EWCA Civ 1587',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
        quote:
          'purpose-built structures of a specialised nature have been held to fall on the premises side of the line',
      },
      {
        id: '[2022] EWCA Civ 1587',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
        quote:
          'Gray (Inspector of Taxes) v Seymours Garden Centre (Horticulture) [1995] STC 706 (CA)',
      },
      {
        id: '[2024] UKFTT 1163 (TC)',
        url: 'https://caselaw.nationalarchives.gov.uk/ukftt/tc/2024/1163',
        quote:
          'It also created an environment in which plants would grow and maintain their quality of growth',
      },
    ],
  },
  {
    id: 'f-s11',
    text: 'For expenditure from 1 April 2011 (6 April for income tax), a short-life asset pool still open eight years, not four, after the end of the expenditure’s chargeable period normally passes to the main pool.',
    source: 'CAA 2001 s 86',
    tag: 'Statute',
    sources: [
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote:
          'the chargeable period in which the qualifying expenditure was incurred on the provision of the short-life asset',
      },
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote:
          'If the final chargeable period for the short-life asset pool has not occurred before the relevant cut-off',
      },
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote:
          'in any other case, the eighth anniversary of the end of the relevant chargeable period',
      },
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote: 'the fourth anniversary of the end of the relevant chargeable period',
      },
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote: 'for corporation tax purposes, 1 April 2011, and',
      },
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote: 'for income tax purposes, 6 April 2011',
      },
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote:
          'the available qualifying expenditure in the pool is allocated to the appropriate pool for the first chargeable period ending after the relevant cut-off',
      },
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote: 'in any other case, the main pool',
      },
    ],
  },
  {
    id: 'f-c12',
    text: "Lord Upjohn said in Barclay Curle that 'on the provision of' plant permitted no prolonged exposition; the Supreme Court judgment in Orsted, on windfarm surveys, called him 'over-optimistic'.",
    source: 'Orsted West of Duddon Sands v HMRC [2026] UKSC 12',
    tag: 'Case law',
    sources: [
      {
        id: '[2026] UKSC 12',
        url: 'https://caselaw.nationalarchives.gov.uk/uksc/2026/12',
        quote: 'In the leading case on how to interpret the words',
      },
      {
        id: '[2026] UKSC 12',
        url: 'https://caselaw.nationalarchives.gov.uk/uksc/2026/12',
        quote:
          'it is impossible to give a prolonged exposition upon the matter; opinions may differ',
      },
      {
        id: '[2026] UKSC 12',
        url: 'https://caselaw.nationalarchives.gov.uk/uksc/2026/12',
        quote: 'although Lord Upjohn was right in Barclay, Curle to say that opinions may differ',
      },
      {
        id: '[2026] UKSC 12',
        url: 'https://caselaw.nationalarchives.gov.uk/uksc/2026/12',
        quote:
          'he was over-optimistic in saying that it was impossible to give a prolonged exposition on the matter',
      },
      {
        id: '[2026] UKSC 12',
        url: 'https://caselaw.nationalarchives.gov.uk/uksc/2026/12',
        quote:
          'Orsted spent considerable sums on surveys and studies investigating many different aspects of the environment in which the windfarms would be constructed',
      },
    ],
  },
  {
    id: 'f-s12',
    text: 'Know-how and patent writing-down allowances still run at 25% a year, against 14% for the main pool, though company expenditure from 1 April 2002 falls under the FA 2002 intellectual property rules instead.',
    source: 'CAA 2001 ss 56, 458, 472; HMRC CA70001, CA75001',
    tag: 'Rates',
    sources: [
      {
        id: 'CAA 2001 s 458',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/458',
        quote: 'is 25% of the amount by which AQE exceeds TDV',
      },
      {
        id: 'CAA 2001 s 472',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/472',
        quote: 'is 25% of the amount by which AQE exceeds TDR',
      },
      {
        id: 'CAA 2001 s 56',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56',
        quote: 'is 14% of the amount by which AQE exceeds TDR',
      },
      {
        id: 'HMRC CA70001',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca70001',
        quote:
          'this guidance does not apply to expenditure incurred by companies on or after 1 April 2002',
      },
      {
        id: 'HMRC CA70001',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca70001',
        quote:
          'That expenditure is dealt with under the new rules for intellectual property for companies introduced by FA02',
      },
      {
        id: 'HMRC CA75001',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca75001',
        quote:
          'this guidance does not apply to expenditure incurred by companies on or after 1 April 2002',
      },
      {
        id: 'HMRC CA75001',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca75001',
        quote:
          'That expenditure is dealt with under the new rules for intellectual property for companies introduced by FA02',
      },
    ],
  },
  {
    id: 'f-c13',
    text: 'A ‘wear and tear’ deduction for plant dates back to 1878; initial allowances and industrial buildings allowances arrived only with the Income Tax Act 1945, taking effect from 1946.',
    source: 'HMRC CA10040',
    tag: 'History',
    sources: [
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote: 'In 1878 a ‘wear and tear’ deduction was introduced',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote: 'The Income Tax Act 1945 put in place a system of capital allowances',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote:
          'From 1946 the previous system of wear and tear allowances for plant and machinery was replaced by a new system of initial allowances',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote: 'Industrial buildings allowances replaced the mills and factories allowance',
      },
    ],
  },
  {
    id: 'f-s13',
    text: "When an SBA building is sold, the seller's allowances are generally added to its gains disposal consideration (deferred to the buyer on no gain/no loss transfers); the buyer claims on the original qualifying expenditure.",
    source: 'TCGA 1992 s 37B; HMRC CA91010',
    tag: 'Statute',
    sources: [
      {
        id: 'TCGA 1992 s 37B',
        url: 'https://www.legislation.gov.uk/ukpga/1992/12/section/37B',
        quote:
          'the consideration for the disposal is treated as being increased by an amount equal to the amount of the structures and buildings allowance that has been made to the transferor',
      },
      {
        id: 'HMRC CA91010',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91010',
        quote:
          'When a building is sold or transferred to another person, the SBA for the seller ceases',
      },
      {
        id: 'HMRC CA91010',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91010',
        quote:
          'SBA for the purchaser will continue to be calculated by reference to the original qualifying expenditure on the building',
      },
      {
        id: 'TCGA 1992 s 37B',
        url: 'https://www.legislation.gov.uk/ukpga/1992/12/section/37B',
        quote:
          'the person who acquires the asset (the “transferee”) is treated, for the purposes of determining the amount of the gain accruing on any subsequent disposal of the asset by the transferee',
      },
    ],
  },
  {
    id: 'f-c14',
    text: "Nigel Lawson's 1984 reforms phased out initial and first-year allowances over three years, leaving writing-down allowances of 25% for plant and 4% for industrial and agricultural buildings.",
    source: 'HMRC CA10040',
    tag: 'History',
    sources: [
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote:
          'In 1984 the then Chancellor of the Exchequer, Nigel Lawson, started a series of reforms',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote: 'Initial allowances and first year allowances were phased out over three years',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote:
          'Allowances were set at 25% for plant and machinery, 4% for industrial and agricultural buildings',
      },
    ],
  },
  {
    id: 'f-s14',
    text: 'In freeport and investment zone special tax sites, SBA can run at 10% a year rather than 3%, giving full relief in ten years, not 33⅓; one construction contract signed before designation forfeits it.',
    source: 'CAA 2001 ss 270AA, 270BNA; HMRC CA94751',
    tag: 'Rates',
    sources: [
      {
        id: 'CAA 2001 s 270AA',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
        quote: 'in the case of special tax site qualifying expenditure, 10% of the expenditure',
      },
      {
        id: 'CAA 2001 s 270AA',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
        quote: 'in the case of other qualifying expenditure, 3% of the expenditure',
      },
      {
        id: 'CAA 2001 s 270AA',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
        quote: 'in the case of special tax site qualifying expenditure, 10 years',
      },
      {
        id: 'CAA 2001 s 270AA',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
        quote: 'in the case of other qualifying expenditure, 33 1/3 years',
      },
      {
        id: 'HMRC CA94751',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca94751',
        quote: 'Special tax sites can be designated in respect of freeports or investment zones',
      },
      {
        id: 'HMRC CA94751',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca94751',
        quote:
          'Qualifying expenditure is special tax site qualifying expenditure if it meets Conditions A-E in CAA01/S270BNA',
      },
      {
        id: 'HMRC CA94751',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca94751',
        quote:
          'If any contract for construction of the building is entered into before the date the special tax site is designated, the enhanced rate of SBA will not be available on any of the construction costs of that building',
      },
    ],
  },
  {
    id: 'f-c15',
    text: 'Enterprise zone allowances gave a 100% initial allowance even on offices; Isle of Dogs spending from 26 April 1982 to 25 April 1992 qualified, or for 20 years under contracts made by then.',
    source: 'CAA 2001 ss 281, 298, 306 (IBAs now withdrawn); HMRC CA37100',
    tag: 'History',
    sources: [
      {
        id: 'CAA 2001 s 306',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/306',
        quote:
          'The amount of the initial allowance is 100% of the qualifying enterprise zone expenditure',
      },
      {
        id: 'CAA 2001 s 281',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/281',
        quote:
          'as an office or offices (whether or not for the purposes of a trade, profession or vocation)',
      },
      {
        id: 'CAA 2001 s 298',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/298',
        quote:
          'if the expenditure is incurred under a contract entered into within those 10 years, 20 years after the site was first included in the zone',
      },
      {
        id: 'HMRC CA37100',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca37100',
        quote:
          'the Isle of Dogs enterprise zone was designated on 26 April 1982 and so construction expenditure incurred in the period 26 April 1982 to 25 April 1992 qualifies for enterprise zone allowances',
      },
      {
        id: 'HMRC CA37100',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca37100',
        quote:
          'Expenditure incurred in 1993 under a contract entered into on 15 March 1992 will also qualify',
      },
      {
        id: 'HMRC CA37100',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca37100',
        quote:
          'There are no IBA writing down allowances for the financial year beginning on 1 April 2011 and subsequent years',
      },
    ],
  },
  {
    id: 'f-s15',
    text: 'The Annual Investment Allowance began at £50,000 under the FA 2008 reforms and is now £1,000,000; the Treasury may change the cap by order, but only by substituting a greater amount.',
    source: 'CAA 2001 s 51A; HMRC CA10040',
    tag: 'Rates',
    sources: [
      {
        id: 'CAA 2001 s 51A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/51A',
        quote: 'The maximum allowance is £1,000,000',
      },
      {
        id: 'CAA 2001 s 51A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/51A',
        quote:
          'The Treasury may by order substitute for the amount for the time being specified in subsection (5) such greater amount as it thinks fit',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote: 'The introduction of a new Annual Investment Allowance (AIA)',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote: '£50,000 when the AIA was introduced',
      },
    ],
  },
  {
    id: 'f-c16',
    text: 'List C merges column 2 of both Tables and parts of paras 1 and 5 of CAA 1990 Sch AA1. Listing never makes an item plant; subject to s 23(4), it merely escapes ss 21-22.',
    source: 'CAA 2001 s 23; Urenco [2022] EWCA Civ 1587; HMRC CA21010',
    tag: 'Statute',
    sources: [
      {
        id: '[2022] EWCA Civ 1587',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
        quote:
          'list C in section 23 merges column 2 of Table 1, column 2 of Table 2 and paragraphs 1(3)(b) to (e) and 5(2) of Schedule AA1',
      },
      {
        id: 'HMRC CA21010',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21010',
        quote: 'Items described in ‘List C’ are not automatically treated as if they were plant.',
      },
      {
        id: 'CAA 2001 s 23',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/23',
        quote:
          'Sections 21 and 22 also do not affect the question whether expenditure on any item described in list C is, for the purposes of this Act, expenditure on the provision of plant or machinery.',
      },
      {
        id: 'HMRC CA21010',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca21010',
        quote: 'subject to the exceptions in S23(4)',
      },
      {
        id: 'CAA 2001 s 23',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/23',
        quote:
          'But items 1 to 16 of list C do not include any asset whose principal purpose is to insulate or enclose the interior of a building',
      },
    ],
  },
  {
    id: 'f-s16',
    text: 'A partnership with even one company member cannot claim the AIA: s 38A admits only individuals, all-individual partnerships and companies. Trusts are shut out too.',
    source: 'CAA 2001 s 38A; HMRC CA23082',
    tag: 'Statute',
    sources: [
      {
        id: 'CAA 2001 s 38A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/38A',
        quote: 'a partnership of which all the members are individuals, or',
      },
      {
        id: 'HMRC CA23082',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23082',
        quote:
          'This means that a partnership of which a company is a member, for example, is not eligible to claim.',
      },
      {
        id: 'HMRC CA23082',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23082',
        quote:
          'Trusts are in the same situation in that they do not fall within the definition of a qualifying person either.',
      },
    ],
  },
  {
    id: 'f-c17',
    text: "Interest and commitment fees on loans financing an oil rig's construction were held not to be expenditure on the provision of plant: they paid for the money, not the rig.",
    source: 'Ben-Odeco Ltd v Powlson [1978] 1 WLR 1093 (HL); HMRC CA20060',
    tag: 'Case law',
    sources: [
      {
        id: 'HMRC CA20060',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca20060',
        quote:
          'The House of Lords refused the capital allowance claim because the commitment fees and interest were not expenditure on the provision of the rig.',
      },
      {
        id: 'HMRC CA20060',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca20060',
        quote: 'They were expenditure on obtaining funds with which to acquire the rig.',
      },
      {
        id: '[2022] EWCA Civ 1587',
        url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2022/1587',
        quote: 'Ben-Odeco Ltd v Powlson (Inspector of Taxes) [1978] 1 WLR 1093',
      },
    ],
  },
  {
    id: 'f-s17',
    text: 'First-year allowances are never scaled down for a short chargeable period, unlike WDAs and the AIA limit, so a three-month accounting period still gets the full 40% FYA.',
    source: 'CAA 2001 ss 51A(6), 52, 56(3); HMRC CA11110',
    tag: 'Oddity',
    sources: [
      {
        id: 'HMRC CA11110',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca11110',
        quote:
          'The length of a chargeable period does not affect the amount of a first-year allowance',
      },
      {
        id: 'CAA 2001 s 51A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/51A',
        quote:
          'But if the chargeable period is more or less than a year, the maximum allowance is proportionately increased or reduced.',
      },
      {
        id: 'CAA 2001 s 56',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/56',
        quote:
          'If the chargeable period is more or less than a year, the amount is proportionately increased or reduced.',
      },
      {
        id: 'CAA 2001 s 52',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/52',
        quote:
          '(expenditure on plant or machinery in cases not falling within section 45S etc) 40%',
      },
    ],
  },
  {
    id: 'f-c18',
    text: "Industrial buildings allowance, created after the war, specifically excluded shops, offices, hotels and dwelling houses: the aim was 'the production of things', not retail. It was phased out by 2011; SBA arrived in 2018.",
    source: 'HMRC CA10040',
    tag: 'History',
    sources: [
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote:
          'The Income Tax Act 1945 put in place a system of capital allowances designed to encourage and assist the reconstruction of British industry after the war.',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote: 'Industrial buildings allowances replaced the mills and factories allowance.',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote: 'Shops, offices, hotels and dwelling houses were specifically excluded',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote:
          'it is the production of things and the export of things and not the retail distribution at home of things that matters',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote: 'The phased withdrawal of industrial and agricultural buildings allowances by 2011.',
      },
      {
        id: 'HMRC CA10040',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca10040',
        quote:
          'In 2018 a structures and buildings allowance was introduced for the cost of constructing and acquiring new non-residential buildings',
      },
    ],
  },
  {
    id: 'f-s18',
    text: 'Plant expenditure incurred in the chargeable period in which a qualifying activity permanently ceases gets neither the AIA nor any first-year allowance: general exclusion 1 in both s 38B and s 46.',
    source: 'CAA 2001, ss 38B and 46',
    tag: 'Statute',
    sources: [
      {
        id: 'CAA 2001 s 38B',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/38B',
        quote:
          'The expenditure is incurred in the chargeable period in which the qualifying activity is permanently discontinued.',
      },
      {
        id: 'CAA 2001 s 46',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/46',
        quote:
          'The expenditure is incurred in the chargeable period in which the qualifying activity is permanently discontinued.',
      },
      {
        id: 'CAA 2001 s 46',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/46',
        quote:
          'section 45U (expenditure on plant or machinery in cases not falling within section 45S etc)',
      },
    ],
  },
  {
    id: 'f-c19',
    text: 'The structures and buildings allowance entered CAA 2001 by statutory instrument, not by an Act: Part 2A was inserted by SI 2019/1087 under a power in FA 2019 s 30.',
    source: 'HMRC CA90010; CAA 2001 Pt 2A',
    tag: 'Oddity',
    sources: [
      {
        id: 'HMRC CA90010',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca90010',
        quote: 'CAA01/PART2A was inserted by SI2019/1087.',
      },
      {
        id: 'HMRC CA90010',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca90010',
        quote: 'with legislative powers introduced in section 30 Finance Act 2019',
      },
    ],
  },
  {
    id: 'f-s20',
    text: 'Company capital allowance claims: make, amend or withdraw until the latest of filing date plus a year, or 30 days after enquiry closure (claim-only enquiries excepted), closure amendment or appeal determination. HMRC can extend.',
    source: 'FA 1998 Sch 18 para 82',
    tag: 'Statute',
    sources: [
      {
        id: 'FA 1998 Sch 18 para 82',
        url: 'https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/82',
        quote:
          'do not include an enquiry restricted to a previous amendment making, amending or withdrawing a claim for capital allowances',
      },
      {
        id: 'FA 1998 Sch 18 para 82',
        url: 'https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/82',
        quote: 'at any time up to whichever is the last of the following dates',
      },
      {
        id: 'FA 1998 Sch 18 para 82',
        url: 'https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/82',
        quote:
          'the first anniversary of the filing date for the company tax return of the claimant company for the accounting period for which the claim is made',
      },
      {
        id: 'FA 1998 Sch 18 para 82',
        url: 'https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/82',
        quote:
          'if notice of enquiry is given into that return, 30 days after the enquiry is completed',
      },
      {
        id: 'FA 1998 Sch 18 para 82',
        url: 'https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/82',
        quote:
          'if after such an enquiry an officer of Revenue and Customs amends the return under paragraph 34(2)',
      },
      {
        id: 'FA 1998 Sch 18 para 82',
        url: 'https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/82',
        quote: 'if an appeal is brought against such an amendment',
      },
      {
        id: 'FA 1998 Sch 18 para 82',
        url: 'https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/82',
        quote: '30 days after notice of the amendment is issued',
      },
      {
        id: 'FA 1998 Sch 18 para 82',
        url: 'https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/82',
        quote: '30 days after the date on which the appeal is finally determined',
      },
      {
        id: 'FA 1998 Sch 18 para 82',
        url: 'https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/82',
        quote:
          'may be made, amended or withdrawn at a later time if an officer of Revenue and Customs allows it',
      },
    ],
  },
];
