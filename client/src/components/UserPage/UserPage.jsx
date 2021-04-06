/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import dummyData from './dummyData/dummyData';
import PatternList from './PatternList';
import styles from './userPage.module.css';

const UserPage = () => {
  const [purchased, setPurchased] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [created, setCreated] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [inProgress, setProgress] = useState([]);
  const [refresh, setRefresh] = useState('');
  const [favorited, setFavorited] = useState({ liked: false, id: '' });
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

  const handleToggledHeart = (favoritedObj) => {
    if (favoritedObj.liked) {
      axios.post(`/users/${user}/favorite/`)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios.delete(`/users/${user}/favorite/${favoritedObj.id}`)
        .then(() => {
          getUserData(user);
        });
    }
  };

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
    handleToggledHeart(favorited);
  }, [favorited]);

  return (
    <div>
      <div className={styles.userPageContainer}>
        <div className="user-static">IM</div>
        <div className={styles.patternsContainer}>
          {/* <PatternList className="Purchased" list={purchased} title="Purchased" setRefresh={setRefresh} user={user} /> */}
          <PatternList className="Favorites" list={favorites} title="Favorites" setRefresh={setRefresh} setFavorited={setFavorited} user={user} />
          <PatternList className="Created" list={created} title="Created" setRefresh={setRefresh} setFavorited={setFavorited} user={user} />
          <PatternList className="In-Progress" list={inProgress} title="In Progress" setRefresh={setRefresh} setFavorited={setFavorited} user={user} />
          <PatternList className="Completed" list={completed} title="Completed" setRefresh={setRefresh} setFavorited={setFavorited} user={user} />
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

  // handleToggledHeart() {
  //   if(this.state.fillHeart) {
  //   axios.delete(`/users/${this.props.user}/favorite/${this.props.id}`)
  //   .then((response) => {
  //     axios.get(`/users/${user}`)
  //   })
  // }