'use client';

import Link from 'next/link';

import { Routes } from '../../../../../utils/constants';
import { useAuth } from '../../../../../context/AuthContext';

type EditLinkProps = {
  id: string;
  ownerId: string;
};

export const EditLink: React.FC<EditLinkProps> = ({ id, ownerId }) => {
  const { id: userId } = useAuth().user;

  return (
    ownerId === userId && (
      <Link
        className="ml-auto rounded bg-button px-5 py-2 text-center text-base text-white hover:text-primary"
        href={`${Routes.EDIT_EVENT}/${id}`}
      >
        Upravit událost
      </Link>
    )
  );
};
