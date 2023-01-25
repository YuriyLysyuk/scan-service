import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

import styles from './styles.module.scss';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  const groupClass = classNames(styles.group, {
    [`${styles.error}`]: hasError,
  });

  return (
    <div className={groupClass}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>

      <input className={styles.input} {...field} {...props} />

      {hasError ? <div className={styles.message}>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
