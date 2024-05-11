'use client';

import Link from 'next/link';

import { Routes } from '../../../../../utils/constants';
import { useAuth } from '../../../../../context/AuthContext';

type EditLinkProps = {
  eventId: string;
  ownerId: string;
};

export const EditLink: React.FC<EditLinkProps> = ({ eventId, ownerId }) => {
  const { id: userId } = useAuth().user;

  if (ownerId !== userId) {
    return null;
  }

  return (
    <Link
      className="ml-auto rounded bg-button px-5 py-2 text-center text-base text-white hover:text-primary"
      href={`${Routes.EDIT_EVENT}/${eventId}`}
    >
      Upravit událost
    </Link>
  );
};
