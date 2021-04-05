import React from 'react';
import Login from '../Login';
import AppModal from '../AppModal';

import styles from './PatternPage.css';
import PatternSummary from './PatternSummary';

class PatternPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    e.preventDefault();

    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
    });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div className={styles.patternPage}>
        <div className={styles.patternDetailContainer}>
          <div className={styles.patternDetailCard}>
            <div className={styles.imageGallery}>Image Gallery</div>
            <div className={styles.patternSummary}><PatternSummary /></div>
          </div>
        </div>
        <div className={styles.relatedPatterns}>
          Related Patterns
          <button type="button" onClick={this.toggleModal}>Modal</button>
        </div>
        {
          showModal
          && (
            <AppModal ref={this.registerModal} outsideClickHandler={this.toggleModal}>
              <Login />
            </AppModal>
          )
        }
      </div>
    );
  }
}

export default PatternPage;
