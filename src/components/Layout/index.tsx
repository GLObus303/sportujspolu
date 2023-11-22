import { Header } from './Header';
import { ChildrenFC } from '../../utils/type';

export const Layout: ChildrenFC = ({ children }) => (
  <div>
    <Header />
    <main className="mx-auto max-w-layout p-0 md:p-14">{children}</main>
  </div>
);
