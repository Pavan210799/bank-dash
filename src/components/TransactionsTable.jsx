import { useEffect, useRef, useState } from 'react';
import { allTransactions, formatAmount } from '../data/transactions';
import { useBreakpoint } from '../hooks/useBreakpoint';
import TxFlowIcon from './TxFlowIcon';
import TxPaginationChevron from './TxPaginationChevron';

const TABS = ['All Transactions', 'Income', 'Expense'];
const PAGE_COUNT = 4;
const PAGE_LOAD_MS = 550;
const SKELETON_ROWS = 5;

export default function TransactionsTable() {
  const breakpoint = useBreakpoint();
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [batch, setBatch] = useState(0);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const goToPage = (next) => {
    const target = Math.min(PAGE_COUNT, Math.max(1, next));
    if (target === page) return;
    setPage(target);
    setLoading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setLoading(false);
      setBatch((b) => b + 1);
    }, PAGE_LOAD_MS);
  };

  const rows = allTransactions.filter((row) => {
    if (tab === 1) return row.amount > 0;
    if (tab === 2) return row.amount < 0;
    return true;
  });

  const rowAnim = (i) =>
    batch > 0 ? { className: 'tx-row-in', style: { '--i': i } } : { className: '', style: undefined };
  const skeletonRows = Array.from({ length: SKELETON_ROWS }, (_, i) => i);

  return (
    <section className={`section tx-table-section tx-table-section--${breakpoint}`}>
      <header className="tx-section-top">
        <h2 className="tx-section-title">Recent Transactions</h2>
        <div className="tx-tabs" role="tablist" aria-label="Transaction filters">
          {TABS.map((label, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={tab === i}
              className={`tx-tabs__item${tab === i ? ' tx-tabs__item--active' : ''}`}
              onClick={() => setTab(i)}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="section-card tx-table-card" aria-busy={loading}>
        <div className="tx-table-wrap">
          <table className="tx-table">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Transaction ID</th>
                <th scope="col">Type</th>
                <th scope="col">Card</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? skeletonRows.map((i) => (
                    <tr key={`skel-${i}`} className="tx-skel-row" aria-hidden="true">
                      <td>
                        <div className="tx-table__desc">
                          <span className="skel tx-skel-icon">
                            <TxFlowIcon flow="in" />
                          </span>
                          <span className="skel skel-line tx-skel-line--lg" />
                        </div>
                      </td>
                      <td><span className="skel skel-line tx-skel-line" /></td>
                      <td><span className="skel skel-line tx-skel-line--sm" /></td>
                      <td><span className="skel skel-line tx-skel-line" /></td>
                      <td><span className="skel skel-line tx-skel-line" /></td>
                      <td><span className="skel skel-line tx-skel-line--sm" /></td>
                      <td>
                        <span className="skel tx-skel-pill">
                          <span className="tx-download">Download</span>
                        </span>
                      </td>
                    </tr>
                  ))
                : rows.map((row, i) => (
                <tr key={`${batch}-${row.id}-${i}`} {...rowAnim(i)}>
                  <td data-label="Description">
                    <div className="tx-table__desc">
                      <TxFlowIcon flow={row.flow} />
                      <span className="tx-table__name">{row.description}</span>
                    </div>
                  </td>
                  <td data-label="Transaction ID">{row.id}</td>
                  <td data-label="Type">{row.type}</td>
                  <td data-label="Card">{row.card}</td>
                  <td data-label="Date">{row.date}</td>
                  <td
                    data-label="Amount"
                    className={row.flow === 'in' ? 'tx-table__amount--in' : 'tx-table__amount--out'}
                  >
                    {formatAmount(row.amount)}
                  </td>
                  <td data-label="Receipt">
                    <button type="button" className="tx-download">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="tx-mobile-list">
          {loading
            ? skeletonRows.map((i) => (
                <li key={`m-skel-${i}`} className="tx-mobile-row tx-skel-row" aria-hidden="true">
                  <span className="skel tx-skel-icon">
                    <TxFlowIcon flow="in" />
                  </span>
                  <div className="tx-mobile-row__copy tx-skel-copy">
                    <span className="skel skel-line tx-skel-line--lg" />
                    <span className="skel skel-line tx-skel-line--sm" />
                  </div>
                  <span className="skel skel-line tx-skel-line--sm" />
                </li>
              ))
            : rows.map((row, i) => (
            <li
              key={`m-${batch}-${row.id}-${i}`}
              className={`tx-mobile-row ${rowAnim(i).className}`.trim()}
              style={rowAnim(i).style}
            >
              <TxFlowIcon flow={row.flow} />
              <div className="tx-mobile-row__copy">
                <p className="tx-mobile-row__title">{row.description}</p>
                <p className="tx-mobile-row__meta">{row.date}</p>
              </div>
              <span
                className={
                  row.flow === 'in' ? 'tx-table__amount--in' : 'tx-table__amount--out'
                }
              >
                {formatAmount(row.amount)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <nav className="tx-pagination" aria-label="Transaction pages">
        <div className="tx-pagination__bar">
          <button
            type="button"
            className="tx-pagination__nav tx-pagination__nav--prev"
            disabled={page <= 1}
            onClick={() => goToPage(page - 1)}
          >
            <TxPaginationChevron direction="prev" />
            Previous
          </button>
          <div className="tx-pagination__pages">
            {Array.from({ length: PAGE_COUNT }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={`tx-pagination__page${page === n ? ' tx-pagination__page--active' : ''}`}
                onClick={() => goToPage(n)}
                aria-current={page === n ? 'page' : undefined}
              >
                {n}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="tx-pagination__nav tx-pagination__nav--next"
            disabled={page >= PAGE_COUNT}
            onClick={() => goToPage(page + 1)}
          >
            Next
            <TxPaginationChevron direction="next" />
          </button>
        </div>
      </nav>
    </section>
  );
}
