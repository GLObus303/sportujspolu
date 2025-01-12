import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void,
  active: boolean,
) => {
  useEffect(() => {
    if (!active) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onOutsideClick, active]);
};
