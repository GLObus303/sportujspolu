'use client';

import { useRouter } from 'next/navigation';

import { useAuth } from '../../../context/AuthContext';
import { Routes } from '../../../utils/constants';

export const UserInfo: React.FC = () => {
  const router = useRouter();
  const {
    isUserLoggedIn,
    user: { name, email },
  } = useAuth();

  if (!isUserLoggedIn) {
    router.push(Routes.DASHBOARD);

    return null;
  }

  return (
    <p className="mt-20 flex flex-col py-10 text-center">
      <span className="text-3xl font-medium">{name}</span>
      <span className="text-xl font-light">{email}</span>
    </p>
  );
};
