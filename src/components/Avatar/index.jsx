import React from 'react';
const Avatar = ({ name, size = 'md', src }) => {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : '?';

  return (
    <div className={`hrms-avatar ${size !== 'md' ? size : ''}`}>
      {src ? (
        <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        initials
      )}
    </div>
  );
};

export default Avatar;