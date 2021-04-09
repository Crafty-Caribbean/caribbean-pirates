import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiPlusSm } from 'react-icons/hi';
import styles from './PatternCard.css';

class PlaceHolderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {},
    };
    this.onImgLoad = this.onImgLoad.bind(this);
    this.footer = React.createRef();
  }

  onImgLoad({ target: img }) {
    this.setState({
      dimensions: {
        height: img.offsetHeight + this.footer.current.offsetHeight,
        width: img.offsetWidth,
      },
    });
  }

  render() {
    const {
      cardWidth, title,
    } = this.props;
    const { dimensions } = this.state;
    const { height } = dimensions;
    const gridSpan = Math.round((height / 10) + 1.6);
    return (
      <div className={`pattern-card ${styles.patternCard} `} style={{ width: `${cardWidth}`, gridRowEnd: `span ${gridSpan}` }}>
        <div className={`image-div ${styles.imageContent}`}>
          {title === 'Created' ? (
            <div className={`add-pattern ${styles.placeHolder}`}><HiPlusSm className={`add-pattern ${styles.plusIcon}`} /></div>
          ) : (
            <Link style={{ textDecoration: 'none' }} to="/">
              <div className={`add-pattern ${styles.placeHolder}`}><HiPlusSm className={`add-pattern ${styles.plusIcon}`} /></div>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

PlaceHolderCard.displayName = 'pattern-card';

export default PlaceHolderCard;

PlaceHolderCard.propTypes = {
  cardWidth: PropTypes.string,
  title: PropTypes.string,
};

PlaceHolderCard.defaultProps = {
  cardWidth: PropTypes.string,
  title: PropTypes.string,
}