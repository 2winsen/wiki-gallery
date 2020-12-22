import React from 'react';
import styles from './GalleryItem.module.css';

interface Props {
  source: string;
}

function GalleryItem({ source }: Props) {
  return (
    <div className={styles.container}>
      <img key={source} src={source} alt={source} />
    </div>
  );
}

export default GalleryItem;