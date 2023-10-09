import ky from 'ky';

import { ERROR_MESSAGE } from '../utils/constants';
import { ApiError } from '../types';

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = 'https://sportujspolu-api.onrender.com/api/v1/';

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
    return await apiInstance.post(endpoint, { json: body }).json();
  } catch (error: unknown) {
    const apiError: ApiError = {
      status: (error as { response?: { status: number } }).response?.status,
      message: ERROR_MESSAGE.GENERIC_ERROR,
    };
    onError?.(apiError);
    throw apiError;
  }
};

export const apiGet = async <T>(
  endpoint: string,
  token?: string,
  onError?: (error: ApiError) => void,
): Promise<T> => {
  const apiInstance = token ? privateApi(token) : api;

  try {
    return await apiInstance.get(endpoint).json();
  } catch (error: unknown) {
    const apiError: ApiError = {
      status: (error as { response?: { status: number } }).response?.status,
      message: ERROR_MESSAGE.GENERIC_ERROR,
    };
    onError?.(apiError);
    throw apiError;
  }
};
