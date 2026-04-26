import React from 'react';
const StatusBadge = ({ status, label, showDot = true }) => {
  const statusClass = {
    active: 'success',
    online: 'success',
    success: 'success',
    leave: 'warning',
    warning: 'warning',
    inactive: 'warning',
    danger: 'danger',
    error: 'danger',
    offline: 'danger',
    training: 'info',
    info: 'info'
  }[status] || 'neutral';

  return (
    <span className="hrms-status">
      {showDot && <span className={`hrms-status-dot ${statusClass}`} />}
      {label || status?.toUpperCase()}
    </span>
  );
};

export default StatusBadge;