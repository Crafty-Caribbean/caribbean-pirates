import React from 'react';
import styles from './PatternPage.css';

class PatternPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(styles);

    return (
      <div className={styles.patternPage}>
        <div className={styles.patternDetailContainer}>
          <div className={styles.imageGallery}>Image Gallery</div>
          <div className={styles.patternSummary}>Pattern Summary</div>
        </div>
        <div className={styles.relatedPatterns}>Related Patterns</div>
      </div>
    );
  }
}

export default PatternPage;
