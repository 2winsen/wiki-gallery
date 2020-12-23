import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import { Optional } from '../../types/Optional';
import { WikipediaData } from '../../types/WikipediaData';
import { useWikipediaQuery } from '../../utils/useWikipediaQuery';
import EmptyState from '../EmptyState/EmptyState';
import ErrorState from '../ErrorState/ErrorState';
import LoadingState from '../LoadingState/LoadingState';
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

function Gallery() {
  const { criteria } = useParams<{ criteria?: string }>();
  const { data, isLoading, isError, size, setSize } = useWikipediaQuery(criteria || '');
  let content;
  if (isLoading) {
    content = <LoadingState active overlay />
  } else if (isError) {
    content = <ErrorState />
  } else if (data) {
    content = data.map((d, dIndex) => {
      if (d.pages.length) {
        return d.pages.map((p, pIndex) => <GalleryItem key={pIndex} source={p.thumbnail.source} />)
      }
      return <EmptyState key={dIndex} />;
    });
  }

  const fetchMoreData = () => setSize(size + 1);
  const dataLength = getDataLength(data);
  const hasMore = hasMoreData(data);

  return (
    <div className={styles.container}>
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div className={styles.loadingContainer}><LoadingState active /></div>}
      >
        {content}
      </InfiniteScroll>
    </div>
  );
}

export default Gallery;