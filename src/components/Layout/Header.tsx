'use client';

import Link from 'next/link';

import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { name, email } = user || {};

  return (
    <header className="fixed w-full bg-white">
      <nav className="flex flex-row items-center justify-between">
        <Link href="/" className="px-4 py-8 text-3xl md:px-8">
          SportujSpolu
        </Link>
        <p className="px-4 md:px-8">
          <b>name: {name} </b>
          <i>{email}</i>
          {email ? (
            <button
              type="button"
              className="pl-5 hover:text-green-500"
              onClick={logout}
            >
              Sign out
            </button>
          ) : (
            <>
              <Link href="/register" className="pl-5 hover:text-green-500">
                Register
              </Link>
              {' / '}
              <Link href="/login" className="hover:text-green-500">
                Login
              </Link>
            </>
          )}
        </p>
      </nav>
    </header>
  );
};
