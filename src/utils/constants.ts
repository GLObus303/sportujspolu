export const SECONDS_IN_WEEK = 7 * 24 * 60 * 60;
export const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;

export const Routes = {
  DASHBOARD: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  CREATE_EVENT: '/create-event',
  EDIT_EVENT: '/edit-event',
  EVENT: '/event',
  USER: '/user',
};

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const PAGINATION = {
  LIMIT: '8',
  PAGE: '1',
};

export const ERROR_MESSAGE = {
  INVALID_CREDENTIALS: 'Nesprávné přihlašovací údaje.',
  GENERIC_ERROR: 'Vyskytla se chyba. Zkuste to znovu později.',
  BAD_CREDENTIALS_EN: 'email or password is incorrect.',
  BAD_CREDENTIALS_CS: 'Zadaný email nebo heslo není správné.',
};

export const defaultEvent = {
  id: '-1',
  name: '',
  description: '',
  sport: '',
  location: '',
  date: '',
  price: 0,
  level: '',
  createdAt: '',
};

export const sportsSet = new Set([
  'Basketball',
  'Běh',
  'Box',
  'Cyklistika',
  'Fitness',
  'Fotbal',
  'Golf',
  'Plavání',
  'Skateboarding',
  'Stolní tenis',
  'Tenis',
  'Volejbal',
  'Yoga',
]);

export const levels = [
  { value: 'Beginner', label: 'Začátečník' },
  { value: 'Advanced', label: 'Pokročilý' },
  { value: 'Expert', label: 'Expert' },
  { value: 'Any', label: 'Pro každého' },
];

export const sports = [
  { value: 'basketball', label: 'Basketbal' },
  { value: 'running', label: 'Běh' },
  { value: 'boxing', label: 'Box' },
  { value: 'cycling', label: 'Cyklistika' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'football', label: 'Fotbal' },
  { value: 'golf', label: 'Golf' },
  { value: 'swimming', label: 'Plavání' },
  { value: 'skateboarding', label: 'Skateboarding' },
  { value: 'tableTennis', label: 'Stolní tenis' },
  { value: 'tennis', label: 'Tenis' },
  { value: 'volleyball', label: 'Volejbal' },
  { value: 'yoga', label: 'Yoga' },
];
