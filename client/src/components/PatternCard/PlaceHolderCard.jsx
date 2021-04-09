import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiPlusSm } from 'react-icons/hi';
import styles from './PatternCard.css';
import AppModal from '../AppModal';
import PatternForm from '../PatternForm/PatternForm';

class PlaceHolderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {},
      showForm: false,
    };
    this.onImgLoad = this.onImgLoad.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
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

  toggleForm() {
    const { showForm } = this.state;
    this.setState({
      showForm: !showForm,
    });
  }

  render() {
    const {
      cardWidth, title, user, forceUpdate,
    } = this.props;
    const { dimensions, showForm } = this.state;
    const { height } = dimensions;
    const gridSpan = Math.round((height / 10) + 1.6);
    return (
      <div className={`pattern-card ${styles.patternCard} `} style={{ width: `${cardWidth}`, gridRowEnd: `span ${gridSpan}` }}>
        <div className={`image-div ${styles.imageContent}`}>
          {title === 'Created' ? (
            <div className={`add-pattern ${styles.placeHolder}`} onClick={this.toggleForm} onKeyPress={this.toggleForm} tabIndex={0} role="button" aria-label="none"><HiPlusSm className={`add-pattern ${styles.plusIcon}`} /></div>
          ) : (
            <Link style={{ textDecoration: 'none' }} to="/">
              <div className={`add-pattern ${styles.placeHolder}`}><HiPlusSm className={`add-pattern ${styles.plusIcon}`} /></div>
            </Link>
          )}
        </div>
        {
          showForm
          && (
            <AppModal outsideClickHandler={this.toggleForm}>
              <PatternForm user={user} forceUpdate={forceUpdate} />
            </AppModal>
          )
        }
      </div>
    );
  }
}

export default PlaceHolderCard;

PlaceHolderCard.propTypes = {
  cardWidth: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.number,
  forceUpdate: PropTypes.func,
};

PlaceHolderCard.defaultProps = {
  cardWidth: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.number,
  forceUpdate: PropTypes.func,
};
