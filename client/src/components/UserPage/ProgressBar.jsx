import React, { useState } from 'react';

const ProgressBar = ({ progress }) => {
  const [value, setValue] = useState(progress.toString());

  const at100 = () => {
    if (confirm('Move to completed?')) {
      console.log('ok');
    } else {
      console.log('do nothing');
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === '100') {
      at100();
    }
  };

  return (
    <input type="range" min="0" max="100" value={value} step="1" onChange={(event) => handleChange(event)} />
  );
};

export default ProgressBar;
