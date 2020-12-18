import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IconSearch } from '../../components/Icon/Icon';
import styles from './Search.module.css';

function Search() {
  const [criteria, setCriteria] = useState('');
  const history = useHistory();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    history.push(`/gallery/${encodeURI(criteria)}`);
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setCriteria(event.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Wiki Gallery</h1>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input className={styles.search} type="text" placeholder="e.g. Isaac Newton" onChange={handleInput} value={criteria} />
          <button className={styles.submit} type="submit"><IconSearch /></button>
        </form>
      </div>
    </div>
  );
}

export default Search;
