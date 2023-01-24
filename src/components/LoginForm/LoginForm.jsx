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
        <input
          className={styles.tab__radio}
          id="login"
          type="radio"
          name="login_tab"
          checked
        />
        <label className={styles.tab} htmlFor="login">
          Войти
        </label>

        <input
          className={styles.tab__radio}
          id="signup"
          type="radio"
          name="login_tab"
        />
        <label className={styles.tab} htmlFor="signup">
          Зарегистироваться
        </label>
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
          <label className={styles.label} htmlFor="tel">
            Логин или номер телефона:
          </label>
          <Field className={styles.input} id="tel" name="tel" type="tel" />

          <label className={styles.label} htmlFor="password">
            Пароль:
          </label>
          <Field
            className={styles.input}
            id="password"
            name="password"
            type="password"
          />

          <Button
            className={styles.submit}
            type="submit"
            color="primary"
            disabled
          >
            Войти
          </Button>
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
