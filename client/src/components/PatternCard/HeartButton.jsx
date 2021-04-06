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
  }

  toggleHeart() {
    const { fillHeart } = this.state;
    let liked;
    this.setState({
      fillHeart: !fillHeart,
    });

    liked = this.state.fillHeart;
    this.props.setFavorited({liked: liked, id: this.props.id})
  }

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