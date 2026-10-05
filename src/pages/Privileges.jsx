import AppShell from '../layout/AppShell';
import { membership, privileges } from '../data/privileges';

const points = (v) => v.toLocaleString('en-US');

export default function Privileges() {
  const { tier, since, nextTier, nextTierPoints } = membership;
  const progress = Math.min(membership.points / nextTierPoints, 1);

  return (
    <AppShell pageTitle="My Privileges" mainClassName="dashboard-main priv-main">
      <div className="priv-grid">
        <section className="priv-tier" aria-label="Membership">
          <div className="priv-tier__info">
            <p className="priv-tier__label">Current Tier</p>
            <h2 className="priv-tier__name">{tier}</h2>
            <p className="priv-tier__since">{since}</p>
          </div>
          <div className="priv-tier__progress">
            <div className="priv-tier__points">
              <span className="priv-tier__value">{points(membership.points)}</span>
              <span className="priv-tier__unit">points</span>
            </div>
            <div
              className="priv-tier__bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={nextTierPoints}
              aria-valuenow={membership.points}
              aria-label={`Progress to ${nextTier}`}
            >
              <span style={{ width: `${progress * 100}%` }} />
            </div>
            <p className="priv-tier__next">
              {points(nextTierPoints - membership.points)} points to {nextTier}
            </p>
          </div>
        </section>

        <section className="section priv-list">
          <div className="section-head">
            <h2>Your Privileges</h2>
          </div>
          <ul className="priv-list__items">
            {privileges.map((item) => (
              <li key={item.id} className={`priv-item${item.active ? '' : ' is-locked'}`}>
                <span className="priv-item__icon" style={{ backgroundColor: item.iconBg }}>
                  <img src={item.iconSrc} alt="" width={22} height={22} />
                </span>
                <div className="priv-item__copy">
                  <p className="priv-item__title">{item.title}</p>
                  <p className="priv-item__subtitle">{item.subtitle}</p>
                </div>
                <span className="priv-item__status">{item.active ? 'Active' : nextTier}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </AppShell>
  );
}
