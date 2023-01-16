import React from 'react';

import styles from './styles.module.scss';

import logoWhiteURL from '../../assets/images/logo-white.png';
import logoGradientURL from '../../assets/images/logo-gradient.png';

const Logo = ({ extClass, color }) => {
  const logoClass = classNames(styles.logo, extClass);

  let logoSrc = '';

  switch (color) {
    case 'white':
      logoSrc = logoWhiteURL;
      break;

    case 'gradient':
    default:
      logoSrc = logoGradientURL;
      break;
  }

  return (
    <a href="/">
      <img className={logoClass} src={logoSrc} alt="Логотип СКАН" />
    </a>
  );
};

export default Logo;
