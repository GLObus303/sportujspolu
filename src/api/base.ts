import ky from 'ky';

import { ERROR_MESSAGE } from '../utils/constants';
import { OnErrorType } from '../types/Api';

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://sportujspolu-api.onrender.com/api/v1/';

export const api = ky.create({
  prefixUrl: apiUrl,
  headers: {},
});

export const privateApi = (token: string) =>
  ky.create({
    prefixUrl: apiUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const apiPost = <T = void>(
  endpoint: string,
  body: unknown,
  token?: string,
  onError?: OnErrorType
) => {
  const apiInstance = token ? privateApi(token) : api;

  try {
    return apiInstance.post(endpoint, { json: body }).json<T>();
  } catch (error: any) {
    onError?.({
      status: error.response?.status,
      message: ERROR_MESSAGE.GENERIC_ERROR,
    });

    return null;
  }
};

export const apiGet = <T = void>(
  endpoint: string,
  token?: string,
  onError?: OnErrorType
) => {
  const apiInstance = token ? privateApi(token) : api;

  try {
    return apiInstance.get(endpoint).json<T>();
  } catch (error: any) {
    onError?.({
      status: error.response?.status,
      message: ERROR_MESSAGE.GENERIC_ERROR,
    });

    return null;
  }
};
