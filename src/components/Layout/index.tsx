import { Header } from './Header';
import { Footer } from './Footer';
import { ChildrenFC } from '../../utils/type';
import { AuthModal } from '../AuthModal';
import { getDefaultTheme } from '../../utils/getDefaultTheme';

export const Layout: ChildrenFC = async ({ children }) => {
  const defaultTheme = await getDefaultTheme();

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
