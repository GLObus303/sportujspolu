import { NextPage } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { EventDetail } from './EventDetail';
import { Events } from '../../../../components/Events';
import { getEvent, getPaginatedEvents } from '../../../../api/events';
import { defaultOwner, levelLabels } from '../../../../constants';
import { getSportLabel } from '../../../../utils/getSportLabel';
import { formatDate, formatTime } from '../../../../utils/formatDate';
import { slugifyCategory } from '../../../../utils/slugifyCategory';
import { MessageSection } from './MessageSection';
import { getImagePath } from '../../../../utils/getImagePath';
import { Container } from '../../../../components/Container';
import { MainHeading } from '../../../../components/MainHeading';

type EventPageProps = {
  params: Promise<{
    category: string;
    id: string;
  }>;
};

export const generateMetadata = async ({ params }: EventPageProps) => {
  const { category, id } = await params;
  const event = await getEvent(id);

  if (!event) {
    return;
  }

  return {
    title: `Sportovní akce: ${event?.name}`,
    description: `Připoj se ke sportovní akci "${event?.name}" v kategorii "${getSportLabel(event?.sport)}" a sportuj s námi!`,
    alternates: { canonical: `/sportovni-akce/${category}/${id}` },
    openGraph: {
      type: 'article',
      title: `Sportovní akce: ${event?.name} - ${getSportLabel(event?.sport)} | SportujSpolu`,
      description: `Užij si spoustu zábavy na sportovní akci "${event?.name}" v kategorii "${getSportLabel(event?.sport)}". ${event?.location}, je skvělé místo pro sport! Tato akce je vhodná pro sportovní nadšence na úrovni "${levelLabels[event?.level]}" - vytvoř si vzpomínky v pohybu a přihlas se ještě dnes!`,
      images: [{ url: getImagePath(id, event.sport) }],
    },
  };
};

const EventPage: NextPage<EventPageProps> = async ({ params }) => {
  const { category, id } = await params;

  const [events, event] = await Promise.all([
    getPaginatedEvents({ page: '1', limit: '4' }),
    getEvent(id),
  ]);

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
    <Container>
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
            <MainHeading className="lg:text-start">{name}</MainHeading>
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
        <Events events={events} />
      </section>
    </Container>
  );
};

export default EventPage;
