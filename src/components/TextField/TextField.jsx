import React from 'react';
import { useField } from 'formik';
import MaskedInput from 'react-text-mask';

import styles from './styles.module.scss';
import getMaskByInputName from './masks';

import FieldWrap from '../FieldWrap/FieldWrap';

const TextField = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  const wrapOptions = {
    label,
    field,
    meta,
  };

  const mask = getMaskByInputName(field);

  return (
    <FieldWrap className={className} options={wrapOptions}>
      <MaskedInput
        className={styles.input}
        type="text"
        {...field}
        {...props}
        mask={mask}
      />
    </FieldWrap>
  );
};

export default TextField;
