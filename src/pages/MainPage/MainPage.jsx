import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

import { TARIFFS, MAIN_SLIDES, SEARCH_URL } from '../../constants';
import { useAuth } from '../../hooks/useAuth';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Button from '../../components/Button/Button';
import MainSlider from '../../components/MainSlider/MainSlider';
import manDashboardSrc from '../../assets/images/man-dashboard.jpg';
import TariffList from '../../components/TariffList/TariffList';

const MainPage = () => {
  document.title = 'Сервис по поиску публикаций о компании по ее ИНН — СКАН';

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <section className={styles.hero}>
        <div className={styles.hero__text}>
          <h1>Сервис по поиску публикаций о компании по ее ИНН</h1>

          <p className={styles.hero__desc}>
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </p>

          {isLoggedIn && (
            <Button
              className={styles.hero__btn}
              color="primary"
              onClick={() => navigate(SEARCH_URL)}
            >
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

        <MainSlider className={styles.whywe__slider} slides={MAIN_SLIDES} />

        <div className={styles.whywe__bg}></div>
      </section>

      <section className={styles.tariff}>
        <h2>Тарифы</h2>

        <TariffList className={styles.tariff__list} tariffs={TARIFFS} />
      </section>
    </MainLayout>
  );
};

export default MainPage;
