export type User = {
  id: number;
  name: string;
  email: string;
  rating: number;
};

export type Event = {
  id: number;
  name: string;
  sport: string;
  date: string;
  location: string;
  price: number;
  description: string;
  level: string;
};

export type ApiError = {
  status?: number;
  message: string;
};

export type FormData = {
  password: string;
  email: string;
  name?: string;
};
