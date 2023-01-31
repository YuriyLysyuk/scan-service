import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';
import { initialValues } from './params';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import { HOME_URL } from '../../constants';
import validationSchema from '../../utils/validationSchema';
import { useLoginMutation } from '../../redux/api/scan';

const LoginForm = ({ className }) => {
  const [
    login,
    {
      isLoading: isLoginLoading,
      isError: isLoginError,
      error: loginError,
      isSuccess: isLoginSuccess,
    },
  ] = useLoginMutation();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || HOME_URL;

  useEffect(() => {
    if (isLoginSuccess) {
      navigate(from);
    }
  }, [isLoginLoading]);

  const formClass = classNames(styles.form, className);

  const handleOnSubmit = (values, { setSubmitting }) => {
    login(values).then(() => {
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

          {isLoginError && (
            <div className={styles.errorMessage}>{loginError.data.message}</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
