import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import Menu from '../Menu/Menu';
import UserMenu from '../UserMenu/UserMenu';
import Limits from '../Limits/Limits';

import { MENU } from '../../constants';
import Logo from '../../components/Logo/Logo';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo extClass={styles.logo} />

      <input id="menu-toggle" className={styles.toggle} type="checkbox" />

      <label className={styles.hamburger} htmlFor="menu-toggle">
        <span className={styles.line}></span>
      </label>

      <Menu extClass={styles.menu} menu={MENU} />

      <Limits />

      <UserMenu extClass={styles.user} />

      <div className={styles.mobile}>
        <Logo color="white" />

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
