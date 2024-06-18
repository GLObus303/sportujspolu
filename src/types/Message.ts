export type Approval = {
  approved: boolean | null;
};

export type Message = {
  approved: boolean | null;
  approvedAt: string;
  createdAt: string;
  eventId: string;
  eventOwnerId: string;
  id: string;
  requesterId: string;
  requesterName: string;
  requesterEmail: string;
  text: string;
  updatedAt: string;
  category: string;
};
