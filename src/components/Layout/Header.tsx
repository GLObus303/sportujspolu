import Link from 'next/link';

import { LogoIcon } from '../icons/LogoIcon';
import { Routes } from '../../constants';
import { CustomLink } from '../CustomLink';
import { UserControls } from './UserControls';

type HeaderProps = {
  defaultTheme: string;
};

export const Header: React.FC<HeaderProps> = ({ defaultTheme }) => (
  <header className="fixed top-0 z-header w-full border-b border-low-contrast bg-background">
    <nav className="mx-auto flex max-w-layout flex-row items-center justify-between py-3.5">
      <Link
        href={Routes.DASHBOARD}
        aria-label="SportujSpolu - domovská stránka"
        className="px-4 text-3xl md:px-14 flex items-center gap-1"
      >
        <LogoIcon className="h-6 block fill-text" />
        <span className="hover-marker text-xl">
          <span className="hidden md:block">SportujSpolu</span>
        </span>
      </Link>
      <div className="px-4 md:px-14">
        <div className="relative flex items-center">
          <div className="right-full flex items-center gap-x-6">
            <UserControls defaultTheme={defaultTheme} />
            <CustomLink className="ml-auto mt-auto" href={Routes.CREATE_EVENT}>
              Přidat sportovní akci
            </CustomLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
