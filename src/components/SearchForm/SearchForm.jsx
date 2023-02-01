import React from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { initialValues } from './params';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import SelectInput from '../SelectInput/SelectInput';

import validationSchema from '../../utils/validationSchema';

const SearchForm = ({ className }) => {
  const formClass = classNames(styles.form, className);

  const handleOnSubmit = (values, { setSubmitting }) => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form className={formClass}>
          <TextInput
            label="ИНН компании *"
            id="inn"
            name="inn"
            placeholder="10 цифр"
          />

          <SelectInput label="Тональность:" id="tonality" name="tonality">
            <option value="any">Любая</option>
            <option value="positive">Позитивная</option>
            <option value="negative">Негативная</option>
          </SelectInput>

          <Button
            className={styles.submit}
            type="submit"
            color="primary"
            disabled={!dirty || !isValid || isSubmitting}
          >
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
