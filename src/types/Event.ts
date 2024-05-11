import { SportsType, LevelType } from '../utils/constants';

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
  // not in API
  image?: string;
  duration?: number;
};

export type EventOwner = {
  id: string;
  name: string;
  email: string;
  rating: number;
  since?: string;
  description?: string;
  image?: string;
  reviewsCount?: number;
  reviews?: {
    id: string;
    name: string;
    date: string;
    image: string;
    rating: number;
    comment: string;
  }[];
};
