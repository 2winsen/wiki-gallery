import React from 'react';
import styles from './Layout.module.css';

interface Props {
  children?: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        This website uses material from <a href="https://en.wikipedia.org/w/api.php">Wikipedia API</a>.
      </footer>
    </>
  );
}

export default Layout;
