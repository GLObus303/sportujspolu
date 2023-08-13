'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export const Header: React.FC = () => {
  const { name, email } = useSession()?.data?.user || {};

  return (
    <header className="fixed w-full bg-white">
      <nav className="flex flex-row items-center justify-between">
        <Link href="/" className="px-4 py-8 text-3xl md:px-8">
          SportujSpolu
        </Link>
        <p className="px-4 md:px-8">
          <b>{name} </b>
          <i>{email}</i>
          {email ? (
            <button
              type="button"
              className="pl-5 hover:text-green-500"
              onClick={() => signOut()}
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
