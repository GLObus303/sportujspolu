'use client';

import format from 'date-fns/format';
import cx from 'classnames';
import { useState } from 'react';

import { HeartIcon } from '../../../components/icons/HeartIcon';
import { mockEvent } from './mock';
import { Event } from '../../../types/Event';

type EventDetailProps = {
  event: Event;
  className?: string;
};

export const EventDetail: React.FC<EventDetailProps> = ({
  event,
  className = '',
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeEvent = () => {
    setIsLiked(!isLiked);
  };

  const { sport, location, price, date, level } = event;

  return (
    <section
      className={`${className} top-14 w-full max-w-lg rounded-md bg-white p-7 text-lg shadow-md lg:max-w-md`}
    >
      <article className="flex flex-col rounded-md bg-white">
        <button
          type="button"
          onClick={handleLikeEvent}
          aria-label={
            isLiked ? 'Odstranit z oblíbených' : 'Přidat do oblíbených'
          }
          className="ml-auto"
        >
          <HeartIcon
            className={cx(
              'transition-transform duration-200 ease-in-out hover:scale-115 motion-reduce:hover:scale-100',
              isLiked ? 'fill-primary' : 'fill-smoke-glass'
            )}
          />
        </button>
        <table className="text-s font-medium">
          <tbody>
            <tr className="border-b border-light-gray">
              <td className="py-2 md:py-4">Cena</td>
              <td className="py-2 font-light md:py-4">
                {price === 0 ? 'ZDARMA' : `${price} Kč/osoba`}
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
        <button
          type="submit"
          className="ml-auto mt-6 whitespace-nowrap rounded-md bg-black px-5 py-2 text-white hover:text-primary"
        >
          Zúčastnit se
        </button>
      </article>
    </section>
  );
};
