import React from 'react';
const StatCard = ({ label, value, variant = 'primary', progress }) => {
  return (
    <div className="hrms-stat">
      <div className="hrms-stat-header">
        <div className={`hrms-stat-indicator ${variant}`} />
        <div className="hrms-stat-label">{label}</div>
      </div>
      <div className="hrms-stat-value">{value}</div>
      {progress !== undefined && (
        <div className="hrms-stat-bar">
          <div
            className={`hrms-stat-bar-fill ${variant}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default StatCard;