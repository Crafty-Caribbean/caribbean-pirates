/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionsModal.module.css';

const OptionsModal = ({
  removePatternCard, initiateProgress, list, id,
}) => (
  <div
    className={styles.modal}
  >
    <button type="button" className={styles.startProgress} onClick={() => initiateProgress(list, id)}> Start Project</button>
    <button type="button" className={styles.delete} onClick={() => removePatternCard(list, id)}>Delete</button>
  </div>
);

export default OptionsModal;

OptionsModal.propTypes = {
  removePatternCard: PropTypes.func,
  initiateProgress: PropTypes.func,
  list: PropTypes.string,
  id: PropTypes.number,
};

OptionsModal.defaultProps = {
  removePatternCard: PropTypes.func,
  initiateProgress: PropTypes.func,
  list: PropTypes.string,
  id: PropTypes.number,
};
