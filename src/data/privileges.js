export const membership = {
  tier: 'Crimson Gold',
  since: 'Member since January 2021',
  points: 12450,
  nextTier: 'Platinum',
  nextTierPoints: 15000,
};

export const privileges = [
  {
    id: 'cashback',
    title: '2% Cashback',
    subtitle: 'On every card purchase above $50',
    iconBg: '#fff5d9',
    iconSrc: '/assets/svc-bag.svg',
    active: true,
  },
  {
    id: 'insurance',
    title: 'Travel Insurance',
    subtitle: 'Complimentary cover on booked trips',
    iconBg: '#e7edff',
    iconSrc: '/assets/svc-life-insurance.svg',
    active: true,
  },
  {
    id: 'rates',
    title: 'Preferred Rates',
    subtitle: '0.5% lower interest on new loans',
    iconBg: '#ffe0eb',
    iconSrc: '/assets/loan-graph.svg',
    active: true,
  },
  {
    id: 'protection',
    title: 'Fraud Protection',
    subtitle: 'Zero liability on unauthorised charges',
    iconBg: '#dcfaf8',
    iconSrc: '/assets/svc-shield.svg',
    active: true,
  },
  {
    id: 'advisor',
    title: 'Personal Advisor',
    subtitle: 'A dedicated relationship manager',
    iconBg: '#e7edff',
    iconSrc: '/assets/loan-user.svg',
    active: false,
  },
  {
    id: 'lounge',
    title: 'Airport Lounges',
    subtitle: 'Free access at 1,200+ lounges',
    iconBg: '#fff5d9',
    iconSrc: '/assets/loan-briefcase.svg',
    active: false,
  },
];
