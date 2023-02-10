import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const FieldWrap = ({ className, options, children }) => {
  const { label, field, meta } = options;
  const hasError = meta.touched && meta.error;

  const groupClass = classNames(styles.group, className, {
    [`${styles.error}`]: hasError,
  });

  return (
    <div className={groupClass}>
      <label className={styles.label} htmlFor={field.id || field.name}>
        {label}
      </label>

      {children}

      {hasError ? <div className={styles.message}>{meta.error}</div> : null}
    </div>
  );
};

export default FieldWrap;
