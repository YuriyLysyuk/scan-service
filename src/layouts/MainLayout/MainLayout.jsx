import React from 'react';

import styles from './styles.module.scss';

import Logo from '../../components/Logo/Logo';
import FooterInfo from '../../components/FooterInfo/FooterInfo';

const MainLayout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.row}>
          <Logo />
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.row}>
          <Logo color="white" />

          <FooterInfo />
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
