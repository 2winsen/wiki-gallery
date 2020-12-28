
import React, { useEffect, useState } from 'react';
import { Page } from '../../../types/WikipediaData';
import { IconShare } from '../../Icon/Icon';
import LoadingState from '../../LoadingState/LoadingState';
import styles from './FullSizeItem.module.css';

interface Props {
  page: Page;
  onClick: () => void;
}

function FullSizeItem({ page, onClick }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = document.getElementsByTagName('body')[0];
    el.classList.add('noScroll');
    return () => el.classList.remove('noScroll');
  }, []);

  return (
    <div className={styles.container} onClick={onClick}>
      {!loaded && <LoadingState active className={styles.loadingState} />}
      <div className={styles.actionPanel}>
        <a href={page.original.source} target="_blank" rel="noreferrer"><IconShare /></a>
      </div>
      <img src={page.original.source} alt={page.original.source} onLoad={() => setLoaded(true)} />
    </div>
  );
}

export default FullSizeItem;