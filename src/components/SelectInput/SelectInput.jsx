import React from 'react';
import { useField } from 'formik';

import styles from './styles.module.scss';

import InputWrap from '../InputWrap/InputWrap';

const SelectInput = ({ label, className, children, ...props }) => {
  const [field, meta] = useField(props);

  const wrapOptions = {
    label,
    field,
    meta,
  };

  return (
    <InputWrap className={className} options={wrapOptions}>
      <select className={styles.input} {...field} {...props}>
        {children}
      </select>
    </InputWrap>
  );
};

export default SelectInput;
