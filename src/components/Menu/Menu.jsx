import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Menu = ({ menu, extClass }) => {
  const menuClass = classNames(styles.menu, extClass);

  return (
    Boolean(menu?.length) && (
      <nav className={menuClass}>
        {menu.map(({ link, title }) => (
          <a className={styles.item} key={title} href={link}>
            {title}
          </a>
        ))}
      </nav>
    )
  );
};

export default Menu;
