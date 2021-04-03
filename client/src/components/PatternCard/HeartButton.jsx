import React from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
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
    this.setState({
      fillHeart: !fillHeart,
    });
  }

  render() {
    const { fillHeart } = this.state;
    return (
      <button className={`heart-button ${styles.heartButton}`} onMouseEnter={this.toggleHeart} onMouseLeave={this.toggleHeart} type="button">
        {fillHeart ? <HiHeart /> : <HiOutlineHeart />}
      </button>
    );
  }
}

HeartButton.displayName = 'heart-button';

export default HeartButton;
