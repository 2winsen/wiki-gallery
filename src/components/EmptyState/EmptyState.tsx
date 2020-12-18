import React from 'react';
import { IconDocumentSearch } from '../Icon/Icon';
import styles from './EmptyState.module.css';

function EmptyState() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <IconDocumentSearch />
        <h2>No results found</h2>
        <span>Try adjusting your search criteria</span>
      </div>
    </div>
  );
}

export default EmptyState;
