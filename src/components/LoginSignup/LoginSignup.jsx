import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import LoginForm from '../LoginForm/LoginForm';
import Button from '../Button/Button';

import { ReactComponent as GoogleSVG } from '../../assets/images/google.svg';
import { ReactComponent as FacebookSVG } from '../../assets/images/facebook.svg';
import { ReactComponent as YandexSVG } from '../../assets/images/yandex.svg';

const LoginSignup = ({ className }) => {
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
          Зарегистрироваться
        </label>
      </div>

      <LoginForm className={styles.form} />

      <button className={styles.restore}>Восстановить пароль</button>

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

export default LoginSignup;
