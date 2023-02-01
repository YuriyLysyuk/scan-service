import React from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { initialValues } from './params';

import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import SelectField from '../SelectField/SelectField';

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
          <div className={styles.col}>
            <TextField
              label="ИНН компании *"
              id="inn"
              name="inn"
              placeholder="10 цифр"
            />

            <SelectField label="Тональность:" id="tonality" name="tonality">
              <option value="any">Любая</option>
              <option value="positive">Позитивная</option>
              <option value="negative">Негативная</option>
            </SelectField>

            <TextField
              label="Количество документов в выдаче *"
              id="limit"
              name="limit"
              placeholder="От 1 до 1000"
            />
          </div>

          <div className={styles.col}>
            <div className={styles.submitGroup}>
              <Button
                className={styles.submit}
                type="submit"
                color="primary"
                disabled={!dirty || !isValid || isSubmitting}
              >
                Поиск
              </Button>

              <p className={styles.mark}>* Обязательные к заполнению поля</p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
