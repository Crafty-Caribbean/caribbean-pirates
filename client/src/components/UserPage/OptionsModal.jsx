/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionsModal.module.css';

const OptionsModal = ({ showModal }) => (
  <div className={styles.modal} onMouseLeave={(event) => showModal(event)}>
    <button type="button" className={styles.startProgress}> Start Project</button>
    <button type="button" className={styles.delete}>Delete</button>
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
