import React from 'react';
const Pagination = ({ current, total, onChange, pageSize = 10 }) => {
  const totalPages = Math.ceil(total / pageSize);
  
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages = [];
    const showPages = 5;
    let start = Math.max(1, current - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);
    
    if (end - start < showPages - 1) {
      start = Math.max(1, end - showPages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const start = (current - 1) * pageSize + 1;
  const end = Math.min(current * pageSize, total);

  return (
    <div className="hrms-pagination">
      <button
        className="hrms-pagination-btn"
        disabled={current === 1}
        onClick={() => onChange?.(current - 1)}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
          <path d="M7 1L3 5l4 4" />
        </svg>
      </button>
      
      {getVisiblePages().map(page => (
        <button
          key={page}
          className={`hrms-pagination-btn ${current === page ? 'active' : ''}`}
          onClick={() => onChange?.(page)}
        >
          {page}
        </button>
      ))}
      
      <button
        className="hrms-pagination-btn"
        disabled={current === totalPages}
        onClick={() => onChange?.(current + 1)}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
          <path d="M3 1l4 4-4 4" />
        </svg>
      </button>
      
      <span className="hrms-pagination-info">
        {start}-{end} of {total}
      </span>
    </div>
  );
};

export default Pagination;