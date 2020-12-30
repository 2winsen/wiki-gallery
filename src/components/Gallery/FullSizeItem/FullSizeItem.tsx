
import React, { useEffect, useState } from 'react';
import { Page } from '../../../types/WikipediaData';
import { joinStyles } from '../../../utils/utils';
import { IconShare, IconArrowCircleLeft, IconArrowCircleRight } from '../../Icon/Icon';
import LoadingState from '../../LoadingState/LoadingState';
import styles from './FullSizeItem.module.css';

interface Props {
  page: Page;
  onClick: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

function FullSizeItem({ page, onClick, onNext, onPrevious }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = document.getElementsByTagName('body')[0];
    el.classList.add('noScroll');
    return () => el.classList.remove('noScroll');
  }, []);

  function handleNext(e: React.MouseEvent) {
    e.stopPropagation();
    onNext();
  }

  function handlePrevious(e: React.MouseEvent) {
    e.stopPropagation();
    onPrevious();
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className={styles.container} onClick={onClick}>
      {!loaded && <LoadingState active className={styles.loadingState} />}
      <div className={styles.actionPanel}>
        <a href={page.original.source} target="_blank" rel="noreferrer" className="iconButton"><IconShare /></a>
      </div>
      <span className={joinStyles(styles.navigation, 'iconButton', styles.navigationLeft)} onClick={handlePrevious}><IconArrowCircleLeft /></span>
      <img src={page.original.source} alt={page.original.source} onLoad={() => setLoaded(true)} />
      <span className={joinStyles(styles.navigation, 'iconButton', styles.navigationRight)} onClick={handleNext}><IconArrowCircleRight /></span>
    </div>
  );
}

export default FullSizeItem;