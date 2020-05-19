import React from 'react';
import styles from './ImageNasa.module.css';

export default function ImageNasa({ image }) {
  return (
    <div className={styles.ImageDiv}>
      <img className={styles.Image} src={image} alt="" />
    </div>
  );
}
