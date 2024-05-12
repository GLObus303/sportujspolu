import * as yup from 'yup';

export const textSchema = yup.object().shape({
  text: yup
    .string()
    .required('Text zprávy je povinný.')
    .min(5, 'Text zprávy musí obsahovat alespoň 5 znaků.')
    .max(3600, 'Text zprávy nesmí přesáhnout délku dvou normostran.'),
});
