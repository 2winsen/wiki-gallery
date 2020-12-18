import React from 'react';
import { WikipediaData } from '../../types/WikipediaData';
import styles from './Gallery.module.css';

interface Props {
  data: WikipediaData;
}

function Gallery(props: Props) {
  return (
    <div className={styles.container}>
      {JSON.stringify(props.data, null, 2)}
    </div>
  );
}

export default Gallery;
