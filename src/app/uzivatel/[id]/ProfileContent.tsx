'use client';

import { FC } from 'react';

import { useAuth } from '../../../context/AuthContext';

type ProfileContentProps = {
  ownerId: string;
  ownerName: string | undefined;
};

export const ProfileContent: FC<ProfileContentProps> = ({
  ownerId,
  ownerName,
}) => {
  const { id: userId, name, email } = useAuth().user;

  return (
    <p className="mt-20 flex flex-col py-10 text-center">
      <span className="text-3xl font-medium">
        {userId === ownerId ? name : ownerName}
      </span>
      {userId === ownerId && (
        <span className="text-xl font-light">{email}</span>
      )}
    </p>
  );
};
