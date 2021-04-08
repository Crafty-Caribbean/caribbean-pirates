import React from 'react';

import styles from './Tag.css';

export default ({ type, handleClick }) => {
  const typeColor = {
    Beginner: '#73b7b8',
    Novice: '#50b99b',
    Intermediate: '#f6cb52',
    Advanced: '#f05a29',
    Expert: '#af1d3c',
    Crochet: '#f3b816',
    Knitting: '#d23f0f',
  };

  const tagStyle = {
    backgroundColor: typeColor[type] || 'light-gray',
  };

  return (
    <button
      className={styles.tag}
      onClick={handleClick}
      style={tagStyle}
      type="button"
    >
      {type}
    </button>
  );
};
