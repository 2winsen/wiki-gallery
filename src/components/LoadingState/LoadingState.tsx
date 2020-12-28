import React from 'react';
import { joinStyles } from '../../utils/utils';
import Spinner from '../Spinner/Spinner';
import styles from './LoadingState.module.css';

interface Props {
  active: boolean;
  overlay?: boolean;
  className?: string;
}

function LoadingState({ active, overlay, className }: Props) {
  if (active) {
    return (
      <div className={joinStyles(styles.container, overlay && styles.overlay, className)}>
        <Spinner />
      </div>
    );
  }
  return <></>;
}

export default LoadingState;
