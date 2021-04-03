import React from 'react';
import styles from './userPage.module.css';

const TopArrow = () => {
  const handleClick = () => {
    if (document.getElementById('thumbnails').scrollTop > 0) {
      document.getElementById('thumbnails').scrollTop -= 78;
    }
    if (document.getElementById('thumbnails').scrollTop <= 78) {
      document.getElementById('arrowTop').className = styles.hide;
    }
  };

  return (
    <button id="topArrow" className={styles.topArrow} onClick={handleClick} type="button" onKeyPress={handleClick} tag={0}>
      <i id="arrowTop" className={styles.hide} />
    </button>
  );
};

export default TopArrow;
