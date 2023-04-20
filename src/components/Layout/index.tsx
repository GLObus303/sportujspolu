import type { ReactNode, FC } from "react";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
  headerActionComponent?: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div>
    <Header />
    <main className="p-0 md:p-6">{children}</main>
  </div>
);
