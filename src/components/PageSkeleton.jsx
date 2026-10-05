/* skeleton layout for each page */
const LAYOUTS = {
  Overview: [
    { cols: 3, items: [['cards', 2, 235], ['list', 1, 235]] },
    { cols: 3, items: [['bars', 2, 322], ['pie', 1, 322]] },
    { cols: 5, items: [['people', 2, 276], ['chart', 3, 276]] },
  ],
  Transactions: [
    { cols: 3, items: [['cards', 2, 235], ['bars', 1, 235]] },
    { cols: 1, items: [['table', 1, 420]] },
  ],
  Accounts: [
    { cols: 4, stats: true, items: [['stat', 1, 120], ['stat', 1, 120], ['stat', 1, 120], ['stat', 1, 120]] },
    { cols: 3, items: [['list', 2, 235], ['cards', 1, 235]] },
    { cols: 3, items: [['bars', 2, 364], ['list', 1, 364]] },
  ],
  Investments: [
    { cols: 3, stats: true, items: [['stat', 1, 120], ['stat', 1, 120], ['stat', 1, 120]] },
    { cols: 2, items: [['chart', 1, 300], ['chart', 1, 300]] },
    { cols: 2, items: [['list', 1, 360], ['table', 1, 360]] },
  ],
  'Credit Cards': [
    { cols: 3, items: [['card', 1, 235], ['card', 1, 235], ['card', 1, 235]] },
    { cols: 3, items: [['pie', 1, 300], ['form', 2, 300]] },
    { cols: 3, items: [['list', 2, 300], ['list', 1, 300]] },
  ],
  Loans: [
    { cols: 4, stats: true, items: [['stat', 1, 120], ['stat', 1, 120], ['stat', 1, 120], ['stat', 1, 120]] },
    { cols: 1, items: [['table', 1, 460]] },
  ],
  Services: [
    { cols: 3, stats: true, items: [['stat', 1, 120], ['stat', 1, 120], ['stat', 1, 120]] },
    { cols: 1, items: [['rows', 1, 520]] },
  ],
  'My Privileges': [
    { cols: 1, items: [['banner', 1, 140]] },
    { cols: 3, stats: true, items: Array.from({ length: 6 }, () => ['stat', 1, 95]) },
  ],
  Setting: [{ cols: 1, items: [['form', 1, 560]] }],
};

const Line = ({ w = '60%', h }) => <span className="skel skel-line" style={{ width: w, height: h }} />;
const Circle = ({ s = 45 }) => <span className="skel skel-circle" style={{ width: s, height: s }} />;

function ListRows({ n = 3, square }) {
  return Array.from({ length: n }, (_, i) => (
    <div key={i} className="skel-row">
      {square ? <span className="skel skel-square" /> : <Circle />}
      <div className="skel-stack">
        <Line w="70%" />
        <Line w="40%" h={10} />
      </div>
      <Line w="18%" />
    </div>
  ));
}

function Body({ type }) {
  switch (type) {
    case 'stat':
      return (
        <div className="skel-row skel-row--stat">
          <Circle s={56} />
          <div className="skel-stack">
            <Line w="55%" h={10} />
            <Line w="75%" h={16} />
          </div>
        </div>
      );
    case 'cards':
      return (
        <div className="skel-cards">
          <span className="skel skel-cc" />
          <span className="skel skel-cc skel-cc--soft" />
        </div>
      );
    case 'card':
      return <span className="skel skel-cc" />;
    case 'banner':
      return <span className="skel skel-cc skel-banner" />;
    case 'bars':
      return (
        <div className="skel-bars">
          {[55, 80, 40, 90, 65, 75, 50].map((h, i) => (
            <span key={i} className="skel skel-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
      );
    case 'chart':
      return (
        <div className="skel-chart">
          <svg viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden>
            <path d="M0 80 C40 40 70 90 110 55 S180 20 210 50 S270 30 300 20" />
          </svg>
        </div>
      );
    case 'pie':
      return (
        <div className="skel-pie-wrap">
          <span className="skel skel-pie" />
        </div>
      );
    case 'people':
      return (
        <div className="skel-people">
          {[0, 1, 2].map((i) => (
            <div key={i} className="skel-stack skel-stack--center">
              <Circle s={60} />
              <Line w={56} />
              <Line w={40} h={10} />
            </div>
          ))}
        </div>
      );
    case 'table':
      return (
        <div className="skel-table">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="skel-table__row">
              <Line w="22%" />
              <Line w="14%" />
              <Line w="14%" />
              <Line w="12%" />
            </div>
          ))}
        </div>
      );
    case 'rows':
      return <ListRows n={6} square />;
    case 'form':
      return (
        <div className="skel-form">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="skel-stack">
              <Line w="35%" h={11} />
              <span className="skel skel-input" />
            </div>
          ))}
        </div>
      );
    default:
      return <ListRows />;
  }
}

export default function PageSkeleton({ pageTitle }) {
  const rows = LAYOUTS[pageTitle] ?? LAYOUTS.Overview;
  return (
    <div className="page-skel" aria-busy="true" aria-label="Loading content">
      {rows.map((row, r) => (
        <div
          key={r}
          className={`page-skel__row${row.stats ? ' page-skel__row--stats' : ''}`}
          style={{ '--cols': row.cols }}
        >
          {row.items.map(([type, span, h], i) => {
            const bare = type === 'card' || type === 'cards' || type === 'banner';
            return (
              <div key={i} className="page-skel__item" style={{ '--span': span, '--h': `${h}px` }}>
                {type !== 'stat' && type !== 'banner' && <Line w={140} h={18} />}
                <div className={`page-skel__block${bare ? ' page-skel__block--bare' : ''}`}>
                  <Body type={type} />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
