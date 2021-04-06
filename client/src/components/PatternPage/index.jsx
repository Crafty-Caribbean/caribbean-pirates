import React from 'react';
import axios from 'axios'
import Login from '../Login';
import AppModal from '../AppModal';

import styles from './PatternPage.css';
import PatternSummary from './PatternSummary';
import CommentsSection from './CommentsSection';

class PatternPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      patterninfo: {},
      pattern_id: undefined,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;

    if (match.params.pattern_id) {
      axios.get(`/api/patterns/${match.params.pattern_id}`)
        .then((res) => this.setState({ patterninfo: res.data }))
        .catch(console.err);

      this.setState({
        pattern_id: match.params.pattern_id,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match && prevProps.match.pattern_id;
    const pattern_id = this.props.match && this.props.match.pattern_id;

    if (prevId !== pattern_id) {
      console.log('componentUpdated, pattern_id changed: ', pattern_id);
      this.setState({
        pattern_id,
      });
    }
  }

  toggleModal(e) {
    e.preventDefault();

    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
    });
  }

  loginUser(data) {
    console.log('login');
    console.log(data);
  }

  signupUser(data) {
    console.log('signup');
    console.log(data);
  }

  render() {
    const {
      showModal,
      pattern_id,
      patterninfo,
    } = this.state;

    return (
      <div className={styles.patternPage}>
        <div className={styles.patternDetailContainer}>
          <div className={styles.patternDetailCard}>
            <div className={styles.imageGallery}>Image Gallery</div>
            <div className={styles.patternSummary}>
              <PatternSummary patterninfo={patterninfo} />
            </div>
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
              <Login
                login={(data) => this.loginUser(data)}
                signup={(data) => this.signupUser(data)}
              />
            </AppModal>
          )
        }
        <div className={styles.commentsSectionHolder}>
          <div className={styles.commentsSection}>
            <CommentsSection />
          </div>
        </div>
      </div>
    );
  }
}

export default PatternPage;
