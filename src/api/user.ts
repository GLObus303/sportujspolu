import { apiPost, apiGet } from './base';
import { ApiError, OnErrorType } from '../types/Api';
import { FormData } from '../types/Form';
import { ERROR_MESSAGE } from '../utils/constants';
import { User } from '../types/User';

export const loginUser = (formData: FormData, onError?: OnErrorType) => {
  try {
    return apiPost<{ token: string }>(
      'user/login',
      formData,
      undefined,
      onError
    );
  } catch (error: unknown) {
    if ((error as ApiError).status === 400) {
      onError?.({
        status: 400,
        message: ERROR_MESSAGE.INVALID_CREDENTIALS,
      });
    }

    return null;
  }
};

export const registerUser = async (formData: FormData, onError?: OnErrorType) =>
  apiPost('user/register', formData, undefined, onError);

export const getUser = (token: string, onError?: OnErrorType) =>
  apiGet<User>('user/me', token, onError);
