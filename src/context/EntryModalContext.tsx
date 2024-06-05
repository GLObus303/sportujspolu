'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ChildrenFC } from '../utils/type';
import { useAuth } from './AuthContext';

type ModalContextValue = {
  isEntryModalOpen: boolean;
  openEntryModal: () => void;
  closeEntryModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export const EntryModalProvider: ChildrenFC = ({ children }) => {
  const [isEntryModalOpen, setIsModalOpen] = useState(false);

  const openEntryModal = () => {
    setIsModalOpen(true);
  };

  const closeEntryModal = () => {
    setIsModalOpen(false);
  };

  const value = useMemo(
    () => ({
      isEntryModalOpen,
      openEntryModal,
      closeEntryModal,
    }),
    [isEntryModalOpen, openEntryModal, closeEntryModal],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

type UseEntryModal = (props?: { onSignedUp?: () => void }) => ModalContextValue;

export const useEntryModal: UseEntryModal = ({ onSignedUp } = {}) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useEntryModal must be used within a ModalProvider');
  }

  const { isUserLoggedIn } = useAuth();
  const prevIsUserLoggedIn = useRef(isUserLoggedIn);

  const { isEntryModalOpen, openEntryModal, closeEntryModal } = context;

  useEffect(() => {
    if (!prevIsUserLoggedIn.current && isUserLoggedIn) {
      onSignedUp?.();
    }

    prevIsUserLoggedIn.current = isUserLoggedIn;
  }, [isUserLoggedIn]);

  return useMemo(
    () => ({
      isEntryModalOpen,
      openEntryModal,
      closeEntryModal,
      onSignedUp,
    }),
    [isEntryModalOpen, openEntryModal, closeEntryModal, onSignedUp],
  );
};
