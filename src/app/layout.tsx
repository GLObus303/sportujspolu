import '../styles/globals.scss';
import { ThemeProvider } from './theme-provider';
import { AuthProvider } from '../context/AuthContext';
import { Layout } from '../components/Layout';
import { ChildrenFC } from '../utils/type';

export const metadata = {
  title: 'Sportuj Spolu',
  description: 'Už nikdy nesportuj sám',
};

const RootLayout: ChildrenFC = ({ children }) => (
  <html lang="cs">
    <head>
      <meta name="robots" content="noindex, nofollow" />
    </head>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <body className="bg-background">
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </ThemeProvider>
  </html>
);

export default RootLayout;
