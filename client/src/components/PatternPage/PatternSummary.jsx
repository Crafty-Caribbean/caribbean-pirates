import React from 'react';
import styles from './PatternSummary.css';

class PatternSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.patternSummaryContainer}>
        <div className={styles.header}>
          <div className={styles.favoritebutton}>Favorite Button One Day</div>
        </div>
        <div className={styles.content}>
          <div className={styles.patternName}>Pattern Title</div>
          <div className={styles.authorContainer}>
            <div>Created By</div>
            <button className={styles.authorName} type="button">
              <div className={styles.userpfp}>user pfp</div>
              Author Name
            </button>
          </div>
          <div className={styles.tagContainer}>
            <div className={styles.craftTypeTag}>Tag1</div>
            <div className={styles.skillLevelTag}>Tag2</div>
          </div>
          <div className={styles.descriptionInfo}>Description info</div>
        </div>

        <div className={styles.footer}>
          <div className={styles.priceAndBuy}>
            <div>Price</div>
            <button type="button">Buy Button</button>
          </div>

        </div>
      </div>
    );
  }
}


export default PatternSummary;

