import React, { useState } from 'react';

const Alert = ({ type = 'info', title, message, onClose, dismissible = true }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const icons = {
    success: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8" cy="8" r="6" />
        <path d="M5 8l2 2 4-4" />
      </svg>
    ),
    warning: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 2L14 14H2L8 2z" />
        <line x1="8" y1="6" x2="8" y2="10" />
        <circle cx="8" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
    danger: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8" cy="8" r="6" />
        <line x1="5" y1="5" x2="11" y2="11" />
        <line x1="11" y1="5" x2="5" y2="11" />
      </svg>
    ),
    info: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8" cy="8" r="6" />
        <line x1="8" y1="7" x2="8" y2="11" />
        <circle cx="8" cy="5" r="0.5" fill="currentColor" />
      </svg>
    )
  };

  return (
    <div className={`hrms-alert ${type}`}>
      <div className="hrms-alert-icon" style={{ color: `var(--accent-${type === 'danger' ? 'red' : type})` }}>
        {icons[type]}
      </div>
      <div className="hrms-alert-content">
        {title && <div className="hrms-alert-title">{title}</div>}
        {message && <div className="hrms-alert-message">{message}</div>}
      </div>
      {dismissible && (
        <button className="hrms-alert-close" onClick={() => { setVisible(false); onClose?.(); }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="3" x2="11" y2="11" />
            <line x1="11" y1="3" x2="3" y2="11" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;