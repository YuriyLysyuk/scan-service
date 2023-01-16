import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import { ReactComponent as SpinnerSVG } from '../../assets/images/spinner.svg';

const Spinner = ({ extClass }) => {
  const spinnerClass = classNames(styles.spinner, extClass);

  return <SpinnerSVG className={spinnerClass} />;
};

export default Spinner;
