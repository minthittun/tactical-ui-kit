import React from 'react';
const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`hrms-card ${className}`}>
      {title && <div className="hrms-card-header">{title}</div>}
      <div className="hrms-card-content">{children}</div>
    </div>
  );
};

export default Card;