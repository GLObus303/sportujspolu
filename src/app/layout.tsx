import './globals.scss';
import { AuthProvider } from '../context/AuthContext';
import { Layout } from '../components/Layout';

export const metadata = {
  title: 'Sportuj Spolu',
  description: 'Už nikdy nesportuj sám',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="cs">
    <body>
      <AuthProvider>
        <Layout>{children}</Layout>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
