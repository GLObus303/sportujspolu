'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import cx from 'classnames';

import { ProfileIcon } from '../icons/ProfileIcon';
import { Routes } from '../../constants';
import { OwnerRequestType } from '../../types/Message';
import { LightSwitch } from '../LightSwitch';
import { useAuthModal } from '../../context/AuthModalContext';
import { getOwnerRequests } from '../../api/messages';
import { useEffectAsync } from '../../hooks/useEffectAsync';
import { useAuth } from '../../context/AuthContext';
import { useClickOutside } from '../../hooks/useClickOutside';

type UserControls = {
  defaultTheme: string;
};

export const UserControls: React.FC<UserControls> = ({ defaultTheme }) => {
  const {
    user: { id, name, email },
    logout,
  } = useAuth();
  const { openAuthModal } = useAuthModal();
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [notifications, setNotifications] = useState<OwnerRequestType[]>([]);

  const isUserLoggedIn = !!email;

  useEffectAsync(async () => {
    if (!isUserLoggedIn) {
      return;
    }

    try {
      const notificationsData = await getOwnerRequests({ isApproved: null });

      if (notificationsData) {
        setNotifications(notificationsData);
      }
    } catch (error) {
      setNotifications([]);
    }
  }, []);

  useClickOutside(ref, () => setIsNavigationOpen(false), isNavigationOpen);

  const handleOpenNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const handleLogout = () => {
    logout();
    router.push(Routes.DASHBOARD);
  };

  return (
    <div ref={ref} className="flex items-center">
      <button
        aria-label={isNavigationOpen ? 'Zavřít menu' : 'Otevřít menu'}
        className="items-center h-full justify-center text-xl hover:fill-primary fill-text focus:fill-primary hover:text-primary focus:text-primary relative"
        onClick={isUserLoggedIn ? handleOpenNavigation : openAuthModal}
      >
        <div className="flex group gap-4 items-center">
          <span className="hidden whitespace-nowrap sm:inline">{name}</span>
          <ProfileIcon className="inline h-6 w-6" />
        </div>

        {notifications?.length > 0 && (
          <span className="text-xs bg-mandarin text-white absolute font-semibold -top-1 -right-3 p-0.5 min-w-5 min-h-5 rounded-full flex justify-center items-center">
            !
          </span>
        )}
      </button>
      <div
        className={cx(
          'absolute top-14 right-0 w-48 bg-background border border-low-contrast flex flex-col gap-3 rounded-md p-5',
          { hidden: !isNavigationOpen },
        )}
      >
        <LightSwitch defaultTheme={defaultTheme} />
        <Link
          className="font-semibold hover:text-primary"
          href={`${Routes.MESSAGES}/${id}`}
        >
          Zprávy
        </Link>
        <button
          className="flex font-semibold hover:text-primary"
          onClick={handleLogout}
        >
          Odhlásit&nbsp;se
        </button>
      </div>
    </div>
  );
};
