import React from 'react';
import PropTypes from 'prop-types';
import styles from './userPage.module.css';

const DownArrow = ({ id, listLength }) => {
  const handleClick = () => {
    const maxScrollHeight = document.getElementById(id).scrollHeight;
    const equalParts = maxScrollHeight / listLength;
    const hidden = maxScrollHeight - document.getElementById(id).scrollTop - (equalParts * 2);

    // scroll by equal parts since product-card height is random
    if (document.getElementById(id).scrollTop !== maxScrollHeight) {
      document.getElementById(id).scrollTop += equalParts;
    }
     // smooth scroll to end of carousel and hide arrow
    if(hidden < document.getElementById(id).clientHeight) {
      document.getElementById(id).scrollTop += equalParts + (document.getElementById(id).clientHeight - hidden);
      document.getElementById(`${id}arrowDown`).className = styles.hideDownArrow;
    }

    document.getElementById(`${id}arrowTop`).className = styles.arrowTop;
  };

  return (
    <button className={styles.downArrow} onClick={handleClick} onKeyPress={handleClick} tag={0} type="button">
      <i id={`${id}arrowDown`} className={listLength > 1 ? styles.arrowDown : styles.hideDownArrow} />
    </button>
  );
};

export default DownArrow;

DownArrow.propTypes = {
  id: PropTypes.string,
  listLength: PropTypes.number,
};

DownArrow.defaultProps = {
  id: PropTypes.string,
  listLength: PropTypes.number,
};

