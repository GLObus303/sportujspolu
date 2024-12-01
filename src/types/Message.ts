import { LevelType, SportsType } from '../utils/constants';

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
  eventOwnerEmail: string;
  requesterEmail?: string;
};

export type UserRequestType = Message & {
  eventOwnerEmail?: string;
};
