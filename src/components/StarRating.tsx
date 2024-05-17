import { FC } from 'react';

import { StarIcon } from './icons/StarIcon';

type StarProps = {
  rating: number;
  className?: string;
};

const Star: FC<StarProps> = ({ rating, className = 'h-3 w-3 px-2' }) => (
  <span className={`${className} relative inline-block px-2`}>
    <StarIcon className="absolute left-0 top-0 h-full w-full fill-dark-gray dark:fill-low-contrast" />
    <span
      style={{ clipPath: `inset(0 ${100 - rating}% 0 0)` }}
      className="absolute left-0 top-0 h-full w-full overflow-hidden"
    >
      <StarIcon className="h-full w-full fill-primary" />
    </span>
  </span>
);

type StarRatingProps = {
  rating: number;
  className?: string;
};

export const StarRating: FC<StarRatingProps> = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const partialPercentage = (rating - fullStars) * 100;

  return (
    <span role="img" aria-label={`Rated ${rating} stars out of 5`}>
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <Star className={className} key={index} rating={100} />;
        }
        if (index === fullStars) {
          return (
            <Star
              className={className}
              key={index}
              rating={partialPercentage}
            />
          );
        }

        return <Star className={className} key={index} rating={0} />;
      })}
    </span>
  );
};
