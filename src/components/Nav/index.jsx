import React from 'react';
const Nav = ({ children }) => <nav className="hrms-nav">{children}</nav>;

export const NavItem = ({ children, active, onClick }) => (
  <div className={`hrms-nav-item ${active ? 'active' : ''}`} onClick={onClick}>
    {children}
  </div>
);

export const NavSection = ({ label, children }) => (
  <div className="hrms-nav-section">
    {label && <div className="hrms-nav-label">{label}</div>}
    {children}
  </div>
);

export const NavDivider = () => <div className="hrms-nav-divider" />;

export default Nav;