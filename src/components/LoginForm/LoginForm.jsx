import React from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';
import * as Yup from 'yup';

import styles from './styles.module.scss';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

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
          defaultChecked
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
          tel: '',
          password: '',
        }}
        validationSchema={Yup.object({
          tel: Yup.string().required('Введите логин или номер телефона'),
          password: Yup.string().required('Введите пароль'),
        })}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ dirty, isValid }) => (
          <Form className={styles.form}>
            <TextInput
              label="Логин или номер телефона:"
              name="tel"
              type="tel"
            />

            <TextInput label="Пароль:" name="password" type="password" />

            <Button
              className={styles.submit}
              type="submit"
              color="primary"
              disabled={!dirty || !isValid}
            >
              Войти
            </Button>
          </Form>
        )}
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
