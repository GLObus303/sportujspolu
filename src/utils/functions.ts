import { sportsSet } from './constants';

export const getImagePath = (eventPrice: number, eventSport: string) =>
  sportsSet.has(eventSport)
    ? `/images/${eventSport}/${(eventPrice % 8) + 1}.avif`
    : '/images/Yoga/1.avif';
