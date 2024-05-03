import { apiGet, apiPost, apiDelete, apiPut } from './base';
import { Event } from '../types/Event';
import { EventFormData } from '../types/Form';

export const getEvent = (id: string) => apiGet<Event>(`events/${id}`);

export const getAllEvents = (params?: string) =>
  apiGet<Event[]>(`events/${params || ''}`);

export const postEvent = (formData: EventFormData) =>
  apiPost('events', formData);

export const updateEvent = (formData: EventFormData, id: string) =>
  apiPut(`events/${id}`, formData);

export const deleteEvent = (id: string) => apiDelete<Event>(`events/${id}`);
