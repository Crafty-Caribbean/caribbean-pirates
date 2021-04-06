import React from 'react';
import styles from './userPage.module.css';

const TopArrow = ({id}) => {
  const handleClick = () => {
    if (document.getElementById(id).scrollTop > 0) {
      document.getElementById(id).scrollTop -= 250;
    }
    if (document.getElementById(id).scrollTop <= 250) {
      document.getElementById(`${id}arrowTop`).className = styles.hide;
    }
  };

  return (
    <button id="topArrow" className={styles.topArrow} onClick={handleClick} onKeyPress={handleClick} tag={0}>
      <i id={`${id}arrowTop`} className={styles.hide} />
    </button>
  );
};

export default TopArrow;
