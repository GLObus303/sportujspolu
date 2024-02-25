import { format } from 'date-fns';

export const formatDate = (date: string) =>
  date ? format(new Date(date), 'dd/MM/yyyy') : '';

export const formatTime = (date: string) =>
  date ? format(new Date(date), 'HH:mm') : '';

export const formatDateTime = (date: string) =>
  date ? format(new Date(date), 'dd/MM/yyyy HH:mm') : '';
