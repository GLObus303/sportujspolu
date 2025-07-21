'use client';

import { useState, useEffect } from 'react';
import cx from 'classnames';

import { HeartIcon } from './icons/HeartIcon';
type HeartButtonProps = {
  className?: string;
  eventId: string;
};

const LOCAL_STORAGE_KEY = 'likedEvents';

export const HeartButton: React.FC<HeartButtonProps> = ({
  className,
  eventId,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const likedSet = new Set<string>(stored ? JSON.parse(stored) : []);
    setIsLiked(likedSet.has(eventId));
  }, [eventId]);

  const handleLikeEvent = () => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const likedSet = new Set<string>(stored ? JSON.parse(stored) : []);

    if (likedSet.has(eventId)) {
      likedSet.delete(eventId);
      setIsLiked(false);
    } else {
      likedSet.add(eventId);
      setIsLiked(true);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...likedSet]));
  };

  return (
    <button
      onClick={handleLikeEvent}
      className={cx(
        'transition-transform duration-200 ease-in-out hover:scale-115 motion-reduce:hover:scale-100',
        className,
      )}
    >
      <HeartIcon
        aria-label={isLiked ? 'Odstranit z oblíbených' : 'Přidat do oblíbených'}
        className={cx(isLiked ? 'fill-primary' : 'fill-smoke-glass')}
      />
    </button>
  );
};
