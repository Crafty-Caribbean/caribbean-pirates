import React from 'react';
import styles from './userPage.module.css';

const TopArrow = () => {
  const handleClick = () => {
    if (document.getElementById('patternList').scrollTop > 0) {
      document.getElementById('patternList').scrollTop -= 100;
    }
    if (document.getElementById('patternList').scrollTop <= 100) {
      document.getElementById('arrowTop').className = styles.hide;
    }
  };

  return (
    <button id="topArrow" className={styles.topArrow} onClick={handleClick} onKeyPress={handleClick} tag={0} type="button">
      <i id="arrowTop" className={styles.hide} />
    </button>
  );
};

export default TopArrow;
