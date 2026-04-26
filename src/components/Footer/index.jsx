import React from 'react';
const Footer = ({ status, count, children }) => {
  return (
    <footer className="hrms-footer">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {status && (
          <div className="hrms-indicator online">
            {status}
          </div>
        )}
        {count && <span>{count}</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {children}
      </div>
    </footer>
  );
};

export default Footer;