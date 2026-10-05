import { useEffect, useState } from 'react';

/* mobile < 640, tablet 640 - 1024, desktop > 1024 */
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint);

  useEffect(() => {
    const onResize = () => setBreakpoint(getBreakpoint());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return breakpoint;
}

export function useNavMode() {
  const [navMode, setNavMode] = useState(getNavMode);

  useEffect(() => {
    const onResize = () => setNavMode(getNavMode());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return navMode;
}

/* tablet uses icon sidebar, mobile uses menu drawer */
export const NAV_BREAKPOINTS = {
  compactMin: 640,
  compactMax: 999,
};

export const BREAKPOINTS = {
  mobileMax: 639,
  tabletMin: 640,
  tabletMax: 1024,
  desktopMin: 1025,
  desktopFrame: 1440,
};

function getBreakpoint() {
  if (typeof window === 'undefined') return 'tablet';
  const w = window.innerWidth;
  if (w < BREAKPOINTS.tabletMin) return 'mobile';
  /* 1024 and below is tablet */
  if (w <= BREAKPOINTS.tabletMax) return 'tablet';
  return 'desktop';
}

/* full / compact / drawer sidebar */
function getNavMode() {
  if (typeof window === 'undefined') return 'full';
  const w = window.innerWidth;
  if (w > BREAKPOINTS.tabletMax) return 'full';
  if (w < NAV_BREAKPOINTS.compactMin) return 'drawer';
  if (w <= NAV_BREAKPOINTS.compactMax) return 'compact';
  return 'full';
}
