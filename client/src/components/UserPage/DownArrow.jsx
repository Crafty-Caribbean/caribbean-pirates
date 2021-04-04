import React from 'react';
import styles from './userPage.module.css';

const DownArrow = () => {
  const handleClick = () => {
    const maxScrollHeight = document.getElementById('patternList').scrollHeight;
    if (document.getElementById('patternList').scrollTop !== maxScrollHeight) {
      document.getElementById('patternList').scrollTop += 100;
    }
    document.getElementById('arrowTop').className = styles.arrowTop;
  };
  return (
    <button className={styles.downArrow} onClick={handleClick} onKeyPress={handleClick} tag={0}>
      <i id="arrowDown" className={styles.arrowDown} />
    </button>
  );
};

export default DownArrow;
