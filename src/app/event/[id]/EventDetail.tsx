'use client';

import format from 'date-fns/format';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useAuth } from '../../../context/AuthContext';
import { HeartButton } from '../../../components/HeartButton';
import { DeleteIcon } from '../../../components/icons/DeleteIcon';
import { mockEvent } from './mock';
import { Event } from '../../../types/Event';
import { deleteEvent } from '../../../api/events';
import { Routes } from '../../../utils/constants';

type EventDetailProps = {
  event: Event;
  className?: string;
};

export const EventDetail: React.FC<EventDetailProps> = ({
  event,
  className,
}) => {
  const { id, sport, location, price, date, level } = event;

  const {
    user: { id: userId },
  } = useAuth();

  const router = useRouter();

  const handleDelete = async () => {
    await deleteEvent(id);
    router.push(Routes.DASHBOARD);
  };

  return (
    <section
      className={cx(
        className,
        'top-14 w-full max-w-lg rounded-md bg-white p-7 text-lg shadow-md lg:max-w-md'
      )}
    >
      <article className="flex flex-col rounded-md bg-white">
        {userId === -1 ? (
          <HeartButton className="ml-auto" />
        ) : (
          <button
            className="ml-auto flex flex-row items-center py-1 text-sm hover:fill-secondary"
            aria-label="Smazat událost"
            onClick={handleDelete}
          >
            <DeleteIcon className="hover:animate-shake motion-reduce:hover:animate-none" />
          </button>
        )}
        <table className="text-s font-medium">
          <tbody>
            <tr className="border-b border-light-gray">
              <td className="py-2 md:py-4">Cena</td>
              <td className="py-2 font-light md:py-4">
                {!!price ? `${price} Kč/osoba` : 'ZDARMA'}
              </td>
            </tr>
            <tr className="border-b border-light-gray">
              <td className="py-2 md:py-4">Místo konání</td>
              <td className="py-2 font-light md:py-4">{location}</td>
            </tr>
            <tr className="border-b border-light-gray">
              <td className="py-2 md:py-4">Datum</td>
              <td className="py-2 font-light md:py-4">
                <time className="truncate">
                  {format(new Date(date), 'dd/MM/yyyy')}
                </time>
              </td>
            </tr>
            <tr className="border-b border-light-gray">
              <td className="py-2 md:py-4">Čas</td>
              <td className="py-2 font-light md:py-4">
                <time className="truncate">
                  {format(new Date(date), 'HH:mm')}
                </time>
              </td>
            </tr>
            <tr className="border-b border-light-gray">
              <td className="py-2 md:py-4">
                <span>Trvání</span>
              </td>
              <td className="py-2 font-light md:py-4">
                {mockEvent.duration} min
              </td>
            </tr>
            <tr className="border-b border-light-gray">
              <td className="py-2 md:py-4">Sport</td>
              <td className="py-2 font-light md:py-4">{sport}</td>
            </tr>
            <tr className="border-b border-light-gray">
              <td className="py-2 md:py-4">Pokročilost</td>
              <td className="py-2 font-light md:py-4">{level}</td>
            </tr>
          </tbody>
        </table>

        {userId === -1 ? (
          <button
            type="submit"
            className="ml-auto mt-6 whitespace-nowrap rounded-md bg-black px-5 py-2 text-base text-white hover:text-primary"
          >
            Zúčastnit se
          </button>
        ) : (
          <Link
            className="ml-auto mt-6 rounded bg-black px-5 py-2 text-center text-base text-white hover:text-primary"
            href={`${Routes.EDIT_EVENT}/${event.id}`}
          >
            Upravit událost
          </Link>
        )}
      </article>
    </section>
  );
};
