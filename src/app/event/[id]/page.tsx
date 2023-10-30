import { NextPage } from 'next';

import { EventDetail } from './EventDetail';

const EventPage: NextPage<{ params: { id: string } }> = ({ params }) => (
  <EventDetail id={params.id} />
);

export default EventPage;
