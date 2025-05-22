'use client';

import Link from 'next/link';
import cx from 'classnames';

import { Routes } from '../constants';
import { useAuth } from '../context/AuthContext';

type EditLinkProps = {
  eventId: string;
  ownerId?: string;
  className?: string;
};

export const EditLink: React.FC<EditLinkProps> = ({
  eventId,
  ownerId,
  className,
}) => {
  const { id: userId } = useAuth().user;

  if (ownerId !== userId) {
    return null;
  }

  return (
    <Link
      className={cx(
        'ml-auto rounded-full bg-button px-5 py-2 text-center text-base text-reverse-text hover:text-primary',
        className,
      )}
      href={`${Routes.EDIT_EVENT}/${eventId}`}
    >
      Upravit událost
    </Link>
  );
};
