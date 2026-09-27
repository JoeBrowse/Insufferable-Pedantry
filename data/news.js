/*
 * Hand-picked news items. Each one has been checked against its source.
 * The daily feed (news-live.js) adds items from GOV.UK, HMRC manuals,
 * legislation.gov.uk and Find Case Law. Hand-picked items win where both link
 * to the same page. A new unique id shows as unread.
 */
window.IP_DATA = window.IP_DATA || {};

window.IP_DATA.news = [
  {
    id: 'budget-2025-fya40',
    date: '2025-11-26',
    tag: 'Budget',
    headline: 'Budget creates a 40% first-year allowance',
    standfirst:
      'From 1 January 2026, for new main rate plant and machinery. Open to unincorporated businesses and most leasing; cars, second-hand assets and assets leased overseas excluded.',
    source: 'ICAEW',
    url: 'https://www.icaew.com/technical/tax/tax-faculty/taxline/articles/2026/budget-changes-to-capital-allowances',
  },
  {
    id: 'budget-2025-wda14',
    date: '2025-11-26',
    tag: 'Budget',
    headline: 'Main pool writing down allowance cut from 18% to 14%',
    standfirst:
      'From 1 April 2026 for corporation tax and 6 April 2026 for income tax. Chargeable periods spanning the change use a hybrid rate.',
    source: 'Deloitte',
    url: 'https://taxscape.deloitte.com/measures-autumn-budget-2025/capital-allowances--writing-down-allowances-rate-reduction-and-new-first-year-allowance.aspx',
  },
];
