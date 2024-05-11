import { sportsLabels, sportsSet, SportsType } from './constants';

export const getImagePath = (eventId: string, eventSport: SportsType) => {
  const randomNumber = (eventId.charCodeAt(0) % 8) + 1;

  return sportsSet.has(eventSport)
    ? `/images/${eventSport}/${randomNumber}.avif`
    : `/images/running/${randomNumber}.avif`;
};

export const getSportLabel = (sport: SportsType) =>
  sportsLabels[sport] || 'Nezařazeno';

export const getFirstQueryParam = (
  param: string | string[] | undefined,
  defaultParam: string
) => {
  const firstParam = Array.isArray(param) ? param[0] : param;

  return firstParam || defaultParam;
};
