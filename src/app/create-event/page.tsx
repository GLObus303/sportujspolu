import { NextPage } from 'next';

import { EventForm } from '../../components/EventForm';

const CreateEventPage: NextPage = () => (
  <div className="flex flex-col items-center justify-center lg:justify-between xl:flex-row xl:items-start">
    <h1 className="mt-24 px-20 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 xl:text-start xl:text-4xl">
      Vytvořit sportovní událost
    </h1>
    <EventForm />
  </div>
);

export default CreateEventPage;
