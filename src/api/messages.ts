import { HTTPError } from 'ky';

import { apiGet, apiPatch, apiPost } from './base';
import { Approval, Message } from '../types/Message';

export const sendEmailRequest = async (formData: {
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

export const getOwnerRequests = async (isApproved?: boolean | null) => {
  const data = await apiGet<Message[]>(
    `messages/email/received-owner-requests?approvedFilter=${isApproved}`,
  );

  return data || [];
};

export const getUserRequests = async () => {
  const data = await apiGet<Message[]>('messages/email/sent-user-requests');

  return data || [];
};

export const approveMessageRequest = async (id: string, approval: Approval) => {
  const data = await apiPatch<Message>(
    `messages/email/${id}/approve`,
    approval,
  );

  return data;
};
