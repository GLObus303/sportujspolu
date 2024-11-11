import { LevelType, SportsType } from '../utils/constants';

export type Approval = {
  approved: boolean | null;
};

export type Message = {
  approved: boolean | null;
  true: boolean;
  approvedAt: string;
  createdAt: string;
  eventId: string;
  eventLevel: LevelType;
  eventLocation: string;
  eventSport: SportsType;
  eventName: string;
  eventOwnerId: string;
  id: string;
  requesterEmail: string;
  requesterId: string;
  requesterName: string;
  eventOwnerName: string;
  eventOwnerEmail: string;
  text: string;
  updatedAt: string;
};
