'use client';

import { useState } from 'react';
import Link from 'next/link';

import { useAuth } from '../../context/AuthContext';
import { LogoIcon } from '../icons/LogoIcon';
import { ProfileIcon } from '../icons/ProfileIcon';
import { Routes } from '../../utils/constants';
import { LightSwitch } from '../LightSwitch';
import { useAuthModal } from '../../context/AuthModalContext';
import { Button } from '../Button';
import { useEffectAsync } from '../../hooks/useEffectAsync';
import { getOwnerRequests } from '../../api/messages';
import { Message } from '../../types/Message';

type HeaderProps = {
  defaultTheme: string;
};

export const Header: React.FC<HeaderProps> = ({ defaultTheme }) => {
  const {
    user: { id, name, email },
    logout,
  } = useAuth();

  const [notifications, setNotifications] = useState<Message[]>([]);

  const { openAuthModal } = useAuthModal();

  useEffectAsync(async () => {
    try {
      const notificationsData = await getOwnerRequests(true);

      if (notificationsData) {
        setNotifications(notificationsData);
      }
    } catch (error) {
      setNotifications([]);
    }
  }, []);

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
                  {email ? (
                    <>
                      {name && (
                        <Link
                          href={`${Routes.USER}/${id}`}
                          className="items-center justify-center text-xl hover:text-primary focus:text-primary relative"
                        >
                          <ProfileIcon
                            aria-label="User profile"
                            className="inline h-6 w-6 fill-text hover:fill-primary focus:fill-primary sm:hidden"
                          />
                          <span className="hidden whitespace-nowrap sm:inline">
                            {name}
                          </span>
                          {notifications?.length > 0 && (
                            <span className="text-xs bg-mandarin text-white absolute -top-1 -right-3 p-0.5 min-w-5 min-h-5 rounded-full flex justify-center items-center">
                              {notifications.length > 9
                                ? '9+'
                                : notifications.length}
                            </span>
                          )}
                        </Link>
                      )}
                      <Button onClick={logout}>Odhlásit&nbsp;se</Button>
                    </>
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
