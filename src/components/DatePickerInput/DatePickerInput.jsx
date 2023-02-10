import React from 'react';
import { useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';

import styles from './styles.module.scss';

import '../../scss/_react-datepicker.scss';

const DatePickerInput = ({ placeholder, ...props }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();

  const date = (props.value && new Date(props.value)) || null;

  const onDateChange = (val) => {
    setFieldTouched(props.name, true);
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
