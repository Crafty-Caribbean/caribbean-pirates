/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatternList from './PatternList';
import styles from './userPage.module.css';
import OptionsModal from './OptionsModal';

const UserPage = () => {
  const [purchased, setPurchased] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [created, setCreated] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [inProgress, setProgress] = useState([]);
  const [favorited, setFavorited] = useState({ liked: false, id: '' });
  const [collectListId, setCollectListId] = useState('');
  const [user, setUser] = useState(0);
  const [showOptions, setOptions] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: '', y: '' });
  const [state, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const showModal = (event, id, title) => {
    event.preventDefault();
    event.stopPropagation();
    setCollectListId({ id, list: title });
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    setCoordinates({ x, y });
    setOptions(!showOptions);
  };

  const getUserData = (userId) => {
    axios.get(`/api/users/${userId}`)
      .then(({ data }) => {
        console.log(data);
        setPurchased(data.patterns.purchased || []);
        setFavorites(data.patterns.favorites || []);
        setCreated(data.patterns.created || []);
        setCompleted(data.patterns.projects.filter((pattern) => pattern.progress === 100) || []);
        setProgress(data.patterns.projects.filter((pattern) => pattern.progress !== 100) || []);
        setUser(data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggledHeart = (favoritedObj) => {
    if (favoritedObj.liked) {
      axios.post(`api/users/${user}/favorite/`)
        .then((response) => {
          console.log(response);
          getUserData(user);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios.delete(`api/users/${user}/favorite/${favoritedObj.id}`)
        .then(() => {
          getUserData(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const removePatternCard = (list, id) => {
    let title = list;
    if (title === 'In Progress' || title === 'Completed') {
      title = 'projects';
    }
    title.toLowerCase();
    axios.delete(`api/users/${user}/${title}/${id}`)
      .then(() => {
        getUserData(user);
      });
  };

  const initiateProgress = (list, id) => {
    let title = list;
    axios.post(`/api/users/${user}/projects/`, { pattern_id: id })
      .then(() => {
        if (title === 'In Progress' || title === 'Completed') {
          title = 'projects';
        }
        title.toLowerCase();
        axios.delete(`api/users/${user}/${title}/${id}`)
          .then(() => {
            getUserData(user);
          });
      });
  };

  const { location } = window;
  useEffect(() => {
    console.log(location);
    if (location) {
      getUserData(`${location.pathname.split('/')[3]}`);
    }
  }, []);

  useEffect(() => {
    if (favorited.id) {
      handleToggledHeart(favorited);
    }
  }, [favorited]);

  useEffect(() => {
    getUserData(user);
    setOptions(false);
  }, [state]);

  return (
    <div>
      {showOptions ? (
        <div className={styles.modalContainer} style={{ top: `${coordinates.y}%`, left: `${coordinates.x}%` }}>
          <OptionsModal
            showModal={showModal}
            initiateProgress={initiateProgress}
            removePatternCard={removePatternCard}
            list={collectListId.list}
            id={collectListId.id}
            forceUpdate={forceUpdate}
          />
        </div>
      ) : null}
      <div className={styles.userPageContainer}>
        <div className="user-static">IM</div>
        <div className={styles.patternsContainer}>
          <PatternList forceUpdate={forceUpdate} className="Purchased" list={purchased} title="Purchased" setFavorited={setFavorited} user={user} showModal={showModal} />
          <PatternList forceUpdate={forceUpdate} className="Favorites" list={favorites} title="Favorites" setFavorited={setFavorited} user={user} showModal={showModal} />
          <PatternList forceUpdate={forceUpdate} className="Created" list={created} title="Created" setFavorited={setFavorited} user={user} showModal={showModal} />
          <PatternList forceUpdate={forceUpdate} className="In-Progress" list={inProgress} title="In Progress" setFavorited={setFavorited} user={user} showModal={showModal} />
          <PatternList forceUpdate={forceUpdate} className="Completed" list={completed} title="Completed" setFavorited={setFavorited} user={user} showModal={showModal} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;

UserPage.displayName = 'UserPage';

// handleToggledHeart() {
//   if(this.state.fillHeart) {
//   axios.delete(`/users/${this.props.user}/favorite/${this.props.id}`)
//   .then((response) => {
//     axios.get(`/users/${user}`)
//   })
// }
