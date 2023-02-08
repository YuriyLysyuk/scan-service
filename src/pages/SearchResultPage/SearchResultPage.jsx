import React from 'react';
import { useActionData, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

import { SEARCH_URL } from '../../constants';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Button from '../../components/Button/Button';
import Histograms from '../../components/Histograms/Histograms';
import DocumentList from '../../components/DocumentList/DocumentList';
import { ReactComponent as WomanWithLupaSVG } from '../../assets/images/woman-with-lupa.svg';
import { getObjectSearchRequest } from '../../redux/api/requests';

const actionData = {
  endDate: 'Sun Jan 01 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
  includeAnnouncements: 'false',
  includeDigests: 'false',
  includeTechNews: 'false',
  inBusinessNews: 'false',
  inn: '7710-13706-6',
  limit: '100',
  maxFullness: 'false',
  onlyMainRole: 'false',
  onlyWithRiskFactors: 'false',
  startDate: 'Wed Jan 01 2020 00:00:00 GMT+0300 (Москва, стандартное время)',
  tonality: 'any',
};

const SearchResultPage = () => {
  document.title = 'Результаты поиска публикаций о компании по его ИНН — СКАН';

  const navigate = useNavigate();
  // const actionData = useActionData();

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

        <Histograms actionData={actionData} />
      </section>

      <section className={styles.documents}>
        <h2 className={styles.documents__title}>Общая сводка</h2>

        <DocumentList actionData={actionData} />
      </section>
    </MainLayout>
  );
};

export default SearchResultPage;
