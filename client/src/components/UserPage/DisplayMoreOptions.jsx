import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayMoreOptions.module.css';
import OptionsModal from './OptionsModal';

const DisplayMoreOptions = () => {
  const [showOptions, setOptions] = useState(false);
  return (
    <div className={styles.moreOptionsContainer}>
      {showOptions ? (
        <div className={styles.modalContainer}>
          <OptionsModal />
        </div>
      ) : null}
      <button className={styles.moreOptionsButton} type="button">...</button>
    </div>
  );
};

export default DisplayMoreOptions;
