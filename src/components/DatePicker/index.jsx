import React, { useState } from 'react';

const DatePicker = ({ value, onChange, label, placeholder = 'Select date', disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).toUpperCase();
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDateSelect = (day) => {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onChange?.(selectedDate);
    setIsOpen(false);
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const days = [];
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  for (let i = 0; i < firstDay; i++) {
    days.push({ day: null, otherMonth: true });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = new Date().getDate() === i &&
      currentMonth.getMonth() === new Date().getMonth() &&
      currentMonth.getFullYear() === new Date().getFullYear();
    const isSelected = value &&
      value.getDate() === i &&
      currentMonth.getMonth() === value.getMonth() &&
      currentMonth.getFullYear() === value.getFullYear();
    days.push({ day: i, isToday, isSelected });
  }

  return (
    <div className="hrms-form-group">
      {label && <label className="hrms-form-label">{label}</label>}
      <div className="hrms-datepicker">
        <input
          type="text"
          className="hrms-datepicker-input"
          value={value ? formatDate(value) : ''}
          placeholder={placeholder}
          readOnly
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        />
        {isOpen && (
          <div className="hrms-datepicker-calendar">
            <div className="hrms-datepicker-header">
              <button className="hrms-datepicker-nav" onClick={prevMonth}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M7 1L3 5l4 4" />
                </svg>
              </button>
              <span style={{ fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </span>
              <button className="hrms-datepicker-nav" onClick={nextMonth}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M3 1l4 4-4 4" />
                </svg>
              </button>
            </div>
            <div className="hrms-datepicker-grid">
              {dayNames.map(day => (
                <div key={day} className="hrms-datepicker-day-header">{day}</div>
              ))}
              {days.map((d, i) => (
                <div
                  key={i}
                  className={`hrms-datepicker-day ${d.otherMonth ? 'other-month' : ''} ${d.isToday ? 'today' : ''} ${d.isSelected ? 'selected' : ''}`}
                  onClick={() => d.day && handleDateSelect(d.day)}
                >
                  {d.day || ''}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;