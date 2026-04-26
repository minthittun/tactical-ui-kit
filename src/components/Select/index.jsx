import React from 'react';
const Select = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  disabled = false,
  required = false,
  id
}) => {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="hrms-form-group">
      {label && (
        <label className="hrms-form-label" htmlFor={selectId}>
          {label}
          {required && <span style={{ color: 'var(--accent-red)' }}> *</span>}
        </label>
      )}
      <select
        id={selectId}
        className={`hrms-select ${error ? 'error' : ''}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="hrms-form-error">{error}</span>}
    </div>
  );
};

export default Select;