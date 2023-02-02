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

  const wrapOptions = {
    label,
    field: startField,
    meta: startMeta,
  };

  return (
    <FieldWrap className={wrapClass} options={wrapOptions}>
      <DatePickerInput
        wrapperClassName={styles.datePickerWrap}
        {...startField}
        {...options.start}
      />

      <DatePickerInput
        wrapperClassName={styles.datePickerWrap}
        {...endField}
        {...options.end}
      />
    </FieldWrap>
  );
};

export default DateRangePickerField;
