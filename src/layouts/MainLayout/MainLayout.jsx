import React from 'react';

import styles from './styles.module.scss';

import Logo from '../../components/Logo/Logo';

const MainLayout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Logo />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <Logo color="white" />
      </footer>
    </>
  );
};

export default MainLayout;
