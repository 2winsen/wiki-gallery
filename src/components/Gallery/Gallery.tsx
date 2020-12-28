import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import { Optional } from '../../types/Optional';
import { Page, WikipediaData } from '../../types/WikipediaData';
import { useOnWindowResize } from '../../utils/useOnWindowResize';
import { useWikipediaQuery } from '../../utils/useWikipediaQuery';
import EmptyState from '../EmptyState/EmptyState';
import ErrorState from '../ErrorState/ErrorState';
import LoadingState from '../LoadingState/LoadingState';
import FullSizeItem from './FullSizeItem/FullSizeItem';
import styles from './Gallery.module.css';
import GalleryItem from './GalleryItem/GalleryItem';

function getDataLength(data: Optional<WikipediaData[]>) {
  if (!data) {
    return 0;
  }
  return data.reduce((acc, curr) => acc += curr.pages.length, 0);
}

function hasMoreData(data: Optional<WikipediaData[]>) {
  if (!data) {
    return false;
  }
  const last = data[data.length - 1];
  return Boolean(last.continuePage);
}

function hasVerticalScrollbar() {
  const htmlElement = document.getElementsByTagName('html')[0];
  return htmlElement.scrollHeight > htmlElement.clientHeight;
}

function Gallery() {
  const { criteria } = useParams<{ criteria?: string }>();
  const { data, isLoading, isError, size, setSize } = useWikipediaQuery(criteria || '');
  const dataLength = getDataLength(data);
  const hasMore = hasMoreData(data);
  const fetchMoreData = () => setSize(size + 1);

  // In case screen size is large enough to show 20 items without scrollbar this effect fetches more automatically
  useEffect(() => {
    if (!hasVerticalScrollbar() && hasMore) {
      fetchMoreData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [hasMore]);

  useOnWindowResize(() => {
    if (!hasVerticalScrollbar() && hasMore) {
      fetchMoreData();
    }
  }, [hasMore])

  const [fullSize, setFullSize] = useState<Page>();
  function handleGalleryItemClick(page: Page) {
    setFullSize(page);
  }

  function handleFullSizeItemClick() {
    setFullSize(undefined);
  }

  let content;
  if (isLoading) {
    content = <LoadingState active overlay />
  } else if (isError) {
    content = <ErrorState />
  } else if (data) {
    content = <InfiniteScroll
      dataLength={dataLength}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<div className={styles.loadingContainer}><LoadingState active /></div>}
    >
      {data.map((d, dIndex) => {
        if (d.pages.length) {
          return d.pages.map((p, pIndex) => <GalleryItem key={pIndex} page={p} onClick={handleGalleryItemClick} />)
        }
        return <EmptyState key={dIndex} />;
      })}
    </InfiniteScroll>
  }

  return (
    <div className={styles.container}>
      {fullSize && <FullSizeItem page={fullSize} onClick={handleFullSizeItemClick} />}
      {content}
    </div>
  );
}

export default Gallery;