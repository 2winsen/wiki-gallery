import React from 'react';
import { IconXCircle } from '../Icon/Icon';
import styles from './ErrorState.module.css';

function ErrorState() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <IconXCircle />
        <h2 className={styles.heading}>Oops a nasty error occurred</h2>
        <span>Most probably our engineers already fixed this issue... anyway try refreshing the page</span>
      </div>
    </div>
  );
}

export default ErrorState;
