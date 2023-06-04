import './globals.scss';

import { Layout } from '../components/Layout';

export const metadata = {
  title: 'Sportuj Spolu',
  description: 'Už nikdy nesportuj sám',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
