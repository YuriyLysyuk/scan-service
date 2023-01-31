import React from 'react';

import styles from './styles.module.scss';

import MainLayout from '../../layouts/MainLayout/MainLayout';

const SearchResultPage = () => {
  return (
    <MainLayout>
      <section className={styles.result}>
        <h1 className={styles.result__title}>Ищем. Скоро будут результаты</h1>
      </section>
    </MainLayout>
  );
};

export default SearchResultPage;
