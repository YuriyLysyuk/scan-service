import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';

const cx = classNames.bind(styles);

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noreferrer');
};

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
  newWindow,
}) => {
  const buttonClass = cx({
    btn: true,
    [`${color}`]: color,
    [`${size}`]: size,
    [`${className}`]: className,
  });

  const ButtonTag = Boolean(href) ? 'a' : 'button';
  const buttonType = Boolean(type) ? { type } : {};

  const handleOnBlankClick = (e) => {
    e.preventDefault();

    openInNewTab(href);
  };

  return (
    <ButtonTag
      className={buttonClass}
      href={href}
      disabled={disabled}
      {...buttonType}
      onClick={newWindow ? handleOnBlankClick : onClick}
    >
      {isLoading && <Spinner extClass={styles.spinner} />}

      {children}
    </ButtonTag>
  );
};

export default Button;
