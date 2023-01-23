import React from 'react';

import styles from './styles.module.scss';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import LoginForm from '../../components/LoginForm/LoginForm';
import { ReactComponent as PeopleWithKeySVG } from '../../assets/images/people-with-key.svg';

const LoginPage = () => {
  return (
    <MainLayout>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>
          Для оформления подписки на тариф, необходимо авторизироваться.
        </h1>

        <PeopleWithKeySVG className={styles.hero__img} />

        <LoginForm className={styles.hero__form} />
      </section>
    </MainLayout>
  );
};

export default LoginPage;
