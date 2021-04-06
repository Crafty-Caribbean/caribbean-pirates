/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import TopArrow from './TopArrow';
import DownArrow from './DownArrow';
import styles from './PatternList.module.css';
import PatternCard from '../PatternCard/index';

const PatternList = ({
  title, list, setRefresh, user, setFavorited,
}) => (
  <div>
    <div className={styles.title}>{title}</div>
    <TopArrow id={title} />
    <div id={title} className={styles.patternList}>
      {list.map((pattern) => (
        <PatternCard
          info={pattern}
          key={pattern.id}
          id={pattern.id}
          imgSrc={pattern.images[0]}
          progress={pattern.progress}
          title={title}
          setRefresh={setRefresh}
          setFavorited={setFavorited}
          user={user}
          showTags
          craftType={pattern.craft_type}
          skillLevel={pattern.difficulty}
          cardWidth={210}
          name={pattern.title}
        />
      ))}
    </div>
    <DownArrow id={title} listLength={list.length} />
  </div>
);

export default PatternList;

PatternList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  setRefresh: PropTypes.func,
  setFavorited: PropTypes.func,
  user: PropTypes.number,
};

PatternList.defaultProps = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  setRefresh: PropTypes.func,
  setFavorited: PropTypes.func,
  user: PropTypes.number,
};
