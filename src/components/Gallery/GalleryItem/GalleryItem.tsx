import React from 'react';
import { Page } from '../../../types/WikipediaData';
import styles from './GalleryItem.module.css';

interface Props {
  page: Page;
  onClick: (page: Page) => void;
}

function GalleryItem({ page, onClick }: Props) {
  return (
    <div className={styles.container} onClick={() => onClick(page)}>
      <img src={page.thumbnail.source} alt={page.thumbnail.source} />
    </div>
  );
}

export default GalleryItem;