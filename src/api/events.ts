import { HTTPError } from 'ky';

import { apiGet, apiPost, apiDelete, apiPut } from './base';
import { Event } from '../types/Event';
import { EventFormData } from '../types/Form';
import { PAGINATION, defaultEvent } from '../constants';

export const getEvent = (id: string) =>
  apiGet<Event>(`events/${id}?includes=owner`) || defaultEvent;

export const getPaginatedEvents = ({
  page = PAGINATION.PAGE,
  limit = PAGINATION.LIMIT,
}) =>
  apiGet<Event[]>(`events/?page=${page}&limit=${limit}&includes=owner`) || [];

export const postEvent = async (formData: EventFormData) => {
  try {
    const data = await apiPost('events', formData);

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

export const getAllEvents = () => apiGet<Event[]>(`events`) || [];

export const updateEvent = async (formData: EventFormData, id: string) => {
  try {
    const data = await apiPut(`events/${id}`, formData);

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

export const deleteEvent = (id: string) => apiDelete<Event>(`events/${id}`);
