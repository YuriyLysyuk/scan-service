import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import Button from '../Button/Button';

// ToDo авторизация
const isAuthorized = true;

const UserMenu = ({ extClass }) => {
  const unauthorizedClass = classNames(styles.unauthorized, extClass);
  const authorizedClass = classNames(styles.authorized, extClass);

  return isAuthorized ? (
    <div className={authorizedClass}>Авторизован</div>
  ) : (
    <div className={unauthorizedClass}>
      <a className={styles.signup} href="#">
        Зарегистрироваться
      </a>

      <div className={styles.vr}></div>

      <Button extClass={styles.login} href="#" color="secondary" size="small">
        Войти
      </Button>
    </div>
  );
};

export default UserMenu;
