import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { joinStyles } from '../../../utils/utils';
import { IconSearch } from '../Icon';
import styles from './SearchForm.module.css';

interface Props {
  size: 'large' | 'small';
  value?: string;
}

function SearchForm(props: Props) {
  const [criteria, setCriteria] = useState(props.value || '');
  const history = useHistory();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    history.push(`/result/${encodeURI(criteria)}`);
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setCriteria(event.target.value);
  }

  return (
    <form className={joinStyles(styles.searchForm, styles[props.size])} onSubmit={handleSubmit}>
      <input className={styles.search} type="text" placeholder="e.g. Isaac Newton" onChange={handleInput} value={criteria} />
      <button className={styles.submit} type="submit"><IconSearch /></button>
    </form>
  );
}

export default SearchForm;
