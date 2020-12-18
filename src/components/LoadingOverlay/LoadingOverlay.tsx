import React from 'react';
import Spinner from '../Spinner/Spinner';
import styles from './LoadingOverlay.module.css';

interface Props {
  active: boolean;
}

function LoadingOverlay(props: Props) {
  if (props.active) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }
  return <></>;
}

export default LoadingOverlay;
