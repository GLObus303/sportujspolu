'use client';

import { useState } from 'react';
import Link from 'next/link';

import { useAuth } from '../../context/AuthContext';
import { LogoIcon } from '../icons/LogoIcon';
import { Routes } from '../../constants';
import { LightSwitch } from '../LightSwitch';
import { useAuthModal } from '../../context/AuthModalContext';
import { Button } from '../Button';
import { useEffectAsync } from '../../hooks/useEffectAsync';
import { getOwnerRequests } from '../../api/messages';
import { OwnerRequestType } from '../../types/Message';
import { UserControls } from './UserControls';

type HeaderProps = {
  defaultTheme: string;
};

export const Header: React.FC<HeaderProps> = ({ defaultTheme }) => {
  const {
    user: { id, name, email },
    logout,
  } = useAuth();

  const [notifications, setNotifications] = useState<OwnerRequestType[]>([]);

  const { openAuthModal } = useAuthModal();

  useEffectAsync(async () => {
    try {
      const notificationsData = await getOwnerRequests({ isApproved: null });

      if (notificationsData) {
        setNotifications(notificationsData);
      }
    } catch (error) {
      setNotifications([]);
    }
  }, []);

  const isUserLoggedIn = !!email;

  return (
    <header className="fixed top-0 z-header w-full border-b border-low-contrast bg-background">
      <nav className="mx-auto flex max-w-layout flex-row items-center justify-between py-3.5">
        <Link
          href={Routes.DASHBOARD}
          aria-label="SportujSpolu - domovská stránka"
          className="px-4 text-3xl focus:fill-primary md:px-14"
        >
          <LogoIcon className="h-6 hover:fill-primary dark:fill-white dark:hover:fill-primary md:h-7" />
        </Link>
        <div className="px-4 md:px-14">
          <div className="flex items-center">
            <div>
              <div className="relative flex items-center">
                <div className="absolute right-full flex items-center gap-x-6">
                  <LightSwitch defaultTheme={defaultTheme} />
                  {isUserLoggedIn ? (
                    <UserControls
                      userId={id}
                      userName={name}
                      notifications={notifications}
                      logout={logout}
                    />
                  ) : (
                    <Button onClick={openAuthModal}>Přihlásit&nbsp;se</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
