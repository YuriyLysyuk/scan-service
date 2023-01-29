import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import Button from '../Button/Button';

// ToDo авторизация

const UserMenu = ({ extClass }) => {
  const unauthorizedClass = classNames(styles.unauthorized, extClass);
  const authorizedClass = classNames(styles.authorized, extClass);

  return IS_AUTORIZED ? (
    <div className={authorizedClass}>
      <div className={styles.info}>
        <p className={styles.name}>{user.name}</p>

        <a className={styles.logout} href="#">
          Выйти
        </a>
      </div>

      <img
        className={styles.avatar}
        src={user.avatar}
        alt={'Аватар ${user.name}'}
      />
    </div>
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
