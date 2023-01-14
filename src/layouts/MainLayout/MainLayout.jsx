import React from 'react';

import styles from './styles.module.scss';

const MainLayout = ({ children }) => {
  return (
    <>
      <header>header</header>

      <main>{children}</main>

      <footer>footer</footer>
    </>
  );
};

export default MainLayout;
