import { Routes, levelLabels } from '../constants';
import { Event } from '../types/Event';
import { getSportLabel } from './getSportLabel';
import { slugifyCategory } from './slugifyCategory';

export const buildEventPath = (event: Event) => {
  const sportLabel = getSportLabel(event.sport);
  const levelLabel = levelLabels[event.level];
  const category = slugifyCategory(
    `${sportLabel} ${event.location} ${levelLabel}`,
  );

  return `${Routes.EVENT}/${category}/${event.id}`;
};
