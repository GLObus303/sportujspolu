'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { ChildrenFC } from '../utils/type';

type ModalContextProps = {
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
};

const ModalContext = createContext<ModalContextProps | null>(null);

export const AuthModalProvider: ChildrenFC = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isAuthModalOpen,
      openAuthModal,
      closeAuthModal,
    }),
    [isAuthModalOpen, openAuthModal, closeAuthModal],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useAuthModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useAuthModal must be used within a ModalProvider');
  }

  return context;
};
