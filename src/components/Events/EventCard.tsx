'use client';

import Link from 'next/link';
import Image from 'next/image';

import { StarRating } from '../StarRating';
import { Event } from '../../types/Event';
import { Routes, levelLabels } from '../../constants';
import { getSportLabel } from '../../utils/getSportLabel';
import { slugifyCategory } from '../../utils/slugifyCategory';
import { getImagePath } from '../../utils/getImagePath';
import { HeartButton } from '../HeartButton';

type EventCardProps = {
  event: Event;
  index: number;
  formattedDate: string;
};

export const EventCard: React.FC<EventCardProps> = ({
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
          <figure className="relative h-1/3 w-full overflow-hidden">
            <Image
              alt=""
              src={getImagePath(id, sport)}
              className="rounded-tl-md rounded-tr-md object-cover"
              sizes="auto"
              priority={index < 5}
              fill
            />
          </figure>
          <div className="flex h-2/3 flex-col justify-between p-5">
            <p className="text-sm flex flex-row justify-between font-light">
              <span className="w-1/2 truncate">{location}</span>{' '}
              <time className="truncate">{formattedDate}</time>
            </p>
            <div className="line-clamp-3 overflow-hidden overflow-ellipsis">
              <p className="font-medium text-lg">{name}</p>{' '}
              <p className="font-light">{description}</p>
            </div>
            <div className="flex items-center">
              <span className="pr-1 font-light text-dark-gray dark:text-accent">
                {owner?.name}
              </span>
              {owner?.rating !== undefined && owner?.rating !== 0 && (
                <StarRating rating={owner?.rating} />
              )}
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
      <HeartButton className="absolute right-3 top-3" eventId={id} />
    </article>
  );
};
