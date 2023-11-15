import { apiGet, apiPost } from './base';
import { Event } from '../types/Event';
import { EventFormData } from '../types/Form';

export const getEvent = (id: string) => apiGet<Event>(`events/${id}`);

export const getAllEvents = () => apiGet<Event[]>('events');

export const postEvent = (formData: EventFormData) =>
  apiPost('events', formData);
