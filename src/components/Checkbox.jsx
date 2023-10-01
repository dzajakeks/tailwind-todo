import React from 'react';

const Checkbox = ({ checked, onToggle }) => {
  return (
    <input
      onClick={() => onToggle(!checked)}
      defaultChecked={checked}
      type='checkbox'
      className='checkbox border-2'
    />
  );
};

export default Checkbox;
