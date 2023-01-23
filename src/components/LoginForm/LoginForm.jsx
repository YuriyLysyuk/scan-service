import React from 'react';
import { Formik, Field, Form } from 'formik';
import classNames from 'classnames';

import styles from './styles.module.scss';

import Button from '../Button/Button';

import { ReactComponent as GoogleSVG } from '../../assets/images/google.svg';
import { ReactComponent as FacebookSVG } from '../../assets/images/facebook.svg';
import { ReactComponent as YandexSVG } from '../../assets/images/yandex.svg';

const LoginForm = ({ className }) => {
  const wrapClass = classNames(styles.wrap, className);

  return (
    <div className={wrapClass}>
      <div className={styles.tabs}>
        <a className={styles.tab} href="#">
          Войти
        </a>

        <a className={styles.tab} href="#">
          Зарегистироваться
        </a>
      </div>

      <Formik
        initialValues={{
          phone: '',
          password: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="tel">Логин или номер телефона:</label>
          <Field id="tel" name="tel" type="tel" />

          <label htmlFor="password">Пароль:</label>
          <Field id="password" name="password" type="password" />

          <button type="submit">Войти</button>
        </Form>
      </Formik>

      <a className={styles.restore} href="#">
        Восстановить пароль
      </a>

      <p className={styles.text}>Войти через:</p>

      <div className={styles.socials}>
        <Button size="social">
          <GoogleSVG />
        </Button>

        <Button size="social">
          <FacebookSVG />
        </Button>

        <Button size="social">
          <YandexSVG />
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
