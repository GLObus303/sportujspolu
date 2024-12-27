import { LevelType, SportsType } from '../constants';

export type Approval = {
  approved: boolean | null;
};

type Message = {
  approved: boolean | null;
  approvedAt?: string;
  createdAt: string;
  eventId: string;
  eventLevel: LevelType;
  eventLocation: string;
  eventSport: SportsType;
  eventName: string;
  eventOwnerId: string;
  id: string;
  requesterId: string;
  requesterName: string;
  eventOwnerName: string;
  text: string;
  updatedAt: string;
};

export type OwnerRequestType = Message & {
  requesterName: string;
  requesterEmail?: string;
};

export type UserRequestType = Message & {
  eventOwnerName: string;
  eventOwnerEmail?: string;
};
