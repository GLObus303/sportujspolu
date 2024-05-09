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
