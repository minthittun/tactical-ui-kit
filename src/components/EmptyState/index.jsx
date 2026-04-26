import React from 'react';
const EmptyState = ({ 
  icon, 
  title = 'No Data', 
  description = 'There are no items to display',
  action 
}) => {
  return (
    <div className="hrms-empty-state">
      {icon ? (
        <div className="hrms-empty-state-icon">{icon}</div>
      ) : (
        <div className="hrms-empty-state-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        </div>
      )}
      <div className="hrms-empty-state-title">{title}</div>
      <div className="hrms-empty-state-description">{description}</div>
      {action && <div style={{ marginTop: '16px' }}>{action}</div>}
    </div>
  );
};

export default EmptyState;