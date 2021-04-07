import React, { useState } from 'react';

import styles from './ImageGallery.css';

const ImageGallery = ({ images = [] }) => {
  // state tells us what image we're looking at, default 0
  const [selectedImage, setSelectedImage] = useState(0);
  // declare array for thumbnails
  // declare mainImage

  // iterate through images
    // if index === selected
      // create main image element
    // else
      // create thumbnails/button and push into array of thumbnails

  const thumbnails = images.map((url, i) => (
    <img key={`pd-thum${i}`} src={url} className={styles.thumbnail} onClick={() => setSelectedImage(i)}/>
  ));

  return (
    <div className={styles.imageGallery}>
      <img className={styles.mainImage} src={images[selectedImage]} alt="selected pattern preview" />

      <div className={styles.thumbnailContainer}>
        {/* <img className={styles.thumbnail} src='https://media.istockphoto.com/vectors/shroedingers-cat-the-cat-sits-in-a-box-with-a-404-sign-page-or-file-vector-id1150658065'/>
        <img className={styles.thumbnail} src='https://media.istockphoto.com/vectors/shroedingers-cat-the-cat-sits-in-a-box-with-a-404-sign-page-or-file-vector-id1150658065'/>
        <img className={styles.thumbnail} src='https://media.istockphoto.com/vectors/shroedingers-cat-the-cat-sits-in-a-box-with-a-404-sign-page-or-file-vector-id1150658065'/>
        <img className={styles.thumbnail} src='https://media.istockphoto.com/vectors/shroedingers-cat-the-cat-sits-in-a-box-with-a-404-sign-page-or-file-vector-id1150658065'/>
        <img className={styles.thumbnail} src='https://media.istockphoto.com/vectors/shroedingers-cat-the-cat-sits-in-a-box-with-a-404-sign-page-or-file-vector-id1150658065'/> */}
        {thumbnails}
      </div>
    </div>
  );
};

export default ImageGallery;
