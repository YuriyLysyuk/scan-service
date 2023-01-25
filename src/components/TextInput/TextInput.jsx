import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import MaskedInput from 'react-text-mask';

import styles from './styles.module.scss';
import getMaskByInputName from './masks';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  const groupClass = classNames(styles.group, {
    [`${styles.error}`]: hasError,
  });

  const mask = getMaskByInputName(props.name);

  return (
    <div className={groupClass}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>

      <MaskedInput className={styles.input} {...field} {...props} mask={mask} />

      {hasError ? <div className={styles.message}>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
