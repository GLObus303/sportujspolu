import { NextPage } from 'next';

import { EventDetail } from './EventDetail';

type EventPageProps = {
  params: { id: string };
};

const EventPage: NextPage<EventPageProps> = ({ params }) => (
  <EventDetail id={params.id} />
);

export default EventPage;
