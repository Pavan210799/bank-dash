import { Link } from 'react-router-dom';
import NotificationsMenu from './NotificationsMenu';

function MenuButton({ onClick, className = '' }) {
  return (
    <button
      type="button"
      className={`menu-toggle ${className}`.trim()}
      onClick={onClick}
      aria-label="Open menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
}

export default function Header({ breakpoint, navMode, pageTitle = 'Overview', onMenuClick }) {
  if (breakpoint === 'mobile') {
    return (
      <header className="header header--mobile">
        <div className="header-mobile-top">
          <MenuButton onClick={onMenuClick} />
          <h1 className="header-title">{pageTitle}</h1>
          <Link to="/settings" className="avatar avatar--sm" aria-label="Profile settings">
            <img src="/assets/pexels-christina-morillo-1181690-1.png" alt="" />
          </Link>
        </div>
        <label className="search-field search-field--mobile">
          <img src="/assets/magnifying-glass-1.svg" alt="" width={16} height={16} />
          <input type="search" placeholder="Search for something" />
        </label>
      </header>
    );
  }

  const isTablet = breakpoint === 'tablet';
  const showDrawerMenu = navMode === 'drawer';

  return (
    <header
      className={`header header--${isTablet ? 'tablet' : 'desktop'} ${showDrawerMenu ? 'header--with-menu' : ''}`}
    >
      {showDrawerMenu && <MenuButton onClick={onMenuClick} className="menu-toggle--inline" />}
      <h1 className="header-title">{pageTitle}</h1>
      <div className="header-actions">
        <label className="search-field">
          <img src="/assets/magnifying-glass-1.svg" alt="" width={20} height={20} />
          <input type="search" placeholder="Search for something" />
        </label>
        <Link to="/settings" className="icon-btn" aria-label="Settings">
          <img src="/assets/settings-1.svg" alt="" width={25} height={25} />
        </Link>
        <NotificationsMenu />
        <Link
          to="/settings"
          className={`avatar ${isTablet ? 'avatar--tablet' : ''}`}
          aria-label="Profile settings"
        >
          <img src="/assets/pexels-christina-morillo-1181690-1.png" alt="" />
        </Link>
      </div>
    </header>
  );
}
