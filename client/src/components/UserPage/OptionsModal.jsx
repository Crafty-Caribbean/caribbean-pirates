/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionsModal.module.css';

const OptionsModal = ({
  showModal, removePatternCard, initiateProgress, list, id, forceUpdate, projectId,
}) => (
  <div
    className={styles.modal}
    onClick={(event) => { showModal(event); setTimeout(forceUpdate, 200); }}
    onKeyPress={(event) => { showModal(event); setTimeout(forceUpdate, 200); }}
    role="button"
    tabIndex={0}
  >
    {list === 'In Progress' ? null : <button type="button" className={styles.startProgress} onClick={() => initiateProgress(id)}> Start Project</button>}
    {list === 'Favorites' ? null : <button type="button" className={styles.delete} onClick={() => removePatternCard(list, id, projectId)}>Delete</button>}
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
