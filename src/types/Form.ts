export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type LoginFormData = {
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
