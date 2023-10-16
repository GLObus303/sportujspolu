import { StarIcon } from './icons/StarIcon';

type StarProps = {
  rating: number;
};

const Star: React.FC<StarProps> = ({ rating }) => (
  <span className="relative inline-block h-3 w-3 px-2">
    <StarIcon className="absolute left-0 top-0 h-full w-full fill-dark-gray" />
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
};

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const partialPercentage = (rating - fullStars) * 100;

  return (
    <span role="img" aria-label={`Rated ${rating} stars out of 5`}>
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <Star key={index} rating={100} />;
        }
        if (index === fullStars) {
          return <Star key={index} rating={partialPercentage} />;
        }

        return <Star key={index} rating={0} />;
      })}
    </span>
  );
};
