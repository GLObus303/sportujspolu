'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import cx from 'classnames';
import format from 'date-fns/format';

import { StarRating } from '../StarRating';
import { HeartIcon } from '../icons/HeartIcon';
import { Event } from '../../types/Event';

const rating = 3.5;

type EventCardProps = {
  event: Event;
};

export const EventCard: React.FC<EventCardProps> = ({
  event: { id, name, sport, date, location, price, description, level },
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeEvent = () => {
    setIsLiked(!isLiked);
  };

  const getImagePath = (imageId: number) => `/${(imageId % 12) + 1}.png`;

  return (
    <article className="relative rounded-md bg-white shadow-md">
      <button
        type="button"
        onClick={handleLikeEvent}
        aria-label={isLiked ? 'Odstranit z oblíbených' : 'Přidat do oblíbených'}
        className="absolute right-3 top-3 z-button"
      >
        <HeartIcon
          className={cx(
            'transition-transform duration-200 ease-in-out hover:scale-115 motion-reduce:hover:scale-100',
            isLiked ? 'fill-primary' : 'fill-smoke-glass'
          )}
        />
      </button>
      <Link href={`/event/${id}`}>
        <div style={{ aspectRatio: '1/1' }} className="rounded-md bg-white">
          <div className="relative h-1/3 w-full overflow-hidden rounded-tl-md rounded-tr-md object-cover">
            <Image src={getImagePath(id)} alt="" fill />
          </div>
          <div className="flex h-2/3 flex-col justify-between p-5">
            <p className="text-s flex flex-row justify-between font-light">
              <span className="w-1/2 truncate">{location}</span>{' '}
              <time className="truncate">
                {format(new Date(date), 'dd/MM/yyyy HH:mm')}
              </time>
            </p>
            <p className="line-clamp-3 overflow-hidden overflow-ellipsis">
              <span className="font-medium">{name}:</span>{' '}
              <span className="font-light">{description}</span>
            </p>
            <div className="flex items-center">
              <span className="pr-1 font-light text-dark-gray">userName </span>
              <StarRating rating={rating} />
            </div>
            <div className="flex items-center justify-between">
              <p>
                <span className="font-medium">{sport}</span>
                <span className="font-light">
                  {' | '}
                  {level === 'Any' ? 'All Levels' : level}
                </span>
              </p>
              <p className="font-medium">
                {price === 0 ? 'ZDARMA' : `${price} Kč`}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
