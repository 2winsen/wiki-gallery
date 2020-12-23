import React from 'react';
import { joinStyles } from '../../utils/utils';
import Spinner from '../Spinner/Spinner';
import styles from './LoadingState.module.css';

interface Props {
  active: boolean;
  overlay?: boolean;
}

function LoadingState({ active, overlay }: Props) {
  if (active) {
    return (
      <div className={joinStyles(styles.container, overlay && styles.overlay)}>
        <Spinner />
      </div>
    );
  }
  return <></>;
}

export default LoadingState;
