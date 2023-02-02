import { string, number, setLocale } from 'yup';

import { isINNLegalEntity, removeNonDigit } from './functions';

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

export const inn = string()
  .required('Введите ИНН компании')
  .transform(removeNonDigit)
  .test('innValid', 'Неверный ИНН', isINNLegalEntity);

export const startDate = string().required('Введите дату начала');

export const endDate = string().required('Введите дату конца');
