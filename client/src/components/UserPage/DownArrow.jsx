import React from 'react';
import PropTypes from 'prop-types';
import styles from './userPage.module.css';

const DownArrow = ({ id, listLength }) => {
  const handleClick = () => {
    const maxScrollHeight = document.getElementById(id).scrollHeight;
    if (document.getElementById(id).scrollTop !== maxScrollHeight) {
      document.getElementById(id).scrollTop += 430;
    }
    document.getElementById(`${id}arrowTop`).className = styles.arrowTop;
  };
  return (
    <button className={styles.downArrow} onClick={handleClick} onKeyPress={handleClick} tag={0} type="button">
      <i id="arrowDown" className={listLength > 2 ? styles.arrowDown : styles.hideDownArrow} />
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
