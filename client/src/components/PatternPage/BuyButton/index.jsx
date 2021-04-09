import React from 'react';

import styles from './BuyButton.css';

export default ({ price, handleClick }) => {
  const label = Number(price) === 0 ? 'Download' : `$${price}`;
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
