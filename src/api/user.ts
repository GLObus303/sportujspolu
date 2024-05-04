import { apiPost, apiGet } from './base';
import { ApiError, OnErrorType } from '../types/Api';
import { LoginFormData, RegisterFormData } from '../types/Form';
import { ERROR_MESSAGE } from '../utils/constants';
import { User } from '../types/User';

export const loginUser = (formData: LoginFormData, onError?: OnErrorType) => {
  try {
    return apiPost<{
      error: string | undefined;
      token: string;
    }>('user/login', formData, onError);
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

export const registerUser = async (
  formData: RegisterFormData,
  onError?: OnErrorType
) => apiPost('user/register', formData, onError);

export const getUser = (onError?: OnErrorType) =>
  apiGet<User>('user/me', onError);
