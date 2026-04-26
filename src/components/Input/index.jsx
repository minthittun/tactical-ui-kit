import React from 'react';
const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  disabled = false,
  required = false,
  id
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="hrms-form-group">
      {label && (
        <label className="hrms-form-label" htmlFor={inputId}>
          {label}
          {required && <span style={{ color: 'var(--accent-red)' }}> *</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={`hrms-input ${error ? 'error' : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      {error && <span className="hrms-form-error">{error}</span>}
    </div>
  );
};

export default Input;