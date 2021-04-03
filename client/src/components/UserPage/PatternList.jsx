/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import TopArrow from './TopArrow';
import DownArrow from './DownArrow';
import styles from './userPage.module.css';
import PatternCard from '../PatternCard/index';

const PatternList = ({ title, list }) => {
  console.log();
  return (
    <div>
      <div>{title}</div>
      <div className={styles.patternsContainer}>
        {list.map((pattern) => <PatternCard info={pattern} key={pattern.id} />)}
        <TopArrow />
        <DownArrow />
      </div>
    </div>
  );
};

export default PatternList;

PatternList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};

PatternList.defaultProps = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};
