import { string, number, setLocale } from 'yup';

setLocale({
  number: {
    min: 'Минимум от ${min}',
    max: 'Максимум до ${max}',
  },
});

export const login = string().required('Введите логин');

export const password = string().required('Введите пароль');

export const limit = number()
  .typeError('Лимит должен быть числом')
  .required('Введите лимит')
  .min(1)
  .max(1000);

