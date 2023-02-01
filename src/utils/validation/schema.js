import { object } from 'yup';

import { login, password, inn, limit } from './rules';

export const loginValidationSchema = object({
  login,
  password,
});

