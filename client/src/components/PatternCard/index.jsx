import React from 'react';
import styles from './PatternCard.css';

class PatternCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const cardWidth = 252;
    // make this a prop
    return (
      <div className={`${styles.patternCard} pattern-card`} style={{ width: `${cardWidth}px` }}>
        <div className={`image-div ${styles.imageContent}`}>
          <img src="https://static1.dmc.com/cache/p/a/pat0339_01_880x1322.jpg" alt="pattern" />
        </div>
        <div className={`pattern-card-footer ${styles.patternCardFooter}`}>
          <div className={`pattern-card-footer-content ${styles.patternCardFooterContent}`}>
            <button type="button">Title</button>
            <span>$Price</span>
          </div>
          <div className={`pattern-card-footer-content-tags ${styles.patternCardFooterContentTags}`}>
            <button type="button">Skill level</button>
            <button type="button">Pattern type</button>
          </div>
        </div>

      </div>
    );
  }
}

PatternCard.displayName = 'pattern-card';

export default PatternCard;
