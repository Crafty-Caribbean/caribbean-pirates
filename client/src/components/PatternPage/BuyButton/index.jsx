import React from 'react';

import styles from './BuyButton.css';

export default ({ isPurchased = false, price, handleClick }) => {
  let label = Number(price) === 0 ? 'Download' : `$${price}`;
  label = isPurchased ? 'Purchased' : label;

  return (
    <button
      className={styles.buyButton}
      onClick={handleClick}
      type="button"
    >
      {label}
    </button>
  );
};
