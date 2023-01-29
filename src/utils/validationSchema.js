import * as Yup from 'yup';

const validationSchema = Yup.object({
  phone: Yup.string()
    .matches(
      /^\+7 [\d]{3} [\d]{3} [\d]{2} [\d]{2}$/,
      'Введите корректный номер телефона'
    )
    .required('Введите номер телефона'),
  login: Yup.string().required('Введите логин'),
  password: Yup.string().required('Введите пароль'),
});

export default validationSchema;
