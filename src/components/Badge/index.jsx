import React from 'react';
const Badge = ({ children, variant = 'default' }) => {
  return <span className={`hrms-badge ${variant !== 'default' ? variant : ''}`}>{children}</span>;
};

export default Badge;