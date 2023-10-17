import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Zadejte prosím validní email.')
    .required('Email je povinný.'),
  password: yup
    .string()
    .required('Heslo je povinné.')
    .min(3, 'Heslo je příliš krátké.')
    .max(30, 'Heslo je příliš dlouhé.'),
});
