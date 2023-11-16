export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type FormData = {
  name: string;
  email: string;
  password: string;
};

export type EventFormData = {
  date: string;
  description: string;
  level: string;
  location: string;
  name: string;
  price: number;
  sport: string;
};
