import React from 'react';
import { useField } from 'formik';

import styles from './styles.module.scss';

import FieldWrap from '../FieldWrap/FieldWrap';

const SelectField = ({ label, className, children, ...props }) => {
  const [field, meta] = useField(props);

  const wrapOptions = {
    label,
    field,
    meta,
  };

  return (
    <FieldWrap className={className} options={wrapOptions}>
      <select className={styles.input} {...field} {...props}>
        {children}
      </select>
    </FieldWrap>
  );
};

export default SelectField;
