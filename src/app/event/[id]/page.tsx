import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { EventDetail } from './EventDetail';
import { HostCard } from './HostCard';
import { Events } from '../../../components/Events';
import { getAllEvents } from '../../../api/events';
import { getEvent } from '../../../api/events';
import { StarRating } from '../../../components/StarRating';
import { mockEventHost } from './mock';
import { defaultEvent } from '../../../utils/constants';

type EventPageProps = {
  params: { id: string };
};

const EventPage: NextPage<EventPageProps> = async ({ params }) => {
  const events = (await getAllEvents()) || [];

  const event =
    (await getEvent(params?.id)?.catch(() => {
      notFound();
    })) || defaultEvent;

  const { name, price, description } = event;

  return (
    <>
      <div className="mt-14 flex flex-col items-start px-4 md:flex-row md:px-0 lg:mt-0">
        <div className="relative flex h-full w-full flex-col items-center justify-center pr-0 lg:pr-14">
          <section className="w-full">
            <div
              style={{ aspectRatio: '3/1' }}
              className="relative h-full w-full"
            >
              <Image
                src={`/images/${(price % 5) + 1}.png`}
                alt="event image"
                className="rounded-md object-cover"
                fill
                sizes="auto"
                priority
              />
            </div>
            <h1 className="mt-12 text-center text-2xl font-medium leading-normal md:mt-9 lg:text-start lg:text-4xl">
              {name}
            </h1>
            <p
              className="mt-8 text-lg font-light"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <EventDetail className="mx-auto mt-8 lg:hidden" event={event} />
            <hr className="my-16 border-t border-low-contrast" />
          </section>
          <HostCard className="w-full" eventHost={mockEventHost} />
          <section className="w-full">
            <h2 className="flex flex-col px-20 text-center text-xl font-medium leading-normal md:flex-row md:px-0 lg:text-start lg:text-3xl">
              <StarRating
                className="h-6 w-6 whitespace-nowrap px-4"
                rating={mockEventHost.rating}
              />
              <span>
                {mockEventHost.rating} ({mockEventHost.reviewsCount} hodnocení)
              </span>
            </h2>
            {mockEventHost.reviews.map((review, hostId) => (
              <div key={hostId}>
                <div key={review.id} className="relative mt-10 flex flex-row">
                  <Link href="/" className="relative mr-4 h-12 w-12">
                    <Image
                      alt={`Zobrazit profil - ${review.name}`}
                      src={review.image}
                      className="rounded-full object-cover"
                      sizes="auto"
                      fill
                    />
                  </Link>
                  <div className="mr-2">
                    <h3 className="items-center text-base md:text-lg">
                      <span className="text-center font-medium leading-normal lg:text-start">
                        {review.name}{' '}
                      </span>
                      <span className="font-light">
                        hodnotí akci <StarRating rating={review.rating} />
                      </span>
                    </h3>
                    <p className="font-light text-accent">{review.date}</p>
                  </div>
                </div>
                <p
                  className="ml-16 mt-4 line-clamp-6 text-lg font-light"
                  dangerouslySetInnerHTML={{ __html: review.comment }}
                />
              </div>
            ))}
          </section>
        </div>
        <EventDetail className="sticky hidden lg:block" event={event} />
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
