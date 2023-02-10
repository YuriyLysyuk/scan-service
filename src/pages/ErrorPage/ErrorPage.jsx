import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

import styles from './styles.module.scss';

import { HOME_URL } from '../../constants';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const ErrorPage = () => {
  document.title = 'Ошибка 404 — СКАН';

  const error = useRouteError();

  console.error(error);

  return (
    <MainLayout>
      <section className={styles.error}>
        <h1>Упс, ошибка {error.status} :(</h1>

        <p className={styles.error__desc}>
          {error.statusText || error.message}
        </p>

        <p className={styles.error__desc}>
          Попробуйте вернуться на <Link to={HOME_URL}>главную</Link>.
        </p>
      </section>
    </MainLayout>
  );
};

export default ErrorPage;
