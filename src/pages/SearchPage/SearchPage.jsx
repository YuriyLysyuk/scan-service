import React from 'react';

import styles from './styles.module.scss';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import SearchForm from '../../components/SearchForm/SearchForm';
import { ReactComponent as ManWithRocketSVG } from '../../assets/images/man-with-rocket.svg';

const SearchPage = () => {
  document.title = 'Найти публикации о компании по ее ИНН — СКАН';

  return (
    <MainLayout>
      <section className={styles.search}>
        <div className={styles.search__text}>
          <h1 className={styles.search__title}>
            Найдите необходимые данные в пару кликов.
          </h1>

          <p className={styles.search__desc}>
            Задайте параметры поиска. <br />
            Чем больше заполните, тем точнее поиск
          </p>
        </div>

        <SearchForm className={styles.search__form} />

        <ManWithRocketSVG className={styles.search__img} />
      </section>
    </MainLayout>
  );
};

export default SearchPage;
