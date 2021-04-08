import React from 'react';
import PropTypes from 'prop-types';
import styles from './userPage.module.css';

const TopArrow = ({ id, listLength}) => {
  const handleClick = () => {
    const maxScrollHeight = document.getElementById(id).scrollHeight;
    const equalParts = maxScrollHeight / listLength;

    // scroll by equal parts since product-card height is random
    if (document.getElementById(id).scrollTop > 0) {
      document.getElementById(id).scrollTop -= equalParts;
      document.getElementById(`${id}arrowDown`).className = styles.arrowDown;
    }
    // smooth scroll to top of carousel and hide arrow
    if (document.getElementById(id).scrollTop < (equalParts * 2)) {
      document.getElementById(id).scrollTop -= document.getElementById(id).scrollTop
      document.getElementById(`${id}arrowTop`).className = styles.hide;
    }
  };

  return (
    <button id="topArrow" className={styles.topArrow} onClick={handleClick} onKeyPress={handleClick} type="button" tag={0}>
      <i id={`${id}arrowTop`} className={styles.hide} />
    </button>
  );
};

export default TopArrow;

TopArrow.propTypes = {
  id: PropTypes.string,
};
TopArrow.defaultProps = {
  id: PropTypes.string,
};
