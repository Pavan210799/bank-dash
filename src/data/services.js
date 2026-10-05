export const serviceHighlights = [
  { id: 'life', title: 'Life Insurance', subtitle: 'Unlimited protection', iconBg: '#e7edff', iconSrc: '/assets/svc-life-insurance.svg' },
  { id: 'shopping', title: 'Shopping', subtitle: 'Buy. Think. Grow.', iconBg: '#fff5d9', iconSrc: '/assets/svc-bag.svg' },
  { id: 'safety', title: 'Safety', subtitle: 'We are your allies', iconBg: '#dcfaf8', iconSrc: '/assets/svc-shield.svg' },
];

const DETAIL = { title: 'Lorem Ipsum', subtitle: 'Many publishing' };
const DETAILS = [DETAIL, DETAIL, DETAIL];
const SUBTITLE = 'It is a long established';

export const bankServices = [
  { id: 'business-1', title: 'Business loans', iconBg: '#ffe0eb', iconSrc: '/assets/svc-loan.svg' },
  { id: 'checking', title: 'Checking accounts', iconBg: '#fff5d9', iconSrc: '/assets/loan-briefcase.svg' },
  { id: 'savings', title: 'Savings accounts', iconBg: '#ffe0eb', iconSrc: '/assets/loan-graph.svg' },
  { id: 'cards', title: 'Debit and credit cards', iconBg: '#e7edff', iconSrc: '/assets/loan-user.svg' },
  { id: 'life', title: 'Life Insurance', iconBg: '#dcfaf8', iconSrc: '/assets/svc-shield.svg' },
  { id: 'business-2', title: 'Business loans', iconBg: '#ffe0eb', iconSrc: '/assets/svc-loan.svg' },
].map((service) => ({ ...service, subtitle: SUBTITLE, details: DETAILS }));
