import React from 'react';
import axios from 'axios'
import Login from '../Login';
import AppModal from '../AppModal';

import styles from './PatternPage.css';
import PatternSummary from './PatternSummary';

class PatternPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      patterninfo: {},
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    // console.log('hello');
    axios.get('/api/patterns/2')
    .then((res) => {this.setState({patterninfo: res.data})})
    .catch((err) => console.log(err));
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
            <div className={styles.patternSummary}><PatternSummary patterninfo={this.state.patterninfo}/></div>
          </div>
        </div>
        <div className={styles.relatedPatterns}>
          Related Patterns
          <button type="button" onClick={this.toggleModal}>Modal</button>
        </div>
        {
          showModal
          && (
            <AppModal outsideClickHandler={this.toggleModal}>
              <Login />
            </AppModal>
          )
        }
      </div>
    );
  }
}

export default PatternPage;
