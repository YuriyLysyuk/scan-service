import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './styles.module.scss';

const DatePickerInput = ({ placeholder, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const date = (props.value && new Date(props.value)) || null;

  const onDateChange = (val) => {
    setFieldValue(props.name, val);
  };

  return (
    <DatePicker
      className={styles.input}
      {...props}
      dateFormat="dd.MM.yyyy"
      selected={date}
      onChange={onDateChange}
      placeholderText={placeholder}
      locale="ru"
    />
  );
};

export default DatePickerInput;
