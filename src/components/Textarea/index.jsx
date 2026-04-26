import React from 'react';
const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false,
  id,
  rows = 4
}) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="hrms-form-group">
      {label && (
        <label className="hrms-form-label" htmlFor={textareaId}>
          {label}
          {required && <span style={{ color: 'var(--accent-red)' }}> *</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`hrms-textarea ${error ? 'error' : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
      />
      {error && <span className="hrms-form-error">{error}</span>}
    </div>
  );
};

export default Textarea;