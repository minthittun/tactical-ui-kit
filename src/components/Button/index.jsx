import React from 'react';

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const classes = [
    'hrms-btn',
    variant !== 'default' ? variant : '',
    size === 'sm' ? 'hrms-btn-sm' : '',
    size === 'lg' ? 'hrms-btn-lg' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;