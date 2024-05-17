import ky from 'ky';
import nookies from 'nookies';

import { ERROR_MESSAGE } from '../utils/constants';
import { OnErrorType } from '../types/Api';

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://sportujspolu-api.onrender.com/api/v1/';

export const privateApi = () =>
  ky.create({
    prefixUrl: apiUrl,
    headers: { cache: 'no-store' },
    hooks: {
      beforeRequest: [
        (request) => {
          const { token } = nookies.get();
          if (token) {
            request.headers.set('Authorization', `Bearer ${token}`);
          }
        },
      ],
    },
  });

export const apiPost = <T = void>(
  endpoint: string,
  body: unknown,
  onError?: OnErrorType
) => {
  const apiInstance = privateApi();

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

export const apiPut = <T = void>(
  endpoint: string,
  body: unknown,
  onError?: OnErrorType
) => {
  const apiInstance = privateApi();

  try {
    return apiInstance.put(endpoint, { json: body }).json<T>();
  } catch (error: any) {
    onError?.({
      status: error.response?.status,
      message: ERROR_MESSAGE.GENERIC_ERROR,
    });

    return null;
  }
};

export const apiGet = <T = void>(endpoint: string, onError?: OnErrorType) => {
  const apiInstance = privateApi();

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

export const apiDelete = <T = void>(
  endpoint: string,
  onError?: OnErrorType
) => {
  const apiInstance = privateApi();

  try {
    return apiInstance.delete(endpoint).json<T>();
  } catch (error: any) {
    onError?.({
      status: error.response?.status,
      message: ERROR_MESSAGE.GENERIC_ERROR,
    });

    return null;
  }
};
