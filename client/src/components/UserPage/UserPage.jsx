/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import dummyData from './dummyData/dummyData';
import PatternList from './PatternList';
import styles from './userPage.module.css';

const UserPage = () => {
  const [purchased, setPurchased] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [created, setCreated] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [inProgress, setProgress] = useState([]);
  const [refresh, setRefresh] = useState('');
  const [user, setUser] = useState(0);

  const getUserData = (userId) => {
    axios.get(`/api/users/${userId}`)
      .then(({ data }) => {
        console.log(data);
        setPurchased(data.patterns.purchased);
        setFavorites(data.patterns.favorites);
        setCreated(data.patterns.created);
        setCompleted(data.patterns.projects.filter((pattern) => pattern.progress === 100));
        setProgress(data.patterns.projects.filter((pattern) => pattern.progress !== 100));
        setUser(data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateProjectData = (patternId) => {
    if (patternId) {
      axios.put(`/api/users/${user}/projects/${patternId}/progress`, { progress: 100 })
        .then(() => {
          getUserData(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleToggledHeart = () => {

  }

  const { location } = window;
  useEffect(() => {
    console.log(location);
    if (location) {
      getUserData(`${location.pathname.split('/')[3]}`);
    }
  }, []);

  useEffect(() => {
    updateProjectData(refresh);
  }, [refresh]);

  useEffect(() => {
    handleToggledHeart()
  }, [refresh])

  return (
    <div>
      <div className={styles.userPageContainer}>
        <div className="user-static">IM</div>
        <div className={styles.patternsContainer}>
          {/* <PatternList className="Purchased" list={purchased} title="Purchased" setRefresh={setRefresh} user={user} /> */}
          <PatternList className="Favorites" list={favorites} title="Favorites" setRefresh={setRefresh} user={user} />
          <PatternList className="Created" list={created} title="Created" setRefresh={setRefresh} user={user} />
          <PatternList className="In-Progress" list={inProgress} title="In Progress" setRefresh={setRefresh} user={user} />
          <PatternList className="Completed" list={completed} title="Completed" setRefresh={setRefresh} user={user} />
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
