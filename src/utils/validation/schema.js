import { object } from 'yup';

import { login, password, inn, limit, startDate, endDate } from './rules';

export const loginValidationSchema = object({
  login,
  password,
});

export const searchValidationSchema = object({
  inn,
  limit,
  startDate,
  endDate,
});
