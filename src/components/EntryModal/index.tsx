'use client';

import { useState } from 'react';

import { useEntryModal } from '../../context/EntryModalContext';
import { OverlayWrapper } from '../OverlayWrapper';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const EntryModal: React.FC = () => {
  const { closeEntryModal, isEntryModalOpen } = useEntryModal();

  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const handleToggleForm = () => {
    setIsRegisterForm(!isRegisterForm);
  };

  if (!isEntryModalOpen) {
    return null;
  }

  return (
    <OverlayWrapper onClose={closeEntryModal}>
      {isRegisterForm ? (
        <RegisterForm onToggleForm={handleToggleForm} />
      ) : (
        <LoginForm onToggleForm={handleToggleForm} />
      )}
    </OverlayWrapper>
  );
};
