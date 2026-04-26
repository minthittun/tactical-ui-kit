import React from 'react';
const Toggle = ({ checked, onChange, label, disabled = false }) => {
  return (
    <label className="hrms-toggle" style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <div
        className={`hrms-toggle-track ${checked ? 'active' : ''}`}
        onClick={() => !disabled && onChange?.(!checked)}
      >
        <div className="hrms-toggle-thumb" />
      </div>
      {label && <span className="hrms-toggle-label">{label}</span>}
    </label>
  );
};

export default Toggle;