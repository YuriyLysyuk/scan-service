import React from 'react';

import styles from './styles.module.scss';

import MainLayout from '../../layouts/MainLayout/MainLayout';

const SearchResultPage = () => {
  document.title = 'Результаты поиска публикаций о компании по его ИНН — СКАН';

  return (
    <MainLayout>
      <section className={styles.result}>
        <h1 className={styles.result__title}>Ищем. Скоро будут результаты</h1>
      </section>
    </MainLayout>
  );
};

export default SearchResultPage;
