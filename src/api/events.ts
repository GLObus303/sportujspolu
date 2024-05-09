import { apiGet, apiPost, apiDelete, apiPut } from './base';
import { Event } from '../types/Event';
import { EventFormData } from '../types/Form';
import { PAGINATION } from '../utils/constants';

export const getEvent = (id: string) =>
  apiGet<Event>(`events/${id}?includes=owner`);

export const getAllEvents = (
  page: string = PAGINATION.PAGE,
  limit: string = PAGINATION.LIMIT
) => apiGet<Event[]>(`events/?page=${page}&limit=${limit}&includes=owner`);

export const postEvent = (formData: EventFormData) =>
  apiPost('events', formData);

export const updateEvent = (formData: EventFormData, id: string) =>
  apiPut(`events/${id}`, formData);

export const deleteEvent = (id: string) => apiDelete<Event>(`events/${id}`);
