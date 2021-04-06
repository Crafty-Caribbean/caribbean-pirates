import React from 'react';
import styles from './userPage.module.css';

const DownArrow = ({id, listLength}) => {
  const handleClick = () => {
    const maxScrollHeight = document.getElementById(id).scrollHeight;
    if (document.getElementById(id).scrollTop !== maxScrollHeight) {
      document.getElementById(id).scrollTop += 250;
    }
    document.getElementById(`${id}arrowTop`).className = styles.arrowTop;
  };
  return (
    <button className={styles.downArrow} onClick={handleClick} onKeyPress={handleClick} tag={0}>
      <i id="arrowDown" className={listLength > 3 ? styles.arrowDown : styles.hideDownArrow} />
    </button>
  );
};

export default DownArrow;
