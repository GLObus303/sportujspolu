import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Jméno je povinné.'),
  email: yup
    .string()
    .email('Zadejte prosím validní email.')
    .required('Email je povinný.'),
  password: yup
    .string()
    .required('Heslo je povinné.')
    .min(3, 'Heslo je příliš krátké.')
    .max(30, 'Heslo je příliš dlouhé.'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Hesla se musí shodovat.')
    .required('Potvrzení hesla je povinné.'),
});
