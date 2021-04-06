/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionsModal.module.css';

const OptionsModal = ({ showModal, coordinates, setDeleted, setStartProgress, list, id }) => (
  <div
    className={styles.modal}
    onClick={(event) => showModal(event)}
    onKeyPress={(event) => showModal(event)}
    role="button"
    tabIndex={0}
  >
    <button type="button" className={styles.startProgress} onClick={() => setStartProgress({ list, id })}> Start Project</button>
    <button type="button" className={styles.delete} onClick={() => setDeleted({ list, id })}>Delete</button>
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
