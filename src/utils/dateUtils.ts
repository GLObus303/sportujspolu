import { format, parseISO } from 'date-fns';

export const formatDate = (isoDate: string) =>
  isoDate ? format(parseISO(isoDate), 'dd/MM/yyyy') : '';

export const formatTime = (isoDate: string) =>
  isoDate ? format(parseISO(isoDate), 'HH:mm') : '';

export const formatDateTime = (isoDate: string) =>
  isoDate ? format(parseISO(isoDate), 'dd/MM/yyyy HH:mm') : '';
