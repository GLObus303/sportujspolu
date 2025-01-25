import { cookies } from 'next/headers';

import { Header } from './Header';
import { Footer } from './Footer';
import { ChildrenFC } from '../../utils/type';
import { THEME } from '../../constants';
import { AuthModal } from '../AuthModal';

export const Layout: ChildrenFC = async ({ children }) => {
  const cookieStore = await cookies();
  const defaultTheme = cookieStore.get('theme')?.value || THEME.LIGHT;

  return (
    <>
      <Header defaultTheme={defaultTheme} />
      <main className="flex-grow flex-shrink-0 basis-auto w-full mx-auto max-w-layout">
        {children}
        <AuthModal />
      </main>
      <Footer />
    </>
  );
};
