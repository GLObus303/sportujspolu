import { sportsSet } from './constants';

export const getHash = (string: string) => {
  const prime = 31;

  return Math.abs(
    string.split('').reduce((hash, char) => {
      const updatedHash = hash * prime + char.charCodeAt(0);

      return updatedHash % 21483647;
    }, 0)
  );
};

export const getImagePath = (eventId: string, eventSport: string) => {
  const randomNumber = (getHash(eventId) % 8) + 1;

  return sportsSet.has(eventSport)
    ? `/images/${eventSport}/${randomNumber}.avif`
    : `/images/running/${randomNumber}.avif`;
};
