import { apiGet } from './base';
import { Event } from '../types/Event';

export const getEvent = (id: string) => apiGet<Event>(`events/${id}`);

export const getAllEvents = () => apiGet<Event[]>('events');
