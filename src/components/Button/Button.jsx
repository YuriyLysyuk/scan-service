import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Button = ({ color, size, disabled, children }) => {
  const btnClass = cx({
    btn: true,
    [`${color}`]: color,
    [`${size}`]: size,
  });

  return (
    <button className={btnClass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
