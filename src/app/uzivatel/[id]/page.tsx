'use client';

import { NextPage } from 'next';

import { useAuth } from '../../../context/AuthContext';
import { ProfileIcon } from '../../../components/icons/ProfileIcon';

const UserPage: NextPage = () => {
  const { name } = useAuth().user;

  return (
    <section className="mt-20">
      <article className="relative mt-40 flex h-48 items-center justify-center bg-card shadow-md">
        <figure className="absolute -top-1/2 left-1/2 flex h-48 w-48 -translate-x-1/2 transform items-center justify-center rounded-full bg-low-contrast">
          <ProfileIcon className="h-32 w-32" />
        </figure>
        <p className="mt-20 text-4xl">{name}</p>
      </article>
    </section>
  );
};

export default UserPage;
