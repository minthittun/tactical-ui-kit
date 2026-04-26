import React from 'react';
const Skeleton = ({ variant = 'text', width, height }) => {
  const classes = {
    text: 'hrms-skeleton hrms-skeleton-text',
    title: 'hrms-skeleton hrms-skeleton-title',
    box: 'hrms-skeleton hrms-skeleton-box',
    circle: 'hrms-skeleton hrms-avatar'
  };

  return (
    <div 
      className={classes[variant]} 
      style={{ width, height }} 
    />
  );
};

export default Skeleton;