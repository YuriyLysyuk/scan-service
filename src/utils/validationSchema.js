import * as Yup from 'yup';

const validationSchema = Yup.object({
  phone: Yup.string().required('Введите логин или номер телефона'),
  password: Yup.string().required('Введите пароль'),
});

export default validationSchema;
