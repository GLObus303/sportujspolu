import { SportsType, LevelType } from '../constants';
import { EventOwner } from './EventOwner';

export type Event = {
  id: string;
  name: string;
  sport: SportsType;
  date: string;
  location: string;
  price: number;
  description: string;
  level: LevelType;
  createdAt: string;
  ownerId: string;
  owner?: EventOwner;
};
