import React, { useEffect } from 'react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer, 
  size = 'md',
  closeOnOverlay = true,
  closeOnEscape = true 
}) => {
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeStyles = {
    sm: { maxWidth: '400px' },
    md: { maxWidth: '560px' },
    lg: { maxWidth: '800px' },
    xl: { maxWidth: '1000px' },
    full: { maxWidth: '90vw', width: '90vw' }
  };

  return (
    <div className="hrms-modal-overlay" onClick={closeOnOverlay ? onClose : undefined}>
      <div 
        className="hrms-modal" 
        style={sizeStyles[size]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hrms-modal-header">
          <span className="hrms-modal-title">{title}</span>
          <button className="hrms-close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="3" x2="11" y2="11" />
              <line x1="11" y1="3" x2="3" y2="11" />
            </svg>
          </button>
        </div>
        <div className="hrms-modal-content">{children}</div>
        {footer && <div className="hrms-modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;