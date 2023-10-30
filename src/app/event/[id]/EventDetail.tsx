import { api } from '../../../api/base';
import { Event } from '../../../types/Event';

export const EventDetail = async ({ id }: { id: string }) => {
  const response = await api(`events/:${id}`);
  const events = await response.json<Event[]>();

  const event = events?.find((findEvent) => findEvent.id === Number(id));

  return (
    <>
      <h1 className="mt-24 px-20 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 lg:text-start lg:text-4xl">
        {event?.name}
      </h1>
      <p className="mt-8">{event?.description}</p>
    </>
  );
};
