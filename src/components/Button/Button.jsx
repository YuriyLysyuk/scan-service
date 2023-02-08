import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';

const cx = classNames.bind(styles);

const Button = ({
  color,
  size,
  disabled,
  isLoading,
  href,
  type,
  className,
  children,
  onClick,
}) => {
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
      onClick={onClick}
    >
      {isLoading && <Spinner extClass={styles.spinner} />}

      {children}
    </ButtonTag>
  );
};

export default Button;
