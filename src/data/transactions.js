/* transactions list */

/* bar heights for my expense chart */
export const expenseByMonth = [
  { month: 'Aug', value: 93 },
  { month: 'Sep', value: 142 },
  { month: 'Oct', value: 96 },
  { month: 'Nov', value: 49 },
  { month: 'Dec', value: 129 },
  { month: 'Jan', value: 88 },
];

export const expensePeakValue = 129;
export const expensePeakAmount = 12500;

export function expenseAmountForValue(value) {
  return Math.round((expensePeakAmount * value) / expensePeakValue / 500) * 500;
}

export const allTransactions = [
  {
    id: '#12548796',
    description: 'Spotify Subscription',
    type: 'Shopping',
    card: '1234 ****',
    date: '28 Jan, 12.30 AM',
    amount: -2500,
    icon: '/assets/iconfinder-business-finance-money-13-2784281-1.svg',
    iconBg: '#FFF5D9',
    flow: 'out',
  },
  {
    id: '#12548796',
    description: 'Freepik Sales',
    type: 'Transfer',
    card: '1234 ****',
    date: '25 Jan, 10.40 PM',
    amount: 750,
    icon: '/assets/iconfinder-paypal-payment-pay-5340264-1.svg',
    iconBg: '#E7EDFF',
    flow: 'in',
  },
  {
    id: '#12548796',
    description: 'Mobile Service',
    type: 'Service',
    card: '1234 ****',
    date: '20 Jan, 10.40 PM',
    amount: -150,
    icon: '/assets/iconfinder-business-finance-money-13-2784281-1.svg',
    iconBg: '#DCFAF8',
    flow: 'out',
  },
  {
    id: '#12548796',
    description: 'Wilson',
    type: 'Transfer',
    card: '1234 ****',
    date: '15 Jan, 03.29 PM',
    amount: -1050,
    icon: '/assets/iconfinder-6-4753731-1.svg',
    iconBg: '#FFE0EB',
    flow: 'out',
  },
  {
    id: '#12548796',
    description: 'Emilly',
    type: 'Transfer',
    card: '1234 ****',
    date: '14 Jan, 10.40 PM',
    amount: 840,
    icon: '/assets/iconfinder-6-4753731-1.svg',
    iconBg: '#DCFAF8',
    flow: 'in',
  },
];

export function formatAmount(value) {
  const abs = Math.abs(value).toLocaleString('en-US');
  return value >= 0 ? `+$${abs}` : `-$${abs}`;
}
