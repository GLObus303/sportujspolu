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

export const ERROR_MESSAGE = {
  INVALID_CREDENTIALS: 'Nesprávné přihlašovací údaje.',
  GENERIC_ERROR: 'Vyskytla se chyba. Zkuste to znovu později.',
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
