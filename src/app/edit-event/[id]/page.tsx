import { NextPage } from 'next';

import { EventForm } from '../../../components/EventForm';
import { getEvent } from '../../../api/events';
import { Event } from '../../../types/Event';
import { defaultEvent } from '../../../utils/constants';

type EditEventPageProps = {
  params: { id: string };
};

const EditEventPage: NextPage<EditEventPageProps> = async ({ params }) => {
  const event: Event = (await getEvent(params?.id)) || defaultEvent;

  return (
    <div className="flex flex-col items-center justify-center lg:justify-between xl:flex-row xl:items-start">
      <h1 className="mt-24 px-20 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 xl:text-start xl:text-4xl">
        Upravit sportovní událost
      </h1>
      <EventForm event={event} />
    </div>
  );
};

export default EditEventPage;
