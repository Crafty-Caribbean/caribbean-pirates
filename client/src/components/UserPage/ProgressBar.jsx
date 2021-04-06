/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './ProgressBar.module.css';

const ProgressBar = ({
  progress, setRefresh, id, user,
}) => {
  const [value, setValue] = useState(progress.toString());
  const [showConfirmation, setShowConfirmation] = useState(false);

  const debounce = (func, delay) => {
    let timerId;
    return (...args) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const updateProgress = () => {
    axios.put(`/api/users/${user}/projects/${id}/progress`, { progress: Number(value) })
      .then(() => {
        console.log('success');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendData = debounce(updateProgress, 1000);

  const handleChange = (event) => {
    setValue(event.target.value);
    sendData();
    if (event.target.value === '100') {
      setShowConfirmation(true);
    }
  };

  const completed = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setRefresh(id);
  };

  const cancel = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(progress);
    setValue(progress.toString());
    setShowConfirmation(false);
  };

  return (
    <div className={styles.confirmation}>
      {showConfirmation ? (
        <div className="">
          Complete?
          <button onClick={(event) => completed(event)} type="button">✓</button>
          <button onClick={(event) => cancel(event)} type="button">x</button>
        </div>
      ) : <input className="" type="range" min="0" max="100" value={value} step="1" onChange={(event) => handleChange(event)} />}
    </div>

  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  progress: PropTypes.number,
  setRefresh: PropTypes.func,
  id: PropTypes.number,
  user: PropTypes.number,
};

ProgressBar.defaultProps = {
  progress: PropTypes.number,
  setRefresh: PropTypes.func,
  id: PropTypes.number,
  user: PropTypes.number,
};
