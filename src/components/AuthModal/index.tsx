'use client';

import { useEffect, useState } from 'react';

import { useAuthModal } from '../../context/AuthModalContext';
import { OverlayWrapper } from '../OverlayWrapper';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useAuth } from '../../context/AuthContext';

export const AuthModal: React.FC = () => {
  const { isUserLoggedIn } = useAuth();
  const { closeAuthModal, isAuthModalOpen } = useAuthModal();

  const [isRegisterForm, setIsRegisterForm] = useState(false);

  useEffect(() => {
    if (isUserLoggedIn) {
      closeAuthModal();
    }
  }, [isUserLoggedIn]);

  const handleToggleForm = () => {
    setIsRegisterForm(!isRegisterForm);
  };

  if (!isAuthModalOpen) {
    return null;
  }

  return (
    <OverlayWrapper onClose={closeAuthModal}>
      {isRegisterForm ? (
        <RegisterForm onToggleForm={handleToggleForm} />
      ) : (
        <LoginForm onToggleForm={handleToggleForm} />
      )}
    </OverlayWrapper>
  );
};
