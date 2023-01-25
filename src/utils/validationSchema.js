import * as Yup from 'yup';

const validationSchema = Yup.object({
  tel: Yup.string().required('Введите логин или номер телефона'),
  password: Yup.string().required('Введите пароль'),
});

export default validationSchema;
