import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { constants } from '../../utils/utils';
import styles from './Search.module.css';

function Search() {
  const { appName } = constants();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{appName}</h1>
        <SearchForm size="large" />
      </div>
    </div>
  );
}

export default Search;
