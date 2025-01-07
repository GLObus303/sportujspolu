'use client';

import { useEffect, useState } from 'react';

import { MessageBox } from '../../../components/MessageBox';
import { Loading } from '../../../components/Loading';
import { useEffectAsync } from '../../../hooks/useEffectAsync';
import { getOwnerRequests, getUserRequests } from '../../../api/messages';
import { OwnerRequestType, UserRequestType } from '../../../types/Message';
import { useAuth } from '../../../context/AuthContext';
import { useAuthModal } from '../../../context/AuthModalContext';

export const UserMessageBox: React.FC = () => {
  const {
    user: { id },
  } = useAuth();
  const { openAuthModal } = useAuthModal();

  const [isLoading, setIsLoading] = useState(true);
  const [ownerRequest, setOwnerRequest] = useState<OwnerRequestType[]>([]);
  const [userRequests, setUserRequests] = useState<UserRequestType[]>([]);

  const isUserLoggedIn = !!id;

  useEffect(() => {
    if (!isUserLoggedIn) {
      openAuthModal();
    }
  }, [isUserLoggedIn]);

  useEffectAsync(async () => {
    if (!id) {
      setOwnerRequest([]);
      setUserRequests([]);

      return;
    }

    try {
      const [ownerRequestData, requestsData] = await Promise.all([
        getOwnerRequests(),
        getUserRequests(),
      ]);

      setOwnerRequest(ownerRequestData);
      setUserRequests(requestsData);
    } catch (error) {
      setOwnerRequest([]);
      setUserRequests([]);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <Loading className="w-full my-60" />;
  }

  return (
    <MessageBox
      className="mt-10 md:mt-14"
      ownerRequest={ownerRequest}
      userRequests={userRequests}
    />
  );
};
