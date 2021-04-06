import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './DisplayMoreOptions.module.css';
import OptionsModal from './OptionsModal';

const DisplayMoreOptions = () => {
  const [showOptions, setOptions] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: '', y: '' });

  const showModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const x = event.clientX;
    const y = event.clientY;
    console.log(x, y);
    setCoordinates({ x, y });
    setOptions(!showOptions);
  };

  return (
    <div
      className={styles.moreOptionsContainer}
      onClick={(event) => showModal(event)}
      onKeyPress={(event) => showModal(event)}
      role="button"
      tabIndex={0}
    >
      {showOptions ? (
        <div className={styles.modalContainer} style={{ top: `${coordinates.y}px`, left: `${coordinates.x}px` }}>
          <OptionsModal showModal={showModal} />
        </div>
      ) : null}
      <button className={styles.moreOptionsButton} type="button" aria-label="image" style={{ height: '32px', width: '32px' }}><svg className="elipses" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" /></svg></button>
    </div>
  );
};

export default DisplayMoreOptions;
