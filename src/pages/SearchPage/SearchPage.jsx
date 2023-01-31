import React from 'react';

import styles from './styles.module.scss';

import MainLayout from '../../layouts/MainLayout/MainLayout';

const SearchPage = () => {
  return (
    <MainLayout>
      <section className={styles.search}>
        <h1 className={styles.search__title}>
          Найдите необходимые данные в пару кликов.
        </h1>
      </section>
    </MainLayout>
  );
};

export default SearchPage;
