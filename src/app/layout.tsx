import './globals.scss';

import { Layout } from '../components/Layout';

export const metadata = {
  title: 'Sportuj Spolu',
  description: 'Už nikdy nesportuj sám',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="cs">
    <body>
      <Layout>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
