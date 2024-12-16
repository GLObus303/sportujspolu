import { sportsLabels, SportsType } from '../constants';

export const getSportLabel = (sport: SportsType) =>
  sportsLabels[sport] || 'Nezařazeno';
