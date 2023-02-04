import React from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';
import { useSubmit } from 'react-router-dom';

import styles from './styles.module.scss';
import { initialValues, dateRangeOptions } from './params';

import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import SelectField from '../SelectField/SelectField';
import Checkbox from '../Checkbox/Checkbox';
import DateRangePickerField from '../DateRangePickerField/DateRangePickerField';

import { SEARCH_RESULT_URL } from '../../constants';
import { searchValidationSchema } from '../../utils/validation/schema';

const SearchForm = ({ className }) => {
  const formClass = classNames(styles.form, className);
  const submit = useSubmit();

  const handleOnSubmit = async (values, { setSubmitting }) => {
    submit(values, {
      method: 'post',
      action: SEARCH_RESULT_URL,
    });

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={searchValidationSchema}
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

            <DateRangePickerField
              label="Диапазон поиска *"
              options={dateRangeOptions}
            />
          </div>

          <div className={styles.col}>
            <Checkbox label="Признак максимальной полноты" name="maxFullness" />

            <Checkbox
              label="Упоминания в бизнес-контексте"
              name="inBusinessNews"
            />

            <Checkbox label="Главная роль в публикации" name="onlyMainRole" />

            <Checkbox
              label="Публикации только с риск-факторами"
              name="onlyWithRiskFactors"
            />

            <Checkbox
              label="Включать технические новости рынков"
              name="includeTechNews"
            />

            <Checkbox
              label="Включать анонсы и календари"
              name="includeAnnouncements"
            />

            <Checkbox label="Включать сводки новостей" name="includeDigests" />

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
