import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

// ToDO авторизация
import { IS_AUTORIZED } from '../../constants';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Button from '../../components/Button/Button';

import imgSrcManDashboard from '../../assets/images/man-dashboard.jpg';

const MainPage = () => {
  return (
    <MainLayout>
      <section className={styles.hero}>
        <div className={styles.hero__text}>
          <h1 className={styles.hero__title}>
            Сервис по поиску публикаций о компании по его ИНН
          </h1>

          <p className={styles.hero__desc}>
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </p>

          {IS_AUTORIZED && (
            <Button extClass={styles.hero__btn} href="#" color="primary">
              Запросить данные
            </Button>
          )}
        </div>

        <img className={styles.hero__img} src={imgSrcManDashboard} />
      </section>
    </MainLayout>
  );
};

export default MainPage;
