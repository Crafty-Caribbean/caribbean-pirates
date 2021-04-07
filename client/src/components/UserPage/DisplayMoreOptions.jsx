import React from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayMoreOptions.module.css';

const DisplayMoreOptions = ({
  showModal, title, id,
}) => (
  <div
    className={styles.moreOptionsContainer}
    onClick={(event) => showModal(event, id, title)}
    onKeyPress={(event) => showModal(event, id, title)}
    role="button"
    tabIndex={0}
  >
    <button className={styles.moreOptionsButton} type="button" aria-label="image" style={{ height: '32px', width: '32px' }}><svg className="elipses" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" /></svg></button>
  </div>
);

export default DisplayMoreOptions;

DisplayMoreOptions.propTypes = {
  showModal: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
};

DisplayMoreOptions.defaultProps = {
  showModal: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
};
