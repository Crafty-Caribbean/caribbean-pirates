/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FiPlusSquare } from 'react-icons/fi';
import TopArrow from './TopArrow';
import DownArrow from './DownArrow';
import styles from './PatternList.module.css';
import PatternCard from '../PatternCard/index';
import PlaceHolderCard from '../PatternCard/PlaceHolderCard';
import AppModal from '../AppModal';
import PatternForm from '../PatternForm/PatternForm';
import context from '../UserContext';

const PatternList = ({
  title, list, user, setFavorited, showModal, forceUpdate, favoritesList, handleToggledHeart,
}) => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const userContext = useContext(context);
  return (
    <div className={styles.listContainer}>
      {
        showForm && (
          <AppModal outsideClickHandler={toggleForm}>
            <PatternForm user={user} forceUpdate={forceUpdate} toggleForm={toggleForm} />
          </AppModal>
        )
      }
      <div className={styles.titleHolder}>
        <div className={styles.title}>{title}</div>
        {title === 'Created' && userContext.currentUser.userId === user ? <div className={styles.createPattern} onClick={setShowForm} onKeyPress={toggleForm} tabIndex={0} aria-label="none" role="button"><FiPlusSquare /></div> : null}
      </div>
      <TopArrow id={title} listLength={list.length} />
      <div id={title} className={styles.patternList}>
        {list.length === 0 && userContext.currentUser.userId === user ? (
          <PlaceHolderCard
            cardWidth="210px"
            title={title}
            user={user}
            forceUpdate={forceUpdate}
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
            favoritesList={favoritesList}
            handleToggledHeart={handleToggledHeart}
          />
        ))}
      </div>
      <DownArrow id={title} listLength={list.length} />
    </div>
  );
};

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
