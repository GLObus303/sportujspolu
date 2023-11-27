export type Event = {
  id: string;
  name: string;
  sport: string;
  date: string;
  location: string;
  price: number;
  description: string;
  level: string;
  createdAt: string;
  // not in API
  rating?: number;
  image?: string;
  allSpots?: number;
  freeSpots?: number;
  duration?: number;
  allDates?: string[];
};
