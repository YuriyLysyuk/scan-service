import { string, number, setLocale } from 'yup';

export const login = string().required('Введите логин');

export const password = string().required('Введите пароль');

