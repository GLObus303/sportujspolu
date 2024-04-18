import { cookies } from 'next/headers';

import { Header } from './Header';
import { ChildrenFC } from '../../utils/type';

export const Layout: ChildrenFC = ({ children }) => {
  const cookieStore = cookies();
  const defaultTheme = cookieStore.get('theme')?.value || 'light';

  return (
    <div>
      <Header defaultTheme={defaultTheme} />
      <main className="mx-auto max-w-layout p-0 md:p-14">{children}</main>
    </div>
  );
};
