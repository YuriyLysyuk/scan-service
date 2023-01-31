import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const Menu = ({ menu, extClass }) => {
  const menuClass = classNames(styles.menu, extClass);

  return (
    Boolean(menu?.length) && (
      <nav className={menuClass}>
        {menu.map(({ link, title }) => (
          <Link className={styles.item} key={title} to={link}>
            {title}
          </Link>
        ))}
      </nav>
    )
  );
};

export default Menu;
