import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeartButton from './HeartButton';
import styles from './PatternCard.css';
import ProgressBar from '../UserPage/ProgressBar';
import SkillTag from './SkillTag';
import CraftTag from './CraftTag';
import DisplayMoreOptions from '../UserPage/DisplayMoreOptions';

class PatternCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeart: false,
      dimensions: {},
      fillHeart: false,
    };
    this.onImgLoad = this.onImgLoad.bind(this);
    this.toggleShowHeart = this.toggleShowHeart.bind(this);
    this.footer = React.createRef();
    this.toggleHeart = this.toggleHeart.bind(this);
  }

  onImgLoad({ target: img }) {
    this.setState({
      dimensions: {
        height: img.offsetHeight + this.footer.current.offsetHeight,
        width: img.offsetWidth,
      },
    });
  }

  toggleHeart() {
    const { fillHeart } = this.state;
    this.setState({
      fillHeart: !fillHeart,
    });
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
      user,
      name,
      showModal,
      price,
      forceUpdate,
      projectId,
    } = this.props;
    const { dimensions, showHeart, fillHeart } = this.state;
    const { height } = dimensions;
    const gridSpan = Math.round((height / 10) + 1.6);
    return (
      <div className={`pattern-card ${styles.patternCard} `} onMouseEnter={this.toggleShowHeart} onMouseLeave={this.toggleShowHeart} style={{ width: `${cardWidth}`, gridRowEnd: `span ${gridSpan}` }}>
        <div className={`image-div ${styles.imageContent}`}>
          {title === 'In Progress' ? <ProgressBar user={user} id={projectId} progress={progress} forceUpdate={forceUpdate} /> : null}
          {title ? (
            <DisplayMoreOptions
              showModal={showModal}
              id={id}
              projectId={projectId}
              title={title}
              forceUpdate={forceUpdate}
            />
          ) : null}
          <Link to={`/patterns/${id}`}>
            <img onLoad={this.onImgLoad} src={imgSrc} alt="pattern" />
          </Link>
          {showHeart ? <HeartButton id={id} toggleHeart={this.toggleHeart} fillHeart={fillHeart} /> : ''}
        </div>
        <div className={`pattern-card-footer ${styles.patternCardFooter}`} ref={this.footer}>
          <div className={`pattern-card-footer-content ${styles.patternCardFooterContent}`}>
            <span className={`pattern-card-footer-title ${styles.patternCardFooterContentTitle}`}>
              <Link to={`/patterns/${id}`}>
                {name.toUpperCase()}
              </Link>
            </span>
            <span>{ price !== '0.00' ? `$${price}` : 'Free'}</span>
          </div>
          {showTags !== false
            ? (
              <div className={`pattern-card-footer-content-tags ${styles.patternCardFooterContentTags}`}>
                <SkillTag skillLevel={skillLevel} />
                <CraftTag craftType={craftType} />
              </div>
            ) : ''}
        </div>
      </div>
    );
  }
}

PatternCard.displayName = 'pattern-card';

export default PatternCard;

PatternCard.propTypes = {
  cardWidth: PropTypes.string,
  imgSrc: PropTypes.string,
  progress: PropTypes.null || PropTypes.number,
  title: PropTypes.string,
  skillLevel: PropTypes.string,
  craftType: PropTypes.string,
  showTags: PropTypes.bool,
  id: PropTypes.number,
  user: PropTypes.number,
  name: PropTypes.string,
  showModal: PropTypes.func,
  price: PropTypes.number,
  forceUpdate: PropTypes.func,
  projectId: PropTypes.null || PropTypes.number,
};

PatternCard.defaultProps = {
  cardWidth: PropTypes.string,
  imgSrc: PropTypes.string,
  progress: PropTypes.null,
  title: PropTypes.string,
  skillLevel: PropTypes.string,
  craftType: PropTypes.string,
  showTags: PropTypes.bool,
  id: PropTypes.number,
  user: PropTypes.number,
  name: PropTypes.string,
  showModal: PropTypes.func,
  price: PropTypes.number,
  forceUpdate: PropTypes.func,
  projectId: PropTypes.null,
};
