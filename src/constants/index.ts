export const SECONDS_IN_WEEK = 7 * 24 * 60 * 60;
export const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;

export const Routes = {
  DASHBOARD: '/',
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
  BAD_CREDENTIALS_CS: 'Zadaný email nebo heslo není správné.',
  REQUEST_ALREADY_SENT: 'Žádost již byla odeslána',
  AUTHENTICATION_REQUIRED: 'Pro tuto akci je vyžadováno přihlášení.',
};

export const SUCCESS_MESSAGE = {
  REQUEST_SENT: 'Žádost byla úspěšně odeslána.',
};

const levelArray = ['Beginner', 'Advanced', 'Expert', 'Any'] as const;

export type LevelType = (typeof levelArray)[number];

export const levelLabels: Record<LevelType, string> = {
  Beginner: 'Začátečník',
  Advanced: 'Pokročilý',
  Expert: 'Expert',
  Any: 'Pro každého',
};

const sportsArray = [
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
] as const;

export const sportsSet = new Set(sportsArray);

export type SportsType = (typeof sportsArray)[number];

export const sportsLabels: Record<SportsType, string> = {
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
  ([value, label]) => ({ value, label }),
);

export const defaultOwner = {
  id: '',
  name: '',
  email: '',
  rating: 0,
  since: '',
  description: '',
  image: '',
  reviewsCount: 0,
  reviews: [],
};

export const defaultEvent = {
  id: '',
  name: '',
  description: '',
  sport: sportsArray[1],
  location: '',
  date: '',
  price: 0,
  level: levelArray[3],
  createdAt: '',
  ownerId: '',
  owner: defaultOwner,
};
