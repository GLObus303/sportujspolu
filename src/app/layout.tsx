import '../styles/globals.scss';
import { cookies } from 'next/headers';
import { Kanit } from 'next/font/google';
import cx from 'classnames';
import Script from 'next/script';

import { ThemeProvider } from './theme-provider';
import { AuthProvider } from '../context/AuthContext';
import { AuthModalProvider } from '../context/AuthModalContext';
import { Layout } from '../components/Layout';
import { ChildrenFC } from '../utils/type';
import { THEME } from '../constants';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata = {
  title: 'Spojujeme lidi ke společnému sportování | SportujSpolu',
  description:
    'SportujSpolu ti pomůže najít parťáky na sport. Zakládej události, připojuj se k akcím a už nikdy nesportuj sám.',
};

const RootLayout: ChildrenFC = ({ children }) => {
  const cookieStore = cookies();
  const defaultTheme = cookieStore.get('theme')?.value || THEME.LIGHT;

  return (
    <html
      lang="cs"
      className={cx(kanit.variable, defaultTheme)}
      style={{ colorScheme: defaultTheme }}
    >
      <head>
        <script
          id="hotjar-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5264674,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <ThemeProvider defaultTheme={defaultTheme}>
          <AuthProvider>
            <AuthModalProvider>
              <Layout>{children}</Layout>
            </AuthModalProvider>
          </AuthProvider>
        </ThemeProvider>

        <Script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
};

export default RootLayout;
