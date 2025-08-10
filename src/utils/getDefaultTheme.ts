import { cookies } from 'next/headers';

import { THEME } from '../constants';

export const getDefaultTheme = async () => {
  const cookieStore = await cookies();

  return cookieStore.get('theme')?.value || THEME.LIGHT;
};
