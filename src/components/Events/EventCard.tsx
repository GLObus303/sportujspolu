'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { StarRating } from '../StarRating';
import { HeartButton } from '../HeartButton';
import { Event } from '../../types/Event';
import { Routes, levelLabels } from '../../utils/constants';
import { getImagePath, getSportLabel } from '../../utils/functions';
import { slugifyCategory } from '../../utils/slugifyUtils';

type EventCardProps = {
  event: Event;
  index: number;
  formattedDate: string;
};

export const EventCard: FC<EventCardProps> = ({
  event: { id, name, sport, location, price, description, level, owner },
  index,
  formattedDate,
}) => {
  const sportLabel = getSportLabel(sport);
  const levelLabel = levelLabels[level];

  const category = slugifyCategory(`${sportLabel} ${location} ${levelLabel}`);

  return (
    <article className="relative rounded-md bg-card shadow-md">
      <Link href={`${Routes.EVENT}/${category}/${id}`}>
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
                {owner?.name}
              </span>
              {owner?.rating !== 0 ||
                (undefined && <StarRating rating={owner?.rating} />)}
            </div>
            <div className="flex items-center justify-between">
              <p>
                <span className="font-medium">{sportLabel}</span>
                <span className="font-light">
                  {' | '}
                  {levelLabel}
                </span>
              </p>
              {!!price && <p className="font-medium">{price} Kč</p>}
            </div>
          </div>
        </div>
      </Link>
      <HeartButton className="absolute right-3 top-3" />
    </article>
  );
};
