import React, { useState } from 'react';

import styles from './ImageGallery.css';

const ImageGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const thumbnails = images.map((url, i) => (
    <img key={`pd-thum${i}`} src={url} className={styles.thumbnail} onClick={() => setSelectedImage(i)}/>
  ));

  return (
    <div className={styles.imageGallery}>
      <img className={styles.mainImage} src={images[selectedImage]} alt="selected pattern preview" />
      <div className={styles.thumbnailContainer}>
        {thumbnails}
      </div>
    </div>
  );
};

export default ImageGallery;
