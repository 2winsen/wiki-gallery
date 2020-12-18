import React, { useState } from 'react';
import styles from './App.module.css';
import { IconSearch } from './components/Icon/Icon';
import { createWikipediaApiUrl } from './utils/utils';

function App() {
  const [criteria, setCriteria] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch(createWikipediaApiUrl(criteria));
    const json = await response.json();
    console.log(json);
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setCriteria(event.target.value);
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
      </header>
      <main className={styles.main}>
        <div className={styles.formContainer}>
          <h1>Wiki Gallery</h1>
          <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input className={styles.search} type="text" placeholder="e.g. Toyota" onChange={handleInput} value={criteria} />
            <button className={styles.submit} type="submit"><IconSearch /></button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
