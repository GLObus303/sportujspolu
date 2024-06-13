import '../styles/globals.scss';
import { cookies } from 'next/headers';

import { ThemeProvider } from './theme-provider';
import { AuthProvider } from '../context/AuthContext';
import { AuthModalProvider } from '../context/AuthModalContext';
import { Layout } from '../components/Layout';
import { ChildrenFC } from '../utils/type';
import { THEME } from '../utils/constants';

export const metadata = {
  title: 'Sportuj Spolu',
  description: 'Už nikdy nesportuj sám',
};

const RootLayout: ChildrenFC = ({ children }) => {
  const cookieStore = cookies();
  const defaultTheme = cookieStore.get('theme')?.value || THEME.LIGHT;

  return (
    <html
      lang="cs"
      className={defaultTheme}
      style={{ colorScheme: defaultTheme }}
    >
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        <ThemeProvider defaultTheme={defaultTheme}>
          <AuthProvider>
            <AuthModalProvider>
              <Layout>{children}</Layout>
            </AuthModalProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
