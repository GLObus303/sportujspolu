export const SECONDS_IN_WEEK = 7 * 24 * 60 * 60;
export const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;

export const Routes = {
  DASHBOARD: '/',
  CREATE_EVENT: '/vytvorit-akci',
  DICTIONARY: '/slovnik',
  EDIT_EVENT: '/upravit-akci',
  ATTEND_EVENT: '/zucastnit-se',
  EVENT: '/sportovni-akce',
  FAVORITES: '/oblibene-akce',
  MESSAGES: '/zpravy',
  GUIDELINES: '/zasady-platformy',
  BLOG: '/blog',
  CONTACT: '/kontakt',
  FAQ: '/faq',
  SPORT: '/sport',
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
  GENERIC_SUCCESS: 'Operace byla dokončena úspěšně.',
};

export const SUCCESS_EVENT = {
  NEW_EVENT: 'Událost byla úspěšně vytvořena.',
  UPDATE_EVENT: 'Událost byla úspěšně upravena.',
};

const levelArray = ['Beginner', 'Advanced', 'Expert', 'Any'] as const;

export type LevelType = (typeof levelArray)[number];

export const levelLabels: Record<LevelType, string> = {
  Beginner: 'Začátečník',
  Advanced: 'Pokročilý',
  Expert: 'Expert',
  Any: 'Pro každého',
};

export const sportsArray = [
  'badminton',
  'basketball',
  'bowling',
  'boxing',
  'canoe',
  'cricket',
  'cycling',
  'dancing',
  'diving',
  'fencing',
  'fitness',
  'floorball',
  'football',
  'golf',
  'hiking',
  'iceHockey',
  'kayaking',
  'martialArts',
  'other',
  'rollerSkating',
  'running',
  'skateboarding',
  'skiing',
  'snowboarding',
  'swimming',
  'tableTennis',
  'tennis',
  'volleyball',
  'yoga',
] as const;

export const sportsSet = new Set(sportsArray);

export type SportsType = (typeof sportsArray)[number];

export const sportsLabels: Record<SportsType, string> = {
  badminton: 'Badminton',
  basketball: 'Basketbal',
  bowling: 'Bowling',
  boxing: 'Box',
  canoe: 'Kanoe',
  cricket: 'Kriket',
  cycling: 'Cyklistika',
  dancing: 'Tanec',
  diving: 'Potápění',
  fencing: 'Šerm',
  fitness: 'Fitness',
  floorball: 'Florbal',
  football: 'Fotbal',
  golf: 'Golf',
  hiking: 'Hiking',
  iceHockey: 'Hokej',
  kayaking: 'Kajak',
  martialArts: 'Bojová umění',
  other: 'Ostatní',
  rollerSkating: 'Kolečkové brusle',
  running: 'Běh',
  skateboarding: 'Skateboarding',
  skiing: 'Lyžování',
  snowboarding: 'Snowboarding',
  swimming: 'Plavání',
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
