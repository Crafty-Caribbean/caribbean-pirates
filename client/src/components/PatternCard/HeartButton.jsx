import React from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import axios from 'axios';
import PropTypes from 'prop-types';

import styles from './HeartButton.css';

class HeartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fillHeart: false,
    };
    this.toggleHeart = this.toggleHeart.bind(this);
    // this.handleToggledHeart = this.handleToggledHeart.bind(this);
  }

  toggleHeart() {
    const { fillHeart } = this.state;
    const { setFavorited, id } = this.props;
    this.setState({
      fillHeart: !fillHeart,
    });

    const liked = fillHeart;
    setFavorited({ liked, id });
  }

  // handleToggledHeart() {
  //   if(this.state.fillHeart) {
  //   axios.delete(`/users/${this.props.user}/favorite/${this.props.id}`)
  //   .then((response) => {
  //     axios.get(`/users/${user}`)
  //   })
  // }

  render() {
    const { fillHeart } = this.state;
    return (
      <button className={`heart-button ${styles.heartButton}`} type="button" onClick={this.toggleHeart}>
        {fillHeart ? <HiHeart /> : <HiOutlineHeart />}
      </button>
    );
  }
}

HeartButton.displayName = 'heart-button';

export default HeartButton;

HeartButton.propTypes = {
  id: PropTypes.number,
  setFavorited: PropTypes.func,
};

HeartButton.defaultProps = {
  id: PropTypes.number,
  setFavorited: PropTypes.func,
};
