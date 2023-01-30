import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { initialValues } from './params';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import { HOME_URL } from '../../constants';
import validationSchema from '../../utils/validationSchema';
import { useAccountLoginMutation } from '../../redux/api/accountAPI';

const LoginForm = ({ className }) => {
  const [accountLogin, { isLoading, isError, error, isSuccess }] =
    useAccountLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(HOME_URL);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const formClass = classNames(styles.form, className);

  const handleOnSubmit = (values, { setSubmitting }) => {
    accountLogin(values).then(() => {
      setSubmitting(false);
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form className={formClass}>
          <TextInput label="Логин:" id="login" name="login" type="text" />

          <TextInput
            label="Пароль:"
            id="password"
            name="password"
            type="password"
          />

          <Button
            className={styles.submit}
            type="submit"
            color="primary"
            disabled={!dirty || !isValid || isSubmitting}
          >
            Войти
          </Button>

          {isError && (
            <div className={styles.errorMessage}>{error.data.message}</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
