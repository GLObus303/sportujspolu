'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import cx from 'classnames';

import { StarRating } from './ui/StarRating';
import { HeartIcon } from './ui/icons/HeartIcon';
import { Event } from '../types';

const rating = 3.5;

export const EventCard = ({ event }: { event: Event }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeEvent = () => {
    setIsLiked(!isLiked);
  };

  const { id, name, sport, date, location, price, description, level } = event;

  return (
    <article className="relative rounded-md bg-white shadow-md">
      <button
        onClick={handleLikeEvent}
        className="absolute right-3 top-3 z-button"
      >
        <HeartIcon
          className={cx(
            'transform transition-transform duration-200 ease-in-out hover:scale-115',
            isLiked ? 'fill-primary' : 'fill-smoke-glass',
          )}
        />
      </button>
      <Link href={`/event/${event.id}`}>
        <div style={{ aspectRatio: '1/1' }} className="rounded-md bg-white">
          <div className="relative h-1/3 w-full overflow-hidden rounded-tl-md rounded-tr-md object-cover">
            <Image src={`/${(id % 12) + 1}.png`} alt="" fill />
          </div>
          <div className="flex h-2/3 flex-col justify-between p-5">
            <p className="text-s flex flex-row justify-between font-light">
              <span className="w-1/2 truncate">{location}</span>{' '}
              <time>
                {new Date(date).toLocaleString('en-UK', {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </time>
            </p>
            <p className="line-clamp-3 overflow-hidden">
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
                {price === 0 ? 'FREE' : `${price} EUR`}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
