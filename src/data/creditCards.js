/** Credit Cards page — Figma 101:371 / 158:118 / 196:190 */

export const creditCardVariants = ['primary', 'deep', 'secondary'];

/* Quadrant radii from the Figma polar chart (200×198 box, centre 93,107; inner ring r≈51) */
export const cardExpenseSlices = [
  { id: 'dbl', label: 'DBL Bank', start: 180, end: 270, r: 93, fill: '#E11D48', inner: '#BE123C' },
  { id: 'abm', label: 'ABM Bank', start: 270, end: 360, r: 107, fill: '#9D174D', inner: '#831843' },
  { id: 'brc', label: 'BRC Bank', start: 0, end: 90, r: 76, fill: '#D946EF', inner: '#C026D3' },
  { id: 'mcp', label: 'MCP Bank', start: 90, end: 180, r: 85, fill: '#2A1024', inner: '#4A1942' },
];

/* Legend reads row by row: DBL · BRC / ABM · MCP */
export const cardExpenseLegend = ['dbl', 'brc', 'abm', 'mcp'];

export const cardList = [
  { id: 1, type: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', holder: 'William', icon: 'cc-card-blue.svg', iconBg: '#e7edff' },
  { id: 2, type: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', holder: 'Michel', icon: 'cc-card-pink.svg', iconBg: '#ffe0eb' },
  { id: 3, type: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', holder: 'Edward', icon: 'cc-card-yellow.svg', iconBg: '#fff5d9' },
];

export const cardSettings = [
  { id: 'block', title: 'Block Card', subtitle: 'Instantly block your card', icon: 'cc-block.svg', iconBg: '#fff5d9' },
  { id: 'pin', title: 'Change Pin Code', subtitle: 'Choose another pin code', icon: 'cc-padlock.svg', iconBg: '#e7edff' },
  { id: 'google', title: 'Add to Google Pay', subtitle: 'Withdraw without any card', icon: 'cc-google.svg', iconBg: '#ffe0eb' },
  { id: 'apple-pay', title: 'Add to Apple Pay', subtitle: 'Withdraw without any card', icon: 'cc-apple.svg', iconBg: '#dcfaf8' },
  { id: 'apple-store', title: 'Add to Apple Store', subtitle: 'Withdraw without any card', icon: 'cc-apple.svg', iconBg: '#dcfaf8' },
];
