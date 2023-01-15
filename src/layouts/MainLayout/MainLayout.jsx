import React from 'react';

import styles from './styles.module.scss';

import Logo from '../../components/Logo/Logo';

const MainLayout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Logo />
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Logo color="white" />
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
