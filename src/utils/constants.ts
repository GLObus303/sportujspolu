export const SECONDS_IN_WEEK = 7 * 24 * 60 * 60;
export const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;

export const Routes = {
  DASHBOARD: '/',
  LOGIN: '/prihlasit',
  REGISTER: '/registrovat',
  CREATE_EVENT: '/vytvorit-akci',
  EDIT_EVENT: '/upravit-akci',
  ATTEND_EVENT: '/zucastnit-se',
  EVENT: '/sportovni-akce',
  USER: '/uzivatel',
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
  ownerId: '',
};

export const levelLabels: Record<string, string> = {
  Beginner: 'Začátečník',
  Advanced: 'Pokročilý',
  Expert: 'Expert',
  Any: 'Pro každého',
};

export const sportsSet = new Set([
  'basketball',
  'running',
  'boxing',
  'cycling',
  'fitness',
  'football',
  'golf',
  'swimming',
  'skateboarding',
  'tableTennis',
  'tennis',
  'volleyball',
  'yoga',
]);

export const sportsLabels: Record<string, string> = {
  basketball: 'Basketbal',
  running: 'Běh',
  boxing: 'Box',
  cycling: 'Cyklistika',
  fitness: 'Fitness',
  football: 'Fotbal',
  golf: 'Golf',
  swimming: 'Plavání',
  skateboarding: 'Skateboarding',
  tableTennis: 'Stolní tenis',
  tennis: 'Tenis',
  volleyball: 'Volejbal',
  yoga: 'Yoga',
};

export const sportsOptions = Object.entries(sportsLabels).map(
  ([value, label]) => ({ value, label })
);
