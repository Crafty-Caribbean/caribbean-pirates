import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PatternSummary.css';
import HeartButton from '../PatternCard/HeartButton';

class PatternSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.patternSummaryContainer}>
        <div className={styles.header}>
          <div className={styles.favoritebutton}>
            <HeartButton />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.patternName}>{this.props.patterninfo.name}</div>
          <div className={styles.authorContainer}>
            <button className={styles.authorName} type="button">
              <Link to={`/user/${this.props.patterninfo.author.id}`}>
                <img className={styles.userpfp} src="data:image/jpeg;base64,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" alt="profile" />
              </Link>
              {/* PatternLover123 */}
            </button>
            <p>
              <Link to={`/user/${this.props.patterninfo.author.id}`} className={styles.authorLink}>
                {this.props.patterninfo.author.username}
              </Link>
            </p>

          </div>
          <div className={styles.tagContainer}>
            <div className={styles.craftTypeTag}>{this.props.patterninfo.craft_type}</div>
            <div className={styles.skillLevelTag}>{this.props.patterninfo.skill_level}</div>
          </div>
          <div className={styles.descriptionInfo}>
            <p className={styles.descriptionParagraph}>
              {this.props.patterninfo.description}
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.priceAndBuy}>
            <div className={styles.priceText}>${this.props.patterninfo.price}</div>
            <button type="button" className={styles.buybutton}>Buy</button>
          </div>

        </div>
      </div>
    );
  }
}

export default PatternSummary;


