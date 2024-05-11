import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  email_body: yup
    .string()
    .required('Text emailu je povinný.')
    .min(5, 'Text emailu musí obsahovat alespoň 5 znaků.')
    .max(3600, 'Text emailu nesmí přesáhnout délku dvou normostran.'),
});
