/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './PatternForm.module.css';
import logo from '../../../dist/images/StitchSaverLogo.png';

class PatternForm extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      title: '',
      price: '',
      skillLevel: '',
      craftType: '',
      images: [],
      description: '',
      userId: user,
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickUploadImage = this.clickUploadImage.bind(this);
    this.submitPattern = this.submitPattern.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handlePhotoChange(e) {
    const { images } = this.state;
    this.setState({
      images: e.target.files,
    }, () => {
      console.log(images);
    });
  }

  submitPattern(event) {
    event.stopPropagation(); event.preventDefault();
    const {
      title, price, skillLevel, craftType, images, userId,
    } = this.state;
    const formData = new FormData();
    console.log(images);
    for (let i = 0; i < images.length; i += 1) {
      if (images[i] !== undefined) {
        console.log(images[i]);
        formData.append('file', images[i]);
      }
    }
    axios.post('/api/uploads', {
      formData,
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(({ data }) => {
        const { forceUpdate } = this.props;
        axios.post('/api/patterns/', {
          title, price, skillLevel, craftType, userId, images: data,
        })
          .then(() => {
            setTimeout(forceUpdate, 200);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  clickUploadImage() {
    document.getElementById('uploadImage').click();
  }

  render() {
    const {
      title, description, skillLevel, craftType,
    } = this.state;
    return (
      <div className={styles.patternFormModal}>
        <img
          className={styles.patternFormlogoImage}
          src={logo}
          alt="StitchSaver Logo"
        />
        <div className={styles.patternFormHeader}>Share A Pattern</div>
        <form className={styles.patternForm}>
          <label className={styles.patternFormLabel}>
            <input className={styles.patternFormInput} name="title" type="text" value={title} onChange={(event) => this.handleChange(event)} placeholder="Enter Title" />
          </label>
          <label className={styles.patternFormLabel}>
            <select className={styles.patternFormInput} value={craftType} name="craftType" onChange={(event) => this.handleChange(event)} placeholder="Craft Type">
              <option value="Crochet">Crochet</option>
              <option value="Knitting">Knitting</option>
            </select>
          </label>
          <label className={styles.patternFormLabel}>
            <select className={styles.patternFormInput} value={skillLevel} name="skillLevel" onChange={(event) => this.handleChange(event)} placeholder="Skill Level">
              <option value="Beginner">Beginner</option>
              <option value="Novice">Novice</option>
              <option value="Intermediete">Intermediete</option>
              <option value="Advance">Advance</option>
              <option value="Expert">Expert</option>
            </select>
          </label>
          <label className={styles.patternFormLabel}>
            <textarea className={styles.patternFormInput} id={styles.patternTextArea} type="textarea" name="description" value={description} placeholder="Add A Description" onChange={(event) => this.handleChange(event)} />
          </label>
          <label className={styles.patternFormLabel}>
            <button className={styles.patternFormImgUpload} type="button" onClick={(event) => { event.stopPropagation(); event.preventDefault(); this.clickUploadImage(); }}>Upload Image</button>
            <input id="uploadImage" className={styles.uploadImage} type="file" name="images" multiple accept="image/*" onChange={(event) => this.handlePhotoChange(event)} />
          </label>
          <button className={styles.patternFormSubmit} type="button" onClick={(event) => this.submitPattern(event)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PatternForm;

PatternForm.propTypes = {
  user: PropTypes.number,
  forceUpdate: PropTypes.func,
};

PatternForm.defaultProps = {
  user: PropTypes.number,
  forceUpdate: PropTypes.func,
};
