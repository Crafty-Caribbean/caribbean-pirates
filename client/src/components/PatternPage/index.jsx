import React from 'react';
import axios from 'axios';

import ImageGallery from './ImageGallery';
import PatternSummary from './PatternSummary';
// import CraftTag from '../PatternCard/CraftTag';

import styles from './PatternPage.css';

import UserContext from '../UserContext.js';

class PatternPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      patterninfo: {
        id: '',
        images: ['https://media.istockphoto.com/vectors/shroedingers-cat-the-cat-sits-in-a-box-with-a-404-sign-page-or-file-vector-id1150658065'],
        name: '',
        author: {
          id: '',
          profile_pic: '',
          username: '',
        },
        skill_level: '',
        craft_type: '',
        description: '',
        price: '',
        comments: [],
      },
      pattern_id: undefined,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;

    if (match.params.pattern_id) {
      axios.get(`/api/patterns/${match.params.pattern_id}`)
        .then((res) => {
          this.setState({
            patterninfo: res.data,
            pattern_id: match.params.pattern_id,
          });
        })
        .catch(console.err);

      // this.setState({
      // });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { match } = this.props;

      if (match.params.pattern_id) {
        axios.get(`/api/patterns/${match.params.pattern_id}`)
          .then((res) => {
            this.setState({
              patterninfo: res.data,
              pattern_id: match.params.pattern_id,

            });
          })
          .catch(console.err);

        // this.setState({
        // });
      }
    }
  }

  toggleModal(e) {
    e.preventDefault();

    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
    });
  }

  render() {
    const { patterninfo } = this.state;

    // console.log('patternpage: ', this.context);

    return (
      <div className={styles.patternPage}>
        <div className={styles.patternDetailContainer}>
          <div className={styles.patternDetailCard}>
            <ImageGallery images={patterninfo.images} />
            <div className={styles.patternSummary}>
              <PatternSummary patterninfo={patterninfo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PatternPage.contextType = UserContext;

export default PatternPage;
