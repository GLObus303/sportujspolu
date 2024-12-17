import { NextPage } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { EventDetail } from './EventDetail';
import { Events } from '../../../../components/Events';
import { getEvent, getAllEvents } from '../../../../api/events';
import { defaultOwner, levelLabels } from '../../../../constants';
import { getSportLabel } from '../../../../utils/getSportLabel';
import { formatDate, formatTime } from '../../../../utils/formatDate';
import { slugifyCategory } from '../../../../utils/slugifyCategory';
import { MessageSection } from './MessageSection';
import { getImagePath } from '../../../../utils/getImagePath';

type EventPageProps = {
  params: {
    category: string;
    id: string;
  };
};

const EventPage: NextPage<EventPageProps> = async ({
  params: { category, id },
}) => {
  const [events, event] = await Promise.all([getAllEvents(), getEvent(id)]);

  if (!event) {
    return notFound();
  }

  const { name, date, location, sport, description, level, owner } = event;
  const eventOwner = owner || defaultOwner;

  const sportLabel = getSportLabel(sport);
  const levelLabel = levelLabels[level];

  const expectedCategory = slugifyCategory(
    `${sportLabel} ${location} ${levelLabel}`,
  );

  if (category !== expectedCategory) {
    return notFound();
  }

  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);

  return (
    <>
      <div className="relative mt-14 flex flex-col items-start px-4 md:flex-row md:px-0 lg:mt-0">
        <div className="relative flex h-full w-full flex-col pr-0 lg:pr-14">
          <section className="relative w-full">
            <figure className="relative aspect-3/1 h-full w-full overflow-hidden">
              <Image
                src={getImagePath(id, sport)}
                alt="event image"
                className="rounded-md object-cover"
                sizes="auto"
                fill
                priority
              />
            </figure>
            <h1 className="mt-12 text-center text-2xl font-medium leading-normal md:mt-9 lg:text-start lg:text-4xl">
              {name}
            </h1>
            <p className="mt-8 text-lg font-light">{description}</p>
            <EventDetail
              className="mx-auto mt-8 lg:hidden"
              event={event}
              formattedDate={formattedDate}
              formattedTime={formattedTime}
            />
            <hr className="my-16 border-t border-low-contrast" />
          </section>
          <MessageSection eventOwner={eventOwner} name={name} eventId={id} />
        </div>
        <EventDetail
          className="sticky hidden lg:block"
          event={event}
          formattedDate={formattedDate}
          formattedTime={formattedTime}
        />
      </div>
      <hr className="my-16 border-t border-low-contrast" />
      <section>
        <h2 className="px-20 text-center text-xl font-medium leading-normal md:px-0 lg:text-start lg:text-3xl">
          Podobné sportovní akce
        </h2>
        <Events events={events.slice(0, 4)} />
      </section>
    </>
  );
};

export default EventPage;
