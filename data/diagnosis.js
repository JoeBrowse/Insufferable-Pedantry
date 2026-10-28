/*
 * Diagnosis cases. Five clues each, most oblique first. `answer` must match a name in reliefs.js.
 * Every item cites the source library (sources/*.jsonl) with a quote that tests/unit/insufferable-pedantry-content.test.ts
 * confirms word for word; each was then passed by an independent auditor.
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
      'No carry-forward of unused amount; denied to partnerships with a corporate partner.',
      '£1m cap, pro rata for short periods, one per group.',
    ],
    explain:
      'Effectively 100% relief on up to £1m a year of plant spend, cars excluded; trusts and mixed partnerships cannot claim.',
    ref: 'CAA 2001, ss 38A and 51A',
    sources: [
      {
        id: 'HMRC CA23081',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23081',
        quote:
          'The AIA is effectively a 100% first-year allowance for business expenditure on almost all plant or machinery (apart from cars) capped at a maximum allowance.',
      },
      {
        id: 'CAA 2001 s 51A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/51A',
        quote: 'The maximum allowance is £1,000,000.',
      },
      {
        id: 'CAA 2001 s 38A',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/38A',
        quote: '(b) a partnership of which all the members are individuals, or',
      },
      {
        id: 'HMRC CA23082',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23082',
        quote:
          'Trusts are in the same situation in that they do not fall within the definition of a qualifying person either.',
      },
    ],
    clueSources: [
      [
        {
          id: 'CAA 2001 s 51A',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/51A',
          quote:
            'Any annual investment allowance is made for the chargeable period in which the AIA qualifying expenditure is incurred.',
        },
      ],
      [
        {
          id: 'HMRC CA23082',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23082',
          quote:
            'Trusts are in the same situation in that they do not fall within the definition of a qualifying person either.',
        },
      ],
      [
        {
          id: 'HMRC CA23084',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23084',
          quote:
            'It may be claimed on long-life assets, integral features and other special rate expenditure, as well as on general plant and machinery',
        },
        {
          id: 'CAA 2001 s 38B',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/38B',
          quote:
            'The expenditure is incurred on the provision of a car (as defined by section 268A).',
        },
      ],
      [
        {
          id: 'HMRC CA23085',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23085',
          quote:
            'any unused balance of an AIA cannot be carried forward for use in a later chargeable period',
        },
        {
          id: 'CAA 2001 s 38A',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/38A',
          quote: 'a partnership of which all the members are individuals',
        },
        {
          id: 'HMRC CA23082',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23082',
          quote:
            'This means that a partnership of which a company is a member, for example, is not eligible to claim.',
        },
      ],
      [
        {
          id: 'CAA 2001 s 51A',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/51A',
          quote: 'The maximum allowance is £1,000,000.',
        },
        {
          id: 'CAA 2001 s 51A',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/51A',
          quote:
            'But if the chargeable period is more or less than a year, the maximum allowance is proportionately increased or reduced.',
        },
        {
          id: 'CAA 2001 s 51C',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/51C',
          quote:
            'The companies are entitled to a single annual investment allowance between them in respect of the relevant AIA qualifying expenditure.',
        },
      ],
    ],
  },
  {
    id: 'c-fe',
    answer: 'Full expensing',
    clues: [
      'Unused, not second-hand plant or machinery only.',
      'Companies within the charge to corporation tax only.',
      'Plant provided for leasing is generally excluded.',
      'Special rate expenditure and cars do not qualify.',
      '100% allowance rate; succeeded the 130% regime from 1 April 2023.',
    ],
    explain:
      "Companies' 100% FYA under s 45S from 1 April 2023 for unused main rate plant; cars and leased plant excluded.",
    ref: 'CAA 2001, s 45S',
    sources: [
      {
        id: 'CAA 2001 s 45S',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/45S',
        quote: 'it is incurred by a company within the charge to corporation tax',
      },
      {
        id: 'HMRC CA23174AA',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23174aa',
        quote:
          'a 100% FYA for qualifying expenditure on the provision of main rate plant or machinery – known as full expensing',
      },
      {
        id: 'CAA 2001 s 52',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/52',
        quote:
          'Expenditure qualifying under section 45S (expenditure on plant or machinery in other cases) which is not special rate expenditure 100%',
      },
      {
        id: 'HMRC CA23174AC',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23174ac',
        quote:
          'Expenditure on the provision of plant or machinery for leasing is excluded from the scope of full expensing and the 50% FYA.',
      },
    ],
    clueSources: [
      [
        {
          id: 'CAA 2001 s 45S',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/45S',
          quote: 'it is expenditure on plant or machinery which is unused and not second-hand',
        },
      ],
      [
        {
          id: 'CAA 2001 s 45S',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/45S',
          quote: 'it is incurred by a company within the charge to corporation tax',
        },
      ],
      [
        {
          id: 'CAA 2001 s 46',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/46',
          quote:
            'The expenditure is on the provision of plant or machinery for leasing (whether in the course of a trade or otherwise).',
        },
        {
          id: 'HMRC CA23174AC',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23174ac',
          quote:
            'Expenditure on the provision of plant or machinery for leasing is excluded from the scope of full expensing and the 50% FYA.',
        },
      ],
      [
        {
          id: 'HMRC CA23174AA',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23174aa',
          quote:
            'Special rate expenditure may qualify for the 50% FYA but does not qualify for full expensing.',
        },
        {
          id: 'HMRC CA23174AC',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23174ac',
          quote:
            'Expenditure incurred on the provision of a car is not eligible for full expensing or the 50% first-year allowance.',
        },
      ],
      [
        {
          id: 'CAA 2001 s 52',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/52',
          quote:
            'Expenditure qualifying under section 45S (expenditure on plant or machinery in other cases) which is not special rate expenditure 100%',
        },
        {
          id: 'CAA 2001 s 45S',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/45S',
          quote: 'it is incurred on or after 1 April 2023',
        },
        {
          id: 'HMRC CA23162',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23162',
          quote:
            'a 130% super-deduction for expenditure on the provision of main rate plant and machinery',
        },
        {
          id: 'HMRC CA23110',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23110',
          quote:
            'the period that the super-deduction was available (1 April 2021 to 31 March 2023)',
        },
      ],
    ],
  },
  {
    id: 'c-sba',
    answer: 'Structures and buildings allowance',
    clues: [
      'Cost of acquiring the land itself is excluded expenditure.',
      'Calculated on a straight line basis.',
      "On sale, the buyer continues at the seller's annual amount.",
      'Allowances made are added to disposal consideration for gains.',
      '3% a year over 33⅓ years.',
    ],
    explain:
      'Non-residential buildings whose construction began on or after 29 October 2018 (no earlier contract): 3% a year, straight line, over 33⅓ years.',
    ref: 'CAA 2001, Part 2A (s 270AA)',
    sources: [
      {
        id: 'CAA 2001 s 270AA',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
        quote: 'the construction of a building or structure begins on or after 29 October 2018',
      },
      {
        id: 'CAA 2001 s 270AB',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AB',
        quote: 'is treated as beginning before 29 October 2018 if any contract for works',
      },
      {
        id: 'CAA 2001 s 270AB',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AB',
        quote: 'is entered into before that date',
      },
      {
        id: 'CAA 2001 s 270AA',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
        quote:
          'the first use of the building or structure, after the qualifying expenditure is incurred, is non-residential use',
      },
      {
        id: 'CAA 2001 s 270AA',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
        quote: 'in the case of other qualifying expenditure, 3% of the expenditure',
      },
      {
        id: 'HMRC CA91300',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91300',
        quote:
          'This is calculated on a straight line basis, which means that qualifying expenditure may be relieved in full over 33 1/3 years.',
      },
    ],
    clueSources: [
      [
        {
          id: 'CAA 2001 s 270BG',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270BG',
          quote: 'on the acquisition of land or rights in or over land, or',
        },
        {
          id: 'CAA 2001 s 270BA',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270BA',
          quote: 'section 270BG (acquisition or alteration of land)',
        },
      ],
      [
        {
          id: 'HMRC CA91300',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91300',
          quote:
            'This is calculated on a straight line basis, which means that qualifying expenditure may be relieved in full over 33 1/3 years.',
        },
      ],
      [
        {
          id: 'HMRC CA91010',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91010',
          quote:
            'When a building is sold or transferred to another person, the SBA for the seller ceases.',
        },
        {
          id: 'HMRC CA91010',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca91010',
          quote:
            'can claim the SBA for the remainder of the 33 1/3 year period in which there is qualifying use, at the same annual amount as the original and subsequent owners',
        },
      ],
      [
        {
          id: 'TCGA 1992 s 37B',
          url: 'https://www.legislation.gov.uk/ukpga/1992/12/section/37B',
          quote:
            'the consideration for the disposal is treated as being increased by an amount equal to the amount of the structures and buildings allowance that has been made to the transferor',
        },
      ],
      [
        {
          id: 'CAA 2001 s 270AA',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
          quote: 'in the case of other qualifying expenditure, 3% of the expenditure',
        },
        {
          id: 'CAA 2001 s 270AA',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/270AA',
          quote: 'in the case of other qualifying expenditure, 33 1/3 years',
        },
      ],
    ],
  },
  {
    id: 'c-sla',
    answer: 'Short-life asset election',
    clues: [
      'Lets a disposal or scrapping trigger a balancing adjustment.',
      'Plant or machinery only; special rate expenditure generally excluded.',
      'Ships excluded; by statute each item gets its own pool.',
      'Irrevocable; companies have two years to opt in.',
      'Eight-year cut-off from end of period expenditure incurred; then usually main pool.',
    ],
    explain:
      'Opt to pool an asset singly so a disposal before the eight-year cut-off can give a balancing allowance.',
    ref: 'CAA 2001, ss 83–89',
    sources: [
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote:
          'Qualifying expenditure in respect of a short-life asset, if allocated to a pool, must be allocated to a single asset pool',
      },
      {
        id: 'HMRC CA23610',
        url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23610',
        quote: 'having a balancing adjustment when the asset is disposed of or scrapped',
      },
      {
        id: 'CAA 2001 s 86',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
        quote:
          'in any other case, the eighth anniversary of the end of the relevant chargeable period',
      },
      {
        id: 'CAA 2001 s 83',
        url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/83',
        quote:
          'the person incurring the expenditure elects for the plant or machinery to be treated as a short-life asset',
      },
    ],
    clueSources: [
      [
        {
          id: 'HMRC CA23610',
          url: 'https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23610',
          quote: 'having a balancing adjustment when the asset is disposed of or scrapped',
        },
      ],
      [
        {
          id: 'CAA 2001 s 83',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/83',
          quote:
            'Plant or machinery in respect of which qualifying expenditure has been incurred is a short-life asset if',
        },
        {
          id: 'CAA 2001 s 84',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/84',
          quote: 'The expenditure is special rate expenditure (see Chapter 10A).',
        },
      ],
      [
        {
          id: 'CAA 2001 s 84',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/84',
          quote: 'The plant or machinery is a ship.',
        },
        {
          id: 'CAA 2001 s 86',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
          quote:
            'Qualifying expenditure in respect of a short-life asset, if allocated to a pool, must be allocated to a single asset pool',
        },
      ],
      [
        {
          id: 'CAA 2001 s 85',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/85',
          quote: 'An election under section 83 is irrevocable.',
        },
        {
          id: 'CAA 2001 s 85',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/85',
          quote:
            'for corporation tax purposes, no later than 2 years after the end of the relevant chargeable period',
        },
      ],
      [
        {
          id: 'CAA 2001 s 86',
          url: 'https://www.legislation.gov.uk/ukpga/2001/2/section/86',
          quote:
            'in any other case, the eighth anniversary of the end of the relevant chargeable period',
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
    ],
  },
  {
    id: 'c-lrr',
    answer: 'Land remediation relief',
    clues: [
      'Companies only.',
      'Total deduction exceeds what was actually spent.',
      'A loss can be exchanged for a 16% payable credit.',
      'Barred if company, or person with relevant connection, caused contamination, even partly.',
      'Spending on landfill tax is expressly excluded.',
    ],
    explain:
      'Companies get an extra 50% deduction for remediating contaminated or long-derelict UK land; resulting losses can earn a 16% payable credit.',
    ref: 'CTA 2009, Part 14',
    sources: [
      {
        id: 'CTA 2009 s 1143',
        url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1143',
        quote:
          'where the expenditure is incurred for the purpose of remedying contamination or dereliction of the land',
      },
      {
        id: 'CTA 2009 s 1149',
        url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1149',
        quote:
          'The amount of the additional deduction is 50% of the qualifying land remediation expenditure.',
      },
      {
        id: 'CTA 2009 s 1147',
        url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1147',
        quote: 'the capital expenditure is allowed as a deduction in calculating the profits',
      },
      {
        id: 'CTA 2009 s 1149',
        url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1149',
        quote:
          'the land was in a derelict state throughout the period beginning with the earlier of',
      },
      {
        id: 'CTA 2009 s 1154',
        url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1154',
        quote: 'is 16% of the amount of the qualifying land remediation loss for the period',
      },
    ],
    clueSources: [
      [
        {
          id: 'CTA 2009 s 1149',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1149',
          quote: 'A company is entitled to corporation tax relief for an accounting period',
        },
        {
          id: 'CTA 2009 s 1143',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1143',
          quote:
            'This Part provides for corporation tax relief for expenditure on land in the United Kingdom',
        },
      ],
      [
        {
          id: 'CTA 2009 s 1149',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1149',
          quote:
            'which is allowable as a deduction in calculating for corporation tax purposes the profits',
        },
        {
          id: 'CTA 2009 s 1149',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1149',
          quote:
            'The relief is an additional deduction in calculating the profits of the business or the trade for the period.',
        },
        {
          id: 'CTA 2009 s 1149',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1149',
          quote:
            'The amount of the additional deduction is 50% of the qualifying land remediation expenditure.',
        },
      ],
      [
        {
          id: 'CTA 2009 s 1154',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1154',
          quote: 'is 16% of the amount of the qualifying land remediation loss for the period',
        },
        {
          id: 'CTA 2009 s 1151',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1151',
          quote:
            'an officer of Revenue and Customs must pay to the company the amount of the credit',
        },
      ],
      [
        {
          id: 'CTA 2009 s 1150',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1150',
          quote:
            'if the land is in a contaminated or derelict state wholly or partly as a result of any thing done, or omitted to be done, at any time by',
        },
        {
          id: 'CTA 2009 s 1150',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1150',
          quote: 'a person with a relevant connection to the company',
        },
      ],
      [
        {
          id: 'CTA 2009 s 1144',
          url: 'https://www.legislation.gov.uk/ukpga/2009/4/section/1144',
          quote: 'Condition F is that the expenditure is not incurred on landfill tax.',
        },
      ],
    ],
  },
];
