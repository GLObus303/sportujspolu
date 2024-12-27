import Link from 'next/link';

import { ProfileIcon } from '../icons/ProfileIcon';
import { Button } from '../Button';
import { Routes } from '../../constants';
import { OwnerRequestType } from '../../types/Message';

type UserControlsProps = {
  userId: string;
  userName: string;
  notifications: OwnerRequestType[];
  logout: () => void;
};

export const UserControls: React.FC<UserControlsProps> = ({
  userId,
  userName,
  notifications,
  logout,
}) => (
  <>
    <Link
      href={`${Routes.USER}/${userId}`}
      className="relative flex items-center justify-center text-xl hover:text-primary focus:text-primary"
      aria-label={`View ${userName}'s profile`}
    >
      <ProfileIcon
        aria-label="User profile"
        className="inline h-6 w-6 fill-text hover:fill-primary focus:fill-primary sm:hidden"
      />
      <span className="hidden whitespace-nowrap sm:inline">{userName}</span>
      {notifications?.length > 0 && (
        <span className="absolute -right-3 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-mandarin p-0.5 text-xs text-white">
          {notifications.length > 9 ? '9+' : notifications.length}
        </span>
      )}
    </Link>
    <Button onClick={logout}>Odhlásit&nbsp;se</Button>
  </>
);
