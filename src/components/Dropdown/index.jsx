import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ 
  trigger, 
  items, 
  onSelect, 
  align = 'left',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick(item);
    } else {
      onSelect?.(item);
    }
    if (item.danger) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`hrms-dropdown ${isOpen ? 'open' : ''} ${className}`} ref={dropdownRef}>
      <div className="hrms-dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      <div className="hrms-dropdown-menu" style={{ [align === 'right' ? 'right' : 'left']: 0 }}>
        {items.map((item, index) => (
          item.divider ? (
            <div key={index} className="hrms-dropdown-divider" />
          ) : (
            <div 
              key={item.value || index} 
              className={`hrms-dropdown-item ${item.danger ? 'danger' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item.icon}
              {item.label}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Dropdown;