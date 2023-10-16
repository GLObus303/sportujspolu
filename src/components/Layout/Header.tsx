'use client';

import Link from 'next/link';

import { useAuth } from '../../context/AuthContext';
import { LogoIcon } from '../icons/LogoIcon';
import { Routes } from '../../utils/constants';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { id, name, email } = user;

  return (
    <header className="fixed top-0 z-header w-full bg-white">
      <nav className="flex flex-row items-center justify-between border border-light-gray bg-lightest-gray">
        <Link
          href={Routes.DASHBOARD}
          aria-label="SportujSpolu - domovská stránka"
          className="px-4 py-4 text-3xl focus:fill-primary md:px-14"
        >
          <LogoIcon className="h-6 hover:fill-primary md:h-7" />
        </Link>
        <div className="px-4 md:px-14">
          <div className="flex items-center">
            <div>
              <div className="relative flex items-center">
                <div className="absolute right-full flex">
                  {email ? (
                    <div className="flex">
                      {name && (
                        <Link
                          href={`${Routes.USER}/${id}`}
                          className="mr-4 text-xl hover:text-primary focus:text-primary"
                        >
                          {name}
                        </Link>
                      )}
                      <button
                        type="button"
                        className="rounded-md bg-black px-5 py-1 text-white hover:text-primary focus:text-primary"
                        onClick={logout}
                      >
                        Sign&nbsp;out
                      </button>
                    </div>
                  ) : (
                    <div className="rounded-md bg-black px-4 py-1 text-white">
                      <Link
                        href={Routes.SIGN_UP}
                        className="hover:text-primary focus:text-primary"
                      >
                        Register
                      </Link>
                      &nbsp;/&nbsp;
                      <Link
                        href={Routes.SIGN_IN}
                        className="hover:text-primary focus:text-primary"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
