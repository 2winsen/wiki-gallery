import React, { useEffect, useState } from 'react';
import styles from './ScrollTop.module.css';
import { IconArrowUp } from '../Icon/Icon';

const TOP_THRESHOLD = 70;
const isScrolledPastThreshold = () => document.documentElement.scrollTop > TOP_THRESHOLD;

function ScrollTop() {
  const [visible, setVisible] = useState(isScrolledPastThreshold());

  useEffect(() => {
    const onScroll = () => setVisible(isScrolledPastThreshold());
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTopHandler = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {visible && <button className={styles.button} onClick={scrollTopHandler}><IconArrowUp /></button>}
    </>
  )
}

export default ScrollTop;
