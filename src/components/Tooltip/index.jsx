import React from 'react';
const Tooltip = ({ children, content, position = 'top' }) => {
  return (
    <div className="hrms-tooltip-wrapper">
      {children}
      <div className={`hrms-tooltip ${position}`}>{content}</div>
    </div>
  );
};

export default Tooltip;