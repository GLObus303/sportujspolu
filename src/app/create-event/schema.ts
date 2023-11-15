import * as yup from 'yup';

export const eventSchema = yup.object().shape({
  name: yup.string().required('Název události je povinný.'),
  description: yup
    .string()
    .required('Popis je povinný.')
    .min(100, 'Popis musí obsahovat alespoň 100 znaků.')
    .max(1800, 'Popis nesmí přesáhnout délku jedné normostrany.'),
  sport: yup.string().required('Sport je povinný.'),
  date: yup
    .date()
    .typeError('Vyplňte správně datum a čas.')
    .required('Datum a čas jsou povinné.')
    .min(new Date(), 'Událost nemůže proběhnout v minulosti.'),
  location: yup.string().required('Místo konání je povinné.'),
  level: yup.string().required('Pokročilost je povinná.'),
  price: yup
    .number()
    .typeError('Cena musí být číslo.')
    .integer('Cena musí být celé číslo.')
    .min(0, 'Cena nemůže být záporná.')
    .required('Cena je povinná.'),
});
