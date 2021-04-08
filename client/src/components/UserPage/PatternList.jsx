/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { FiPlusSquare } from 'react-icons/fi';
import TopArrow from './TopArrow';
import DownArrow from './DownArrow';
import styles from './PatternList.module.css';
import PatternCard from '../PatternCard/index';
import PlaceHolderCard from '../PatternCard/PlaceHolderCard';

const PatternList = ({
  title, list, user, setFavorited, showModal, forceUpdate,
}) => (
  <div>
    <div className={styles.titleHolder}>
      <div className={styles.title}>{title}</div>
      {title === 'Created' ? <div className={styles.createPattern}><FiPlusSquare /></div> : null}
    </div>
    <TopArrow id={title} listLength={list.length} />
    <div id={title} className={styles.patternList}>
      {list.length === 0 ? (
        <PlaceHolderCard
          cardWidth="210px"
          title={title}
        />
      ) : null}
      {list.map((pattern) => (
        <PatternCard
          info={pattern}
          key={pattern.project_id ? pattern.project_id : `${pattern.id}${title}`}
          id={pattern.id}
          projectId={pattern.project_id}
          imgSrc={pattern.images[0]}
          progress={pattern.progress}
          title={title}
          setFavorited={setFavorited}
          user={user}
          showTags
          craftType={pattern.craft_type}
          skillLevel={pattern.difficulty}
          cardWidth="210px"
          name={pattern.title}
          showModal={showModal}
          price={pattern.price.toFixed(2)}
          forceUpdate={forceUpdate}
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
  forceUpdate: PropTypes.func,
  setFavorited: PropTypes.func,
  user: PropTypes.number,
  showModal: PropTypes.func,
};

PatternList.defaultProps = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  forceUpdate: PropTypes.func,
  setFavorited: PropTypes.func,
  user: PropTypes.number,
  showModal: PropTypes.func,
};
