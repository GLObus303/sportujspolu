import { NextPage } from 'next';

const EventPage: NextPage<{ params: { id: string } }> = ({ params }) => (
  <div className="mt-20">My Event: {params.id}</div>
);

export default EventPage;
