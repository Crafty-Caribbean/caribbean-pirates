import React from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import styles from './FavoritesButton.css';

const FavoritesButton = (props) => {
  const { isLiked, size, handleClick } = props;
  const buttonState = isLiked
    ? <HiHeart className={styles.test} size={size} color="pink" />
    : <HiOutlineHeart size={size} color="gray" />;

  return (
    <button className={styles.FavoritesButton} onClick={handleClick} type="button">
      {buttonState}
    </button>
  );
};

export default FavoritesButton;
