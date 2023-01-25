import React from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { initialValues } from './params';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import validationSchema from '../../utils/validationSchema';

const LoginForm = ({ className }) => {
  const formClass = classNames(styles.form, className);

  const handleOnSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ dirty, isValid }) => (
        <Form className={formClass}>
          <TextInput label="Логин или номер телефона:" name="tel" type="tel" />

          <TextInput label="Пароль:" name="password" type="password" />

          <Button
            className={styles.submit}
            type="submit"
            color="primary"
            disabled={!dirty || !isValid}
          >
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
