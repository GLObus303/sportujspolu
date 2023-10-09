import { apiPost, apiGet } from './base';
import { User, ApiError, FormData } from '../types';
import { ERROR_MESSAGE } from '../utils/constants';

export const authUser = async (
  formData: FormData,
  onError?: (error: ApiError) => void,
) => {
  try {
    return await apiPost('user/login', formData, undefined, onError);
  } catch (error: unknown) {
    const Error = error as any;
    if (Error.status === 400) {
      onError?.({
        status: 400,
        message: ERROR_MESSAGE.INVALID_CREDENTIALS,
      });
    }
    throw Error;
  }
};

export const registerUser = async (
  formData: FormData,
  onError?: (error: ApiError) => void,
) => apiPost('user/register', formData, undefined, onError);

export const getUser = (
  token: string,
  onError?: (error: ApiError) => void,
): Promise<User> => apiGet('user/me', token, onError);
