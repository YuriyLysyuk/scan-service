import React from 'react';
import { useActionData, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

import { SEARCH_URL } from '../../constants';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Button from '../../components/Button/Button';
import Histograms from '../../components/Histograms/Histograms';
import { ReactComponent as WomanWithLupaSVG } from '../../assets/images/woman-with-lupa.svg';
import { getObjectSearchRequest } from '../../redux/api/requests';

const SearchResultPage = () => {
  document.title = 'Результаты поиска публикаций о компании по его ИНН — СКАН';

  const navigate = useNavigate();
  const actionData = useActionData();

  return (
    <MainLayout>
      <section className={styles.hero}>
        <div>
          <h1 className={styles.hero__title}>Ищем. Скоро будут результаты</h1>

          <p className={styles.hero__desc}>
            Поиск может занять некоторое время, <br />
            просим сохранять терпение
          </p>

          {!Boolean(actionData) && (
            <Button
              className={styles.hero__btn}
              color="primary"
              onClick={() => navigate(SEARCH_URL)}
            >
              Задать параметры поиска
            </Button>
          )}
        </div>

        <WomanWithLupaSVG className={styles.hero__img} />
      </section>

      <section className={styles.histograms}>
        <h2 className={styles.histograms__title}>Общая сводка</h2>

        <Histograms />
      </section>
    </MainLayout>
  );
};

export default SearchResultPage;
