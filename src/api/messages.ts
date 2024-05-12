import { HTTPError } from 'ky';

import { apiPost } from './base';
import { ApiError } from '../types/Api';

export const postMessage = async (formData: {
  event_id: string;
  text: string;
}) => {
  try {
    const data = await apiPost<{
      error?: ApiError;
    }>('messages/email/request', formData);

    return data;
  } catch (error: any) {
    const { response, message } = error as HTTPError;

    return {
      error: {
        status: response.status,
        message,
      } as ApiError,
    };
  }
};
