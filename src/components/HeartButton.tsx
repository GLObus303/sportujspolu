'use client';

import { useState, SVGProps } from 'react';
import cx from 'classnames';

type HeartButtonProps = {
  className?: string;
};

const HeartIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="33"
    viewBox="0 0 26 23"
    {...props}
  >
    <path d="M12.68 21.45C-3.85 14.5-.32.05 7.85 1.05c4.78.58 4.83 5.27 4.83 5.5 0-.23.06-4.92 4.84-5.5 8.16-1 11.7 13.44-4.84 20.4z" />
    <path
      className="fill-primary"
      d="m12.68 22.18.26-.11c8.43-3.55 11.91-9.1 12.09-13.78a8.2 8.2 0 0 0-2.01-5.9 6.37 6.37 0 0 0-5.59-2l.09.66-.09-.66a5.71 5.71 0 0 0-4.72 3.25l-.03.05-.02-.05A5.72 5.72 0 0 0 7.93.4l-.08.66.08-.66a6.37 6.37 0 0 0-5.58 2A8.19 8.19 0 0 0 .34 8.3c.17 4.69 3.65 10.23 12.08 13.78l.26.1zm-.66-15.64h1.33c0-.07.01-1.18.56-2.32a4.39 4.39 0 0 1 3.69-2.51 5.04 5.04 0 0 1 4.44 1.58 6.86 6.86 0 0 1 1.66 4.95c-.15 3.98-3.1 9.07-11.02 12.49-7.9-3.42-10.86-8.51-11-12.5A6.85 6.85 0 0 1 3.32 3.3a5.03 5.03 0 0 1 4.45-1.6l.08-.64-.08.64a4.39 4.39 0 0 1 3.69 2.51 5.9 5.9 0 0 1 .56 2.33zm5.5-5.5v.01z"
    />
  </svg>
);

export const HeartButton: React.FC<HeartButtonProps> = ({ className }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeEvent = () => {
    setIsLiked(!isLiked);
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
