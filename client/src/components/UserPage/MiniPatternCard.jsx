import React from 'react';
import { Link } from 'react-router-dom';
import HeartButton from './MiniHeartButton';
import styles from './MiniPatternCard.module.css';
import ProgressBar from '../UserPage/ProgressBar';

class PatternCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeart: false,
    };
    this.toggleShowHeart = this.toggleShowHeart.bind(this);
  }

  toggleShowHeart() {
    const { showHeart } = this.state;
    this.setState({
      showHeart: !showHeart,
    });
  }

  render() {
    const { cardWidth, imgSrc, progress, title } = this.props;
    const { showHeart } = this.state;
    return (
      <div className={`pattern-card ${styles.patternCard} `} onMouseEnter={this.toggleShowHeart} onMouseLeave={this.toggleShowHeart} style={{ width: `${cardWidth}px` }}>
        <div className={`image-div ${styles.imageContent}`}>
          <img src={imgSrc} alt="pattern" />
          {showHeart ? <HeartButton /> : ''}
        </div>
        <div className={`pattern-card-footer ${styles.patternCardFooter}`}>
          <div className={`pattern-card-footer-content ${styles.patternCardFooterContent}`}>
            <span className={`pattern-card-footer-title ${styles.patternCardFooterContentTitle}`}>
              <Link to="/patterns/1">
                Title
              </Link>
            </span>
            {/* <span>$Price</span> */}
          </div>
          <div className={`pattern-card-footer-content-tags ${styles.patternCardFooterContentTags}`}>
            <button type="button">Skill level</button>
            <button type="button">Pattern type</button>
          </div>
          {title === 'In Progress' ? <ProgressBar progress={progress} /> : null}
        </div>
      </div>
    );
  }
}

PatternCard.displayName = 'pattern-card';

export default PatternCard;
