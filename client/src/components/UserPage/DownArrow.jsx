import React from 'react';
import styles from './userPage.module.css';

const DownArrow = () => {
  const handleClick = () => {
    // find number of thumbnails math and when we reach the end of that don't do this..
    const maxScrollHeight = document.getElementById('thumbnails').scrollHeight;
    if (document.getElementById('thumbnails').scrollTop !== maxScrollHeight) {
      document.getElementById('thumbnails').scrollTop += 78;
    }
    document.getElementById('arrowTop').className = styles.arrowTop;
  };
  return (
    <button className={styles.downArrow} onClick={handleClick} type="button" onKeyPress={handleClick} tag={0}>
      <i id="arrowDown" className={styles.arrowDown} />
    </button>
  );
};

export default DownArrow;
