import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { getIcon } from './icons';

const Icon = ({ className, name }) => {
  const iconClass = classNames(styles.icon, className);
  const { src, alt } = getIcon(name);

  return <img className={iconClass} src={src} alt={alt} />;
};

export default Icon;
