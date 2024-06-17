import { HTTPError } from 'ky';

import { apiGet, apiPatch, apiPost } from './base';
import { Approval, Message } from '../types/Message';

export const postMessage = async (formData: {
  eventId: string;
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

export const getAllMessages = async () =>
  apiGet('messages/email/user-requests') || [];

export const patchMessageRequest = async (id: string, approval: Approval) => {
  const data = await apiPatch<Message>(
    `messages/email/${id}/approve`,
    approval,
  );

  return data;
};
