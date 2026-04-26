import React, { useState } from 'react';

const Checkbox = ({ checked, onChange, label, disabled = false }) => {
  return (
    <label 
      className={`hrms-checkbox ${checked ? 'checked' : ''}`} 
      style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <div 
        className="hrms-checkbox-box" 
        onClick={() => !disabled && onChange?.(!checked)}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 6l3 3 5-5" />
          </svg>
        )}
      </div>
      {label && <span className="hrms-checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;