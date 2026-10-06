import { useEffect, useState } from 'react';
import BrandWordmark from './BrandWordmark';

const SHOW_MS = 2400;
const FADE_MS = 450;

// y = vertical position, dir = which side it flies in from
const COINS = [
  { y: '14%', dir: 'ltr', delay: 0, dur: 2.2, size: 44 },
  { y: '30%', dir: 'rtl', delay: 0.25, dur: 2, size: 34 },
  { y: '66%', dir: 'ltr', delay: 0.4, dur: 1.9, size: 38 },
  { y: '82%', dir: 'rtl', delay: 0.1, dur: 2.3, size: 50 },
];

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('show');

  useEffect(() => {
    const leave = setTimeout(() => setPhase('leaving'), SHOW_MS);
    const done = setTimeout(() => {
      setPhase('done');
      onDone?.();
    }, SHOW_MS + FADE_MS);
    return () => {
      clearTimeout(leave);
      clearTimeout(done);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`splash${phase === 'leaving' ? ' splash--leaving' : ''}`}
      role="status"
      aria-label="Loading BankDash"
    >
      {COINS.map((c, i) => (
        <span
          key={i}
          className={`splash__coin-track splash__coin-track--${c.dir}`}
          style={{ '--y': c.y, '--delay': `${c.delay}s`, '--dur': `${c.dur}s`, '--size': `${c.size}px` }}
          aria-hidden="true"
        >
          <span className="splash__coin">$</span>
        </span>
      ))}

      <div className="splash__brand" aria-hidden="true">
        <span className="splash__dollar">$</span>
        <div className="splash__logo">
          <img src="/assets/iconfinder-vector-65-09-473792-1.png" alt="" />
          <BrandWordmark />
        </div>
      </div>
    </div>
  );
}
