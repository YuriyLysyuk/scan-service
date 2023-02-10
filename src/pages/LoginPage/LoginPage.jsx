import React from 'react';

import styles from './styles.module.scss';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import LoginSignup from '../../components/LoginSignup/LoginSignup';
import { ReactComponent as PeopleWithKeySVG } from '../../assets/images/people-with-key.svg';

const LoginPage = () => {
  document.title = 'Вход в аккаунт — СКАН';

  return (
    <MainLayout>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>
          Для оформления подписки на тариф, необходимо авторизироваться.
        </h1>

        <PeopleWithKeySVG className={styles.hero__img} />

        <LoginSignup className={styles.hero__form} />
      </section>
    </MainLayout>
  );
};

export default LoginPage;
