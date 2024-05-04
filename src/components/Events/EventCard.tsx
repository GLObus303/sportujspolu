'use client';

import Link from 'next/link';
import Image from 'next/image';
// import { useMemo } from 'react';

import { StarRating } from '../StarRating';
import { HeartButton } from '../HeartButton';
import { Event } from '../../types/Event';
import { Routes } from '../../utils/constants';
// import { formatDateTime } from '../../utils/dateUtils';
import { getImagePath } from '../../utils/functions';

const rating = 3.5;

type EventCardProps = {
  event: Event;
  index: number;
};

export const EventCard: React.FC<EventCardProps> = ({
  event: { id, name, sport, date, location, price, description, level },
  index,
}) => {
  // const formattedDate = useMemo(() => formatDateTime(date), [date]);
  const formattedDate = date;

  return (
    <article className="relative rounded-md bg-card shadow-md">
      <Link href={`${Routes.EVENT}/${id}`}>
        <div style={{ aspectRatio: '1/1' }} className="rounded-md bg-card">
          <div className="relative h-1/3 w-full overflow-hidden">
            <Image
              alt=""
              src={getImagePath(id, sport)}
              className="rounded-tl-md rounded-tr-md object-cover"
              sizes="auto"
              priority={index < 5}
              fill
            />
          </div>
          <div className="flex h-2/3 flex-col justify-between p-5">
            <p className="text-s flex flex-row justify-between font-light">
              <span className="w-1/2 truncate">{location}</span>{' '}
              <time className="truncate">{formattedDate}</time>
            </p>
            <p className="line-clamp-3 overflow-hidden overflow-ellipsis">
              <span className="font-medium">{name}:</span>{' '}
              <span className="font-light">{description}</span>
            </p>
            <div className="flex items-center">
              <span className="pr-1 font-light text-dark-gray dark:text-accent">
                userName
              </span>
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
      <HeartButton className="absolute right-3 top-3" />
    </article>
  );
};
