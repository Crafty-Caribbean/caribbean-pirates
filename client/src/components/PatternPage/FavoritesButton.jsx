import React from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import styles from './FavoritesButton.css'

class FavoritesButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { isLiked, size, handleClick } = this.props;
    const anythingyouwant = isLiked
      ? <HiHeart className={styles.test} size={size} color="pink" />
      : <HiOutlineHeart size={size} color="gray" />;

    return (
      <button className={styles.FavoritesButton} onClick={handleClick} type="button">
        {anythingyouwant}
      </button>
    );
  }
}

export default FavoritesButton;
