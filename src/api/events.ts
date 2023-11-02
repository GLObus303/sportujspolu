import { apiGet, apiPost } from './base';
import { Event } from '../types/Event';

export const getEvent = (id: string) => apiGet<Event>(`events/${id}`);

export const getAllEvents = () => apiGet<Event[]>('events');

export const postEvent = (formData: FormData, token: string) =>
  apiPost('events', formData, token);
