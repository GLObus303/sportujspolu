import ky from 'ky';

type User = {
  id: string;
  email: string;
};

type Resp = {
  token: string;
};

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = 'https://sportujspolu-api.onrender.com/api/v1/';

export const api = ky.create({
  prefixUrl: apiUrl,
  headers: {},
});

export async function authUser(email: string, password: string) {
  return await api
    .post('user/login', {
      json: { email, password },
    })
    .json<Resp>();
}

export async function getUser(token: string) {
  return await api
    .get('user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json<User>();
}
