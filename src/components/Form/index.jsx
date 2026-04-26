import React from 'react';
const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

export const FormGroup = ({ children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
    {children}
  </div>
);

export default Form;