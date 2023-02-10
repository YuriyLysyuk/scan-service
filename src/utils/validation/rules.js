import { string, number, date, setLocale } from 'yup';

import { isINNLegalEntity } from './functions';

import { removeNonDigit, getTodayEnd } from './../helpers';

setLocale({
  number: {
    min: ({ min }) => `Минимум от ${min}`,
    max: ({ max }) => `Максимум до ${max}`,
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

export const startDate = date()
  .typeError('Значение должно быть датой (дд.мм.гггг)')
  .max(getTodayEnd(), 'Дата начала должна быть в прошлом')
  .required('Выберите дату начала');

export const endDate = date()
  .typeError('Значение должно быть датой (дд.мм.гггг)')
  .max(getTodayEnd(), 'Дата конца должна быть в прошлом')
  .required('Выберите дату конца');
