import { HTTPError } from 'ky';

import { apiPost } from './base';

export const postMessage = async (formData: {
  event_id: string;
  text: string;
}) => {
  try {
    const data = await apiPost('messages/email/request', formData);

    return data;
  } catch (error: any) {
    const { response, message } = error as HTTPError;

    return {
      error: {
        status: response?.status,
        message,
      },
    };
  }
};
