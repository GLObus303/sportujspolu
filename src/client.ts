import ky from 'ky';

import { User } from './types';

type Response = {
  token: string;
};

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = 'https://sportujspolu-api.onrender.com/api/v1/';

export const api = ky.create({
  prefixUrl: apiUrl,
  headers: {},
});

const privateApi = (token: string) =>
  ky.create({
    prefixUrl: apiUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const authUser = async (email: string, password: string) =>
  await api
    .post('user/login', {
      json: { email, password },
    })
    .json<Response>();

export const getUser = async (token: string) =>
  await privateApi(token).get('user/me').json<User>();
