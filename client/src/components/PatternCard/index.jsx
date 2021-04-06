import React from 'react';
import { Link } from 'react-router-dom';
import HeartButton from './HeartButton';
import styles from './PatternCard.css';
import ProgressBar from '../UserPage/ProgressBar';
import SkillTag from './SkillTag';
import CraftTag from './CraftTag';

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
    const {
      cardWidth,
      imgSrc,
      progress,
      title,
      skillLevel,
      craftType,
      showTags,
      id,
      setRefresh,
      user
    } = this.props;
    const { showHeart } = this.state;
    return (
      <div className={`pattern-card ${styles.patternCard} `} onMouseEnter={this.toggleShowHeart} onMouseLeave={this.toggleShowHeart} style={{ width: `${cardWidth}px` }}>
        <div className={`image-div ${styles.imageContent}`}>
          <img src={imgSrc} alt="pattern" />
          {showHeart ? <HeartButton id={id} user={user} setRefresh={setRefresh} /> : ''}
        </div>
        <div className={`pattern-card-footer ${styles.patternCardFooter}`}>
          <div className={`pattern-card-footer-content ${styles.patternCardFooterContent}`}>
            <span className={`pattern-card-footer-title ${styles.patternCardFooterContentTitle}`}>
              <Link to="/patterns/1">
                Title
              </Link>
            </span>
            <span>$Price</span>
          </div>
          {showTags !== false
            ? (
              <div className={`pattern-card-footer-content-tags ${styles.patternCardFooterContentTags}`}>
                <SkillTag skillLevel={skillLevel} />
                <CraftTag craftType={craftType} />
              </div>
            ) : ''}
        </div>
        {title === 'In Progress' ? <ProgressBar user={user} setRefresh={setRefresh} id={id} progress={progress} /> : null}
      </div>
    );
  }
}

PatternCard.displayName = 'pattern-card';

export default PatternCard;
