import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';

import Button from '../Button/Button';

import { LOGIN_URL, HOME_URL } from '../../constants';
import { useAuth } from '../../hooks/useAuth';
import { logout } from '../../redux/slices/authSlice';

const UserMenu = ({ extClass }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginClick = () => navigate(LOGIN_URL);

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate(HOME_URL);
  };

  const unauthorizedClass = classNames(styles.unauthorized, extClass);
  const authorizedClass = classNames(styles.authorized, extClass);

  return auth.user ? (
    <div className={authorizedClass}>
      <div className={styles.info}>
        <p className={styles.name}>{auth.user.name}</p>

        <button className={styles.logout} onClick={handleLogoutClick}>
          Выйти
        </button>
      </div>

      <img
        className={styles.avatar}
        src={auth.user.avatar}
        alt={`Аватар ${auth.user.name}`}
      />
    </div>
  ) : (
    <div className={unauthorizedClass}>
      <button className={styles.signup}>Зарегистрироваться</button>

      <div className={styles.vr}></div>

      <Button
        extClass={styles.login}
        onClick={handleLoginClick}
        color="secondary"
        size="small"
      >
        Войти
      </Button>
    </div>
  );
};

export default UserMenu;
