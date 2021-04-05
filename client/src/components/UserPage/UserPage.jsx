/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import dummyData from './dummyData/dummyData';
import PatternList from './PatternList';
import styles from './userPage.module.css';

const UserPage = () => {
  // console.log(dummyData);
  const [purchased, setPurchased] = useState(dummyData.patterns.purchased);
  const [favorites, setFavorites] = useState(dummyData.patterns.favorites);
  const [created, setCreated] = useState(dummyData.patterns.created);
  const [completed, setCompleted] = useState(
    dummyData.patterns.projects.filter((pattern) => pattern.progress === 100),
  );
  const [inProgress, setProgress] = useState(
    dummyData.patterns.projects.filter((pattern) => pattern.progress !== 100),
  );

  const getUserData = (userId) => {
    console.log(userId);
    // axios.get(`/users/${userId}`)
    //   .then(({ data }) => {
    //     setPurchased(data.patterns.purchased);
    //     setFavorites(data.patterns.favorites);
    //     setCreated(data.owned);
    //     setCompleted(data.patterns.projects.filter((pattern) => pattern.progress === 100));
    //     setProgress(data.patterns.projects.filter((pattern) => pattern.progress !== 100));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const { location } = window;
  useEffect(() => {
    if (location) {
      getUserData(`${location.pathname.split('/')[2]}`);
    }
  }, []);

  return (
    <div>
    <div className={styles.userPageContainer}>
      <div className="user-static">IM</div>
      <div className={styles.patternsContainer}>
        <PatternList className="Purchased" list={purchased} title="Purchased" />
        <PatternList className="Favorites" list={favorites} title="Favorites" />
        <PatternList className="Created" list={created} title="Created" />
        <PatternList className="In-Progress" list={inProgress} title="In Progress" />
        <PatternList className="Completed" list={completed} title="Completed" />
      </div>
    </div>
    </div>
  );
};

export default UserPage;

UserPage.displayName = 'UserPage';

// UserPage.propTypes = {
//   userId: PropTypes.number,
// };

// UserPage.defaultProps = {
//   userId: PropTypes.number,
// };
