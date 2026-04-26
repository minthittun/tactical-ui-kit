import React from 'react';
const ProgressBar = ({ value, label, variant = 'default', showLabel = false }) => {
  return (
    <div>
      {showLabel && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          {label && <span className="hrms-progress-label">{label}</span>}
          <span className="hrms-progress-label">{Math.round(value)}%</span>
        </div>
      )}
      <div className={`hrms-progress ${variant !== 'default' ? variant : ''}`}>
        <div className="hrms-progress-fill" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;