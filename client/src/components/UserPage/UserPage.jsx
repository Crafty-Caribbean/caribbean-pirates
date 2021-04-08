/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatternList from './PatternList';
import styles from './userPage.module.css';
import OptionsModal from './OptionsModal';

const UserPage = () => {
  // const [purchased, setPurchased] = useState([]);
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
    setOptions(false);
    setCollectListId({ id, list: title });
    setCoordinates({ x: event.clientX + window.scrollX, y: event.clientY + window.scrollY });
    setOptions(!showOptions);
  };

  const getUserData = (userId) => {
    axios.get(`/api/users/${userId}`)
      .then(({ data }) => {
        console.log(data);
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
    console.log("pattern id", favoritedObj.id)
    console.log("pattern liked?", favoritedObj.liked)
    if (favoritedObj.liked) {
      axios.post(`/users/${user}/favorite/`, {
        pattern_id: favoritedObj.id
       })
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
    // if list is in progress or completed it needs to be projects
    // if purchased dont send this
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
    if (location) {
      getUserData(`${location.pathname.split('/')[2]}`);
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

  const closeModal = () => {
    setOptions(false);
  };

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      if (!unmounted) {
        window.addEventListener('resize', closeModal);
      }
    }, 50);
    return () => {
      unmounted = true;
      window.removeEventListener('resize', closeModal);
    };
  }, []);

  return (
    <div className={styles.app} onClick={() => setOptions(false)} onKeyPress={() => setOptions(false)} role="button" tabIndex={0}>
      <div className={styles.header}>
        <span className={styles.profilePhoto} />
        <span className={styles.userName}>Mika</span>
      </div>
      {showOptions ? (
        <div className={styles.modalContainer} style={{ top: `${coordinates.y}px`, left: `${coordinates.x}px` }}>
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
        <div className={styles.patternsContainer}>
          {/* <PatternList forceUpdate={forceUpdate} className="Purchased" list={purchased} title="Purchased" setFavorited={setFavorited} user={user} showModal={showModal} /> */}
          <PatternList forceUpdate={forceUpdate} className="Favorites" list={favorites} title="Favorites" setFavorited={setFavorited} user={user} showModal={showModal} />
          <PatternList forceUpdate={forceUpdate} className="Created" list={created} title="Created" setFavorited={setFavorited} user={user} showModal={showModal} />
          <PatternList forceUpdate={forceUpdate} className="In-Progress" list={inProgress} title="In Progress" setFavorited={setFavorited} user={user} showModal={showModal} />
          <PatternList forceUpdate={forceUpdate} className="Completed" list={completed} title="Completed" setFavorited={setFavorited} user={user} showModal={showModal} />
        </div>
        <div className={styles.footer}></div>
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
