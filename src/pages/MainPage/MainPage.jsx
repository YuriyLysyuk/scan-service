import React from 'react';

import styles from './styles.module.scss';

// ToDO авторизация
import { IS_AUTORIZED } from '../../constants';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Button from '../../components/Button/Button';
import MainSlider from '../../components/MainSlider/MainSlider';

import manDashboardSrc from '../../assets/images/man-dashboard.jpg';

const MainPage = () => {
  return (
    <MainLayout>
      <section className={styles.hero}>
        <div className={styles.hero__text}>
          <h1>Сервис по поиску публикаций о компании по его ИНН</h1>

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

        <img
          className={styles.hero__img}
          src={manDashboardSrc}
          alt="Мужик нажимает кнопки"
        />
      </section>

      <section className={styles.whywe}>
        <h2>Почему именно мы</h2>

        <MainSlider className={styles.whywe__slider} />

        <div className={styles.whywe__bg}></div>
      </section>
    </MainLayout>
  );
};

export default MainPage;
