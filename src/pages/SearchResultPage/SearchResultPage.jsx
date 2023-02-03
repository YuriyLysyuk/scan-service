import React from 'react';
import { useActionData } from 'react-router-dom';

import styles from './styles.module.scss';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import { ReactComponent as WomanWithLupaSVG } from '../../assets/images/woman-with-lupa.svg';

const SearchResultPage = () => {
  document.title = 'Результаты поиска публикаций о компании по его ИНН — СКАН';

  const actionData = useActionData();

  console.log(actionData);

  return (
    <MainLayout>
      <section className={styles.hero}>
        <div>
          <h1 className={styles.hero__title}>Ищем. Скоро будут результаты</h1>

          <p className={styles.hero__desc}>
            Поиск может занять некоторое время, <br />
            просим сохранять терпение
          </p>
        </div>

        <WomanWithLupaSVG className={styles.hero__img} />
      </section>
    </MainLayout>
  );
};

export default SearchResultPage;
