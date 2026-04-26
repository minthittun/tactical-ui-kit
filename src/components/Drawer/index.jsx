import React, { useEffect } from 'react';

const Drawer = ({ isOpen, onClose, title, children, footer, width = '380px' }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="hrms-drawer-overlay"
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
        />
      )}
      <div
        className={`hrms-drawer ${isOpen ? 'open' : ''}`}
        style={{ width }}
      >
        <div className="hrms-drawer-header">
          <span className="hrms-drawer-title">{title}</span>
          <button className="hrms-close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="3" x2="11" y2="11" />
              <line x1="11" y1="3" x2="3" y2="11" />
            </svg>
          </button>
        </div>
        <div className="hrms-drawer-content">{children}</div>
        {footer && <div className="hrms-drawer-footer">{footer}</div>}
      </div>
    </>
  );
};

export default Drawer;