import { cookies } from 'next/headers';

import { Header } from './Header';
import { ChildrenFC } from '../../utils/type';
import { THEME } from '../../utils/constants';
import { AuthModal } from '../AuthModal';

export const Layout: ChildrenFC = ({ children }) => {
  const cookieStore = cookies();
  const defaultTheme = cookieStore.get('theme')?.value || THEME.LIGHT;

  return (
    <>
      <Header defaultTheme={defaultTheme} />
      <main className="mx-auto max-w-layout p-0 md:p-14">
        {children}
        <AuthModal />
      </main>
    </>
  );
};
