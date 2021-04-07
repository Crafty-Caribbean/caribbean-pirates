/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionsModal.module.css';

const OptionsModal = ({
  showModal, removePatternCard, initiateProgress, list, id, forceUpdate,
}) => (
  <div
    className={styles.modal}
    onClick={(event) => { showModal(event); setTimeout(forceUpdate, 50); }}
    onKeyPress={(event) => showModal(event)}
    role="button"
    tabIndex={0}
  >
    <button type="button" className={styles.startProgress} onClick={() => initiateProgress(list, id)}> Start Project</button>
    <button type="button" className={styles.delete} onClick={() => removePatternCard(list, id)}>Delete</button>
  </div>
);

export default OptionsModal;

OptionsModal.propTypes = {
  showModal: PropTypes.func,
};

OptionsModal.defaultProps = {
  showModal: null,
};

PropTypes.checkPropTypes(OptionsModal.propTypes, OptionsModal.propTypes.showModal, 'showModal', 'OptionsModal');
