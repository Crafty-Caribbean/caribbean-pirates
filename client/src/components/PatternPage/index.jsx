import React from 'react';
import styles from './PatternPage.css';
import PatternSummary from './PatternSummary';

class PatternPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(styles);

    return (
      <div className={styles.patternPage}>
        <div className={styles.patternDetailContainer}>
          <div className={styles.patternDetailCard}>
            <div className={styles.imageGallery}>Image Gallery</div>
            <div className={styles.patternSummary}><PatternSummary /></div>
          </div>
        </div>
        <div className={styles.relatedPatterns}>Related Patterns</div>
      </div>
    );
  }
}

export default PatternPage;
