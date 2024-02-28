import React from 'react';

const Input = React.forwardRef(({ placeholder, type, value, onChange }, ref) => {
  return (
    <input
      className='px-4 py-2 rounded-lg text-slate-950'
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
});

export default Input;