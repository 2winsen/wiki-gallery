import React from 'react';
import { Link, useParams } from 'react-router-dom';
import EmptyState from '../../components/EmptyState/EmptyState';
import ErrorState from '../../components/ErrorState/ErrorState';
import Gallery from '../../components/Gallery/Gallery';
import SearchForm from '../../components/Icon/SearchForm/SearchForm';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import { useWikipediaQuery } from '../../utils/useWikipediaQuery';
import { constants } from '../../utils/utils';
import styles from './SearchResult.module.css';

function SearchResult() {
  const { criteria } = useParams<{ criteria?: string }>();
  const { data, isLoading, isError } = useWikipediaQuery(criteria || '');
  const { appName } = constants();
  let content;
  if (isLoading) {
    content = <LoadingOverlay active />
  } else if (isError) {
    content = <ErrorState />
  } else if (data) {
    content = <Gallery data={data} />
  } else {
    content = <EmptyState />
  }

  return (
    <div className={styles.container}>
      <LoadingOverlay active={isLoading} />
      <header className={styles.header}>
        <div className={styles.heading}>
          <Link to="/">{appName}</Link>
        </div>
        <div className={styles.formContainer}>
          <SearchForm size="small" value={criteria} />
        </div>
      </header>
      <main className={styles.main}>
        {content}
      </main>
    </div>
  );
}

export default SearchResult;
