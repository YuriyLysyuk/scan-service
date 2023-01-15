import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Button = ({ color, size, disabled, href, extClass, children }) => {
  const btnClass = cx({
    btn: true,
    [`${color}`]: color,
    [`${size}`]: size,
    [`${extClass}`]: extClass,
  });

  const ButtonTag = Boolean(href) ? 'a' : 'button';

  return (
    <ButtonTag className={btnClass} href={href} disabled={disabled}>
      {children}
    </ButtonTag>
  );
};

export default Button;
