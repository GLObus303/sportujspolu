import { apiPost, apiGet } from './base';
import { ApiError } from '../types/Api';
import { FormData } from '../types/Form';
import { ERROR_MESSAGE } from '../utils/constants';

export const loginUser = async (
  formData: FormData,
  onError?: (error: ApiError) => void,
) => {
  try {
    return await apiPost('user/login', formData, undefined, onError);
  } catch (error: unknown) {
    if ((error as ApiError).status === 400) {
      onError?.({
        status: 400,
        message: ERROR_MESSAGE.INVALID_CREDENTIALS,
      });
    }
    throw error;
  }
};

export const registerUser = async (
  formData: FormData,
  onError?: (error: ApiError) => void,
) => apiPost('user/register', formData, undefined, onError);

export const getUser = (token: string, onError?: (error: ApiError) => void) =>
  apiGet('user/me', token, onError);
