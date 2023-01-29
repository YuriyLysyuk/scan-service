import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

import Button from '../Button/Button';

// ToDo авторизация
import { LOGIN_URL, IS_AUTORIZED, USER } from '../../constants';

const UserMenu = ({ extClass }) => {
  const navigate = useNavigate();
  const handleLogInClick = () => navigate(LOGIN_URL);

  const unauthorizedClass = classNames(styles.unauthorized, extClass);
  const authorizedClass = classNames(styles.authorized, extClass);

  return IS_AUTORIZED ? (
    <div className={authorizedClass}>
      <div className={styles.info}>
        <p className={styles.name}>{USER.name}</p>

        <a className={styles.logout} href="#">
          Выйти
        </a>
      </div>

      <img
        className={styles.avatar}
        src={USER.avatar}
        alt={`Аватар ${USER.name}`}
      />
    </div>
  ) : (
    <div className={unauthorizedClass}>
      <a className={styles.signup} href="#">
        Зарегистрироваться
      </a>

      <div className={styles.vr}></div>

      <Button
        extClass={styles.login}
        onClick={handleLogInClick}
        color="secondary"
        size="small"
      >
        Войти
      </Button>
    </div>
  );
};

export default UserMenu;
