'use client';

import Link from 'next/link';

import { useAuth } from '../../context/AuthContext';
import { LogoIcon } from '../ui/icons/LogoIcon';
import { ProfileIcon } from '../ui/icons/ProfileIcon';
import { ArrowIcon } from '../ui/icons/ArrowIcon';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { id, name, email } = user;

  return (
    <header className="fixed top-0 z-header w-full bg-white">
      <nav className="flex flex-row items-center justify-between border border-light-gray bg-lightest-gray">
        <Link href="/" className="px-4 py-4 text-3xl md:px-14">
          <LogoIcon className="hover:fill-primary" />
        </Link>
        <div className="px-4 md:px-14">
          <div className="flex items-center">
            <div>
              <div className="group relative inline-flex items-center">
                <div className="flex items-center">
                  <button type="button" className="cursor-default">
                    <ArrowIcon className="ml-2 transition-transform group-hover:rotate-90 group-hover:fill-primary" />
                  </button>
                  <ProfileIcon className="ml-2" />
                </div>
                <div className="absolute right-full hidden group-hover:flex">
                  {email ? (
                    <div className="flex">
                      {name && (
                        <Link href={`/user/${id}`} className="mr-4 text-xl">
                          {name}
                        </Link>
                      )}
                      <button
                        type="button"
                        className="rounded-md bg-black px-5 py-1 text-white hover:text-green-500"
                        onClick={logout}
                      >
                        Sign&nbsp;out
                      </button>
                    </div>
                  ) : (
                    <div className="rounded-md  bg-black px-5 py-1 text-white">
                      <Link href="/register" className="hover:text-green-500">
                        Register
                      </Link>
                      &nbsp;/&nbsp;
                      <Link href="/login" className="hover:text-green-500">
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
