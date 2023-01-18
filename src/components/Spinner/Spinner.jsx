import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import Icon from '../../components/Icon/Icon';

const Spinner = ({ extClass }) => {
  const spinnerClass = classNames(styles.spinner, extClass);

  return <Icon className={spinnerClass} name="spinner" />;
};

export default Spinner;
