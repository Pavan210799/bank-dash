import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function lockPageScroll() {
  const root = document.documentElement;
  const scrollbar = window.innerWidth - root.clientWidth;
  const prev = { overflow: root.style.overflow, paddingRight: root.style.paddingRight };
  root.style.overflow = 'hidden';
  if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;
  return () => {
    root.style.overflow = prev.overflow;
    root.style.paddingRight = prev.paddingRight;
  };
}

export default function NotificationsMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const rootRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const unlock = lockPageScroll();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      unlock();
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <div className={`notif${open ? ' notif--open' : ''}`} ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="icon-btn"
        aria-label="Notifications"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        <img src="/assets/002-notification-1.svg" alt="" width={25} height={25} />
      </button>

      {open ? (
        <>
          {createPortal(<div className="notif__backdrop" aria-hidden="true" />, document.body)}
          {rootRef.current?.closest('header')
            ? createPortal(
                <div className="notif__backdrop notif__backdrop--header" aria-hidden="true" />,
                rootRef.current.closest('header'),
              )
            : null}
          <div id={panelId} className="notif__panel" role="dialog" aria-label="Notifications">
            <div className="notif__head">
              <h2 className="notif__title">Notifications</h2>
            </div>
            <div className="notif__empty">
              <span className="notif__empty-icon" aria-hidden="true">
                <img src="/assets/002-notification-1.svg" alt="" width={22} height={22} />
              </span>
              <p className="notif__empty-title">No recent notifications</p>
              <p className="notif__empty-text">You&apos;re all caught up. New alerts will show up here.</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
