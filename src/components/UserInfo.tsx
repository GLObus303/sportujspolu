'use client';

import { useAuth } from '../context/AuthContext';
import { ProfileIcon } from './icons/ProfileIcon';

export const UserInfo: React.FC = () => {
  const {
    isUserLoggedIn,
    user: { name, email },
  } = useAuth();

  if (!isUserLoggedIn) {
    return null;
  }

  return (
    <article className="relative mt-32 md:mt-20 w-full rounded-md bg-card shadow-md">
      <figure className="absolute -top-16 left-1/2 flex h-32 w-32 -translate-x-1/2 transform items-center justify-center rounded-full bg-low-contrast">
        <ProfileIcon className="h-20 w-20" />
      </figure>
      <div className="flex flex-col pt-24 pb-10 text-center">
        <h2 className="text-3xl font-medium">{name}</h2>
        <p className="text-xl font-light">{email}</p>
      </div>
    </article>
  );
};
