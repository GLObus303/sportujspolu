import { getEvent } from '../../../api/events';

type EventDetailProps = {
  id: string;
};

export const EventDetail: React.FC<EventDetailProps> = async ({ id }) => {
  const event = await getEvent(id);

  return (
    <>
      <h1 className="mt-24 px-20 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 lg:text-start lg:text-4xl">
        {event?.name}
      </h1>
      <p className="mt-8">{event?.description}</p>
    </>
  );
};
