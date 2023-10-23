import '../styles/globals.scss';
import { AuthProvider } from '../context/AuthContext';
import { Layout } from '../components/Layout';
import { ChildrenFC } from '../utils/type';

export const metadata = {
  title: 'Sportuj Spolu',
  description: 'Už nikdy nesportuj sám',
};

const RootLayout: ChildrenFC = ({ children }) => (
  <html lang="cs">
    <body className="bg-lightest-gray">
      <AuthProvider>
        <Layout>{children}</Layout>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
