import React, { useState } from 'react';

const ProgressBar = () => {
  const [value, setValue] = useState("0");
  return (
    <progress value={value} max="100"></progress>
  );
};

export default ProgressBar;

