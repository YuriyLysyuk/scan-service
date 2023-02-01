import { object } from 'yup';

import { login, password, inn, limit } from './rules';

export const loginValidationSchema = object({
  login,
  password,
});

export const searchValidationSchema = object({
  inn,
  limit,
});
