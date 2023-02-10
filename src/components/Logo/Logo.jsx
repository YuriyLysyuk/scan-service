import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import logoWhiteSrc from '../../assets/images/logo-white.png';
import logoGradientSrc from '../../assets/images/logo-gradient.png';

const Logo = ({ extClass, color }) => {
  const logoClass = classNames(styles.logo, extClass);

  let logoSrc = '';

  switch (color) {
    case 'white':
      logoSrc = logoWhiteSrc;
      break;

    case 'gradient':
    default:
      logoSrc = logoGradientSrc;
      break;
  }

  return <img className={logoClass} src={logoSrc} alt="Логотип СКАН" />;
};

export default Logo;
