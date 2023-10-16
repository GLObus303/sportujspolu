import ky from 'ky';

import { ERROR_MESSAGE } from '../utils/constants';
import { ApiError } from '../types/Api';

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

export const apiPost = async <T>(
  endpoint: string,
  body: unknown,
  token?: string,
  onError?: (error: ApiError) => void,
): Promise<T> => {
  const apiInstance = token ? privateApi(token) : api;

  try {
    return apiInstance.post(endpoint, { json: body }).json();
  } catch (error: any) {
    onError?.({
      status: error.response?.status,
      message: ERROR_MESSAGE.GENERIC_ERROR,
    });

    return null as any;
  }
};

export const apiGet = async <T>(
  endpoint: string,
  token?: string,
  onError?: (error: ApiError) => void,
): Promise<T> => {
  const apiInstance = token ? privateApi(token) : api;

  try {
    return apiInstance.get(endpoint).json();
  } catch (error: any) {
    onError?.({
      status: error.response?.status,
      message: ERROR_MESSAGE.GENERIC_ERROR,
    });

    return null as any;
  }
};
