import React from 'react';
import { useField } from 'formik';
import MaskedInput from 'react-text-mask';

import styles from './styles.module.scss';
import getMaskByInputName from './masks';

import InputWrap from '../InputWrap/InputWrap';

const TextInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  const wrapOptions = {
    label,
    field,
    meta,
  };

  const mask = getMaskByInputName(field);

  return (
    <InputWrap className={className} options={wrapOptions}>
      <MaskedInput
        className={styles.input}
        type="text"
        {...field}
        {...props}
        mask={mask}
      />
    </InputWrap>
  );
};

export default TextInput;
