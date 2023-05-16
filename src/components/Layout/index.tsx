import { ReactNode } from 'react';

import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <main className="p-0 md:p-6">{children}</main>
  </div>
);
