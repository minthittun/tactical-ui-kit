import React from 'react';
const Header = ({ brand, classification, date, time }) => {
  return (
    <header className="hrms-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {brand && <div className="hrms-header-brand">{brand}</div>}
        {classification && (
          <>
            <div style={{ width: '1px', height: '24px', background: 'var(--border-primary)' }} />
            <div className="hrms-header-classification">{classification}</div>
          </>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {date && <span>{date}</span>}
        {time && <span style={{ fontVariantNumeric: 'tabular-nums' }}>{time}</span>}
      </div>
    </header>
  );
};

export default Header;