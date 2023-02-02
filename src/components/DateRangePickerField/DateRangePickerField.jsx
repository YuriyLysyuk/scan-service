import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

import styles from './styles.module.scss';

import FieldWrap from '../FieldWrap/FieldWrap';
import DatePickerInput from '../DatePickerInput/DatePickerInput';

const DateRangePickerField = ({ label, className, options }) => {
  const [startField, startMeta] = useField(options.start);
  const [endField, endMeta] = useField(options.end);

  const wrapClass = classNames(styles.wrap, className);

  const fieldWithErrorMeta =
    startMeta.touched && startMeta.error ? startMeta : endMeta;

  const wrapOptions = {
    label,
    field: startField,
    meta: fieldWithErrorMeta,
  };

  return (
    <FieldWrap className={wrapClass} options={wrapOptions}>
      <DatePickerInput
        {...startField}
        {...options.start}
        wrapperClassName={styles.datePickerWrap}
        selectsStart
        startDate={startField.value}
        endDate={endField.value}
      />

      <DatePickerInput
        {...endField}
        {...options.end}
        wrapperClassName={styles.datePickerWrap}
        selectsEnd
        startDate={startField.value}
        endDate={endField.value}
        minDate={startField.value}
      />
    </FieldWrap>
  );
};

export default DateRangePickerField;
