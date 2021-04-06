import React from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import axios from 'axios';
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
    this.setState({
      fillHeart: !fillHeart,
    });
    // this.handleToggledHeart();
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

// onMouseEnter={this.toggleHeart} onMouseLeave={this.toggleHeart}