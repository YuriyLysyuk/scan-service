import React from 'react';

import styles from './styles.module.scss';

const MainLayout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>header</header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>footer</footer>
    </>
  );
};

export default MainLayout;
