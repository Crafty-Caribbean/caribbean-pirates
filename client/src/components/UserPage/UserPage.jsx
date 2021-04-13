/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PatternList from './PatternList';
import styles from './userPage.module.css';
import OptionsModal from './OptionsModal';
import context from '../UserContext';
import profilePic from '../../../dist/images/userImage.png';

const UserPage = ({ match }) => {
  // const [purchased, setPurchased] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favIds, setFavIds] = useState([]);
  const [created, setCreated] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [inProgress, setProgress] = useState([]);
  const [collectListId, setCollectListId] = useState('');
  const [user, setUser] = useState(0);
  const [showOptions, setOptions] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: '', y: '' });
  const [state, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [username, setUsername] = useState('');
  const userContext = useContext(context);

  const showModal = (event, id, title, projectId) => {
    event.preventDefault();
    event.stopPropagation();
    setOptions(false);
    setCollectListId({ id, list: title, projectId });
    setCoordinates({ x: event.clientX + window.scrollX, y: event.clientY + window.scrollY });
    setOptions(!showOptions);
  };

  const getUserData = (userId) => {
    axios({
      method: 'get',
      url: `/api/users/${userId}`,
    })
      .then(({ data }) => {
        console.log(data);
        setFavorites(data.patterns.favorites || []);
        setCreated(data.patterns.created || []);
        // setPurchased(data.patterns.purchased || []);
        setCompleted(data.patterns.projects.filter((pattern) => pattern.progress === 100) || []);
        setProgress(data.patterns.projects.filter((pattern) => pattern.progress !== 100) || []);
        setUser(data.id);
        setUsername(data.username);
        getFavoritesIds(data.patterns.favorites)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFavoritesIds = (favs) => {
    let favIds =  [];
    for (var i = 0; i < favs.length; i++) {
      favIds.push(favs[i].id)
    }
    setFavIds(favIds);
  }

  const handleToggledHeart = (id, fillHeart) => {
    if (fillHeart) {
      axios({
        method: 'delete',
        url: `/api/users/${userContext.currentUser.userId}/favorite/${id}`,
        headers: {
          Authorization: `Bearer ${userContext.token}`,
        },
      })
        .then(() => {
          getUserData(user);
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
        axios({
          method: 'post',
          url: `/api/users/${userContext.currentUser.userId}/favorite/`,
          headers: {
            Authorization: `Bearer ${userContext.token}`,
          },
          data: {
            pattern_id: id,
          },
        })
          .then((response) => {
            getUserData(user)
          })
          .catch((err) => {
            console.log(err);
          });
      }
  };

  const removePatternCard = (list, id, projectId) => {
    let title = list;
    if (title === 'In Progress' || title === 'Completed') {
      title = 'projects';
    }
    let reference;
    if (projectId) {
      reference = projectId;
    } else {
      reference = id;
    }
    title.toLowerCase();
    axios({
      method: 'delete',
      url: `/api/users/${userContext.currentUser.userId}/${title}/${reference}`,
      headers: {
        Authorization: `Bearer ${userContext.token}`,
      },
    })
      .then(() => {
        getUserData(user);
      });
  };

  const initiateProgress = (id) => {
    axios({
      method: 'POST',
      url: `/api/users/${userContext.currentUser.userId}/projects/`,
      headers: {
        Authorization: `Bearer ${userContext.token}`,
      },
      data: {
        pattern_id: id,
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const { location } = window;
    console.log(location.pathname.split('/')[2]);
    if (location) {
      console.log(location.pathname.split('/')[2]);
      getUserData(`${location.pathname.split('/')[2]}`);
    }
  }, []);

  useEffect(() => {
    const { location } = window;
    console.log(location.pathname.split('/')[2]);
    if (location) {
      console.log(location.pathname.split('/')[2]);
      getUserData(`${location.pathname.split('/')[2]}`);
    }
  }, [match]);

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
        <img src={profilePic} className={styles.profilePhoto} alt="profilePic" />
        <span className={styles.userName}>{username}</span>
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
            projectId={collectListId.projectId}
          />
        </div>
      ) : null}
      <div className={styles.userPageContainer}>
        <div className={styles.patternsContainer}>
          {/* {user === userContext.currentUser.userId ? <PatternList forceUpdate={forceUpdate} className="Purchased" list={purchased} title="Purchased" user={user} showModal={showModal} /> : null } */}
          <PatternList className="Favorites" forceUpdate={forceUpdate} list={favorites} title="Favorites" user={user} showModal={showModal} username={username} handleToggledHeart={handleToggledHeart} favoritesList={favIds} />
          <PatternList className="Created" forceUpdate={forceUpdate} list={created} title="Created" user={user} showModal={showModal} username={username} favoritesList={favIds}  handleToggledHeart={handleToggledHeart}/>
          {user === userContext.currentUser.userId ? <PatternList className="In-Progress" forceUpdate={forceUpdate} list={inProgress} title="In Progress" user={user} showModal={showModal} username={username} favoritesList={favIds} handleToggledHeart={handleToggledHeart}/> : null }
          {user === userContext.currentUser.userId ? <PatternList className="Completed" forceUpdate={forceUpdate} list={completed} title="Completed" user={user} showModal={showModal} username={username} favoritesList={favIds}  handleToggledHeart={handleToggledHeart}/> : null }
        </div>
        <div className={styles.footer} />
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

