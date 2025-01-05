import { cookies } from 'next/headers';

import { Header } from './Header';
import { Footer } from './Footer';
import { ChildrenFC } from '../../utils/type';
import { THEME } from '../../constants';
import { AuthModal } from '../AuthModal';

export const Layout: ChildrenFC = ({ children }) => {
  const cookieStore = cookies();
  const defaultTheme = cookieStore.get('theme')?.value || THEME.LIGHT;

  return (
    <>
      <Header defaultTheme={defaultTheme} />
      <main className="mx-auto max-w-layout min-h-full">
        {children}
        <AuthModal />
      </main>
      <Footer />
    </>
  );
};
