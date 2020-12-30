import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';
import SearchForm from '../../components/SearchForm/SearchForm';
import { constants } from '../../utils/utils';
import styles from './SearchResult.module.css';

function SearchResult() {
  const { criteria } = useParams<{ criteria?: string }>();
  const { appName } = constants();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.heading}>
          <Link to="/"><h2>{appName}</h2></Link>
        </div>
        <div className={styles.headerFormContainer}>
          <SearchForm size="small" value={criteria} />
        </div>
      </header>
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default SearchResult;
