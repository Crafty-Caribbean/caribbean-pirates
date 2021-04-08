import React from 'react';
import axios from 'axios';

import AppModal from '../AppModal';
import CommentsSection from './CommentsSection';
import ImageGallery from './ImageGallery';
import Login from '../Login';
import PatternSummary from './PatternSummary';
// import CraftTag from '../PatternCard/CraftTag';

import styles from './PatternPage.css';

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
          this.setState({ patterninfo: res.data });
        })
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

    console.log(this.state.patterninfo)
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
      </div>
    );
  }
}

export default PatternPage;
