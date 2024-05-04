'use client';

import cx from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '../../../context/AuthContext';
import { HeartButton } from '../../../components/HeartButton';
import { DeleteIcon } from '../../../components/icons/DeleteIcon';
import { Event } from '../../../types/Event';
import { deleteEvent } from '../../../api/events';
import { Routes } from '../../../utils/constants';

type EventDetailProps = {
  event: Event;
  className?: string;
  formattedDateTime: {
    formattedDate: string;
    formattedTime: string;
  };
};

export const EventDetail: React.FC<EventDetailProps> = ({
  event: { id, sport, location, price, level },
  className,
  formattedDateTime: { formattedDate, formattedTime },
}) => {
  const isUserLoggedIn = useAuth().isUserLoggedIn;
  const router = useRouter();

  const [isAttending, setIsAttending] = useState(false);

  const handleDelete = async () => {
    await deleteEvent(id);
    router.push(Routes.DASHBOARD);
  };

  const handleClick = () => {
    setIsAttending(!isAttending);
  };

  return (
    <section
      className={cx(
        className,
        'top-14 w-full max-w-lg rounded-md bg-card p-7 text-lg shadow-md lg:max-w-md'
      )}
    >
      <article className="flex flex-col rounded-md">
        {!isUserLoggedIn ? (
          <HeartButton className="ml-auto" />
        ) : (
          <button
            className="ml-auto flex flex-row items-center fill-button py-1 text-sm hover:fill-secondary"
            aria-label="Smazat událost"
            onClick={handleDelete}
          >
            <DeleteIcon className="hover:animate-shake motion-reduce:hover:animate-none" />
          </button>
        )}
        <table className="text-s font-medium">
          <tbody>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Cena</td>
              <td className="py-2 font-light md:py-4">
                {!!price ? `${price} Kč/osoba` : 'ZDARMA'}
              </td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Místo konání</td>
              <td className="py-2 font-light md:py-4">{location}</td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Datum</td>
              <td className="py-2 font-light md:py-4">
                <time className="truncate">{formattedDate}</time>
              </td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Čas</td>
              <td className="py-2 font-light md:py-4">
                <time className="truncate">{formattedTime}</time>
              </td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Sport</td>
              <td className="py-2 font-light md:py-4">{sport}</td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Pokročilost</td>
              <td className="py-2 font-light md:py-4">{level}</td>
            </tr>
          </tbody>
        </table>

        {!isUserLoggedIn ? (
          <button
            type="submit"
            onClick={handleClick}
            className={`ml-auto mt-6 whitespace-nowrap rounded-md bg-button px-5 py-2 text-base text-white ${
              isAttending ? 'hover:text-secondary' : 'hover:text-primary'
            }`}
          >
            {isAttending ? 'Neúčastnit' : 'Zúčastnit se'}
          </button>
        ) : (
          <Link
            className="ml-auto mt-6 rounded bg-button px-5 py-2 text-center text-base text-white hover:text-primary"
            href={`${Routes.EDIT_EVENT}/${id}`}
          >
            Upravit událost
          </Link>
        )}
      </article>
    </section>
  );
};
