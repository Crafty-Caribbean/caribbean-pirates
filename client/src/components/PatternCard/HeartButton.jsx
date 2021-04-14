import React from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import axios from 'axios';
import PropTypes from 'prop-types';

import styles from '../UserPage/userPage.module.css';

class HeartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { id, fillHeart, handleToggledHeart } = this.props;
    return (
      <button type="button" className={`heart-button ${styles.heartButton}`} onClick={(e) => {e.preventDefault(); handleToggledHeart(id, fillHeart)}} >
        {fillHeart ? <HiHeart className={styles.heart}/> : <HiOutlineHeart className={styles.outline}/>}
      </button>
    );
  }
}

HeartButton.displayName = 'heart-button';

export default HeartButton;

// HeartButton.propTypes = {
//   fillHeart: PropTypes.bool,
//   toggleHeart: PropTypes.func,
// };

// HeartButton.defaultProps = {
//   fillHeart: PropTypes.bool,
//   toggleHeart: PropTypes.func,
// };
