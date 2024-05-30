import { HTTPError } from 'ky';

import { apiPost, apiGet } from './base';
import { OnErrorType } from '../types/Api';
import { LoginFormData, RegisterFormData } from '../types/Form';
import { User } from '../types/User';

export const loginUser = async (formData: LoginFormData) => {
  try {
    const data = await apiPost<{
      token: string;
    }>('user/login', formData);

    return { ...data, error: null };
  } catch (error: any) {
    const { response, message } = error as HTTPError;

    return {
      error: {
        status: response?.status,
        message,
      },
      token: '',
    };
  }
};

export const registerUser = async (
  formData: RegisterFormData,
  onError?: OnErrorType,
) => apiPost('user/register', formData, onError);

export const getUser = (onError?: OnErrorType) =>
  apiGet<User>('user/me', onError);
