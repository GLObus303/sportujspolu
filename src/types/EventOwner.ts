export type EventOwner = {
  name: string;
  since: string;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  reviews: {
    id: string;
    name: string;
    date: string;
    image: string;
    rating: number;
    comment: string;
  }[];
};
