import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import PageSkeleton from '../components/PageSkeleton';
import Sidebar from '../components/Sidebar';
import { useBreakpoint, useNavMode } from '../hooks/useBreakpoint';

const SKELETON_MS = 700;
let firstPaint = true;

export default function AppShell({ pageTitle, children, mainClassName = 'dashboard-main' }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [introShell] = useState(() => firstPaint);
  const breakpoint = useBreakpoint();
  const navMode = useNavMode();
  const mainRef = useRef(null);
  const { pathname } = useLocation();

  // every page opens at the top
  useLayoutEffect(() => {
    mainRef.current?.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    firstPaint = false;
    const id = setTimeout(() => setLoading(false), SKELETON_MS);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className={`app-shell app-shell--${breakpoint} app-shell--nav-${navMode}${introShell ? ' fx-intro' : ''}`}
    >
      <Sidebar
        breakpoint={breakpoint}
        navMode={navMode}
        mobileOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
      <div className="app-content">
        <Header
          breakpoint={breakpoint}
          navMode={navMode}
          pageTitle={pageTitle}
          onMenuClick={() => setMobileNavOpen(true)}
        />
        <main ref={mainRef} className={`${mainClassName}${loading ? ' is-loading' : ' fx-enter'}`}>
          {loading ? <PageSkeleton pageTitle={pageTitle} /> : children}
        </main>
      </div>
    </div>
  );
}
