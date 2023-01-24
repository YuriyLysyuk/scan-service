import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Button = ({ color, size, disabled, href, type, className, children }) => {
  const buttonClass = cx({
    btn: true,
    [`${color}`]: color,
    [`${size}`]: size,
    [`${className}`]: className,
  });

  const ButtonTag = Boolean(href) ? 'a' : 'button';
  const buttonType = Boolean(type) ? { type } : {};

  return (
    <ButtonTag
      className={buttonClass}
      href={href}
      disabled={disabled}
      {...buttonType}
    >
      {children}
    </ButtonTag>
  );
};

export default Button;
