import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import Menu from '../Menu/Menu';
import UserMenu from '../UserMenu/UserMenu';
import Limits from '../Limits/Limits';

import { HOME_URL, MENU } from '../../constants';
import Logo from '../../components/Logo/Logo';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={HOME_URL}>
        <Logo extClass={styles.logo} />
      </Link>

      <input id="menu-toggle" className={styles.toggle} type="checkbox" />

      <label className={styles.hamburger} htmlFor="menu-toggle">
        <span className={styles.line}></span>
      </label>

      <Menu extClass={styles.menu} menu={MENU} />

      <Limits />

      <UserMenu extClass={styles.user} />

      <div className={styles.mobile}>
        <Link to={HOME_URL}>
          <Logo color="white" />
        </Link>

        <label className={styles.hamburger} htmlFor="menu-toggle">
          <span className={styles.line}></span>
        </label>

        <Menu extClass={styles.menu} menu={MENU} />

        <UserMenu extClass={styles.user} />
      </div>
    </div>
  );
};

export default Navbar;
