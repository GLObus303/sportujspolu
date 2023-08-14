import './globals.scss';
import { NextAuthProvider } from './providers';
import { Layout } from '../components/Layout';

export const metadata = {
  title: 'Sportuj Spolu',
  description: 'Už nikdy nesportuj sám',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="cs">
    <body>
      <NextAuthProvider>
        <Layout>{children}</Layout>
      </NextAuthProvider>
    </body>
  </html>
);

export default RootLayout;
