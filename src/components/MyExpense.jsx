import { useState } from 'react';
import { expenseAmountForValue, expenseByMonth } from '../data/transactions';

const MAX = 142;

const money = (n) =>
  `$${n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

export default function MyExpense() {
  const [selected, setSelected] = useState('Dec');

  return (
    <section className="section my-expense">
      <div className="section-head">
        <h2>My Expense</h2>
      </div>
      <div className="section-card my-expense__card">
        <div
          className="my-expense__chart"
          role="group"
          aria-label="Monthly expense bars. Click a bar to select a month."
        >
          {expenseByMonth.map(({ month, value }) => {
            const isSelected = selected === month;
            return (
              <div key={month} className="my-expense__col">
                <button
                  type="button"
                  className="my-expense__bar-stack"
                  aria-pressed={isSelected}
                  aria-label={`${month}, ${money(expenseAmountForValue(value))}`}
                  onClick={() => setSelected(month)}
                >
                  <div className="my-expense__bar-wrap" style={{ height: `${(value / MAX) * 100}%` }}>
                    {isSelected ? (
                      <p className="my-expense__total">{money(expenseAmountForValue(value))}</p>
                    ) : null}
                    <div className={`my-expense__bar${isSelected ? ' my-expense__bar--peak' : ''}`} />
                  </div>
                </button>
                <span className="my-expense__month">{month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
