'use client';

import { createContext, useContext, useMemo, useState } from 'react';

import { ChildrenFC } from '../utils/type';

type ModalContextProps = {
  isEntryModalOpen: boolean;
  openEntryModal: () => void;
  closeEntryModal: () => void;
  onSignedUp: (() => void) | undefined;
  onSignedUpComplete: (callback: () => void) => void;
};

const ModalContext = createContext<ModalContextProps | null>(null);

export const EntryModalProvider: ChildrenFC = ({ children }) => {
  const [isEntryModalOpen, setIsModalOpen] = useState(false);
  const [onSignedUp, setOnSignedUp] = useState<() => void>();

  const onSignedUpComplete = (callback: () => void) => {
    setOnSignedUp(() => callback);
  };

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
      onSignedUp,
      onSignedUpComplete,
    }),
    [
      isEntryModalOpen,
      openEntryModal,
      closeEntryModal,
      onSignedUp,
      onSignedUpComplete,
    ],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useEntryModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useEntryModal must be used within a ModalProvider');
  }

  return context;
};
