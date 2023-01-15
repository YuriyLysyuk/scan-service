import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import Logo from '../../components/Logo/Logo';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />

      <input id="menu-toggle" className={styles.toggle} type="checkbox" />

      <label className={styles.hamburger} htmlFor="menu-toggle">
        <span className={styles.line}></span>
      </label>

      <nav className={styles.menu}>
        <a href="/">Главная</a>
        <a href="#">Тарифы</a>
        <a href="#">FAQ</a>
      </nav>

      <div className={styles.user}>
        <a className={styles.signup} href="#">
          Зарегистрироваться
        </a>

        <div className={styles.vr}></div>

        <Button extClass={styles.login} href="#" color="secondary" size="small">
          Войти
        </Button>
      </div>

      <div className={styles.mobile}>
        <Logo color="white" />

        <label className={styles.hamburger} htmlFor="menu-toggle">
          <span className={styles.line}></span>
        </label>

        <nav className={styles.menu}>
          <a href="/">Главная</a>
          <a href="#">Тарифы</a>
          <a href="#">FAQ</a>
        </nav>

        <div className={styles.user}>
          <a className={styles.signup} href="#">
            Зарегистрироваться
          </a>

          <Button
            extClass={styles.login}
            href="#"
            color="secondary"
            size="small"
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
