import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { HOME_URL } from '../../constants';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <section className={styles.hero}>
        <h1>Упс :(</h1>

        <p className={styles.hero__desc}>
          Такой страницы не существует. Попробуйте вернуться на{' '}
          <Link to={HOME_URL}>главную</Link>.
        </p>
      </section>
    </MainLayout>
  );
};

export default NotFoundPage;
