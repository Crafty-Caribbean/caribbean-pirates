/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import TopArrow from './TopArrow';
import DownArrow from './DownArrow';
import styles from './PatternList.module.css';
import PatternCard from './MiniPatternCard';
import styled from 'styled-components';

// const PatternStyle = styled.card`
// height: 20vh;
// `;
const PatternList = ({ title, list }) => {
  console.log();

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <TopArrow />
      <div id="patternList" className={styles.patternList}>
        {list.map((pattern) =>
          <PatternCard info={pattern} key={pattern.id} imgSrc="https://static1.dmc.com/cache/p/a/pat0339_01_880x1322.jpg" progress={pattern.progress} title={title} />
        )}
      </div>
      <DownArrow />
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
