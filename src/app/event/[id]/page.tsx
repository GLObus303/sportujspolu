import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { EventDetail } from './EventDetail';
import { Events } from '../../../components/Events';
import { getAllEvents } from '../../../api/events';
import { getEvent } from '../../../api/events';
import { StarRating } from '../../../components/StarRating';
import { mockEventHost } from './mock';

type EventPageProps = {
  params: { id: string };
};

const defaultEvent = {
  id: -1,
  name: '',
  description: '',
  sport: '',
  location: '',
  date: '',
  price: 0,
  level: '',
  createdAt: '',
};

const EventPage: NextPage<EventPageProps> = async ({ params }) => {
  const events = (await getAllEvents()) || [];
  const event = (await getEvent(params?.id)) || defaultEvent;
  const { name, price, description } = event;

  return (
    <>
      <div className="mt-14 flex flex-col items-start px-4 md:flex-row md:px-0 lg:mt-0">
        <div className="relative flex h-full w-full flex-col items-center justify-center pr-0 md:pr-14">
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
              />
            </div>
            <h1 className="mt-12 px-20 text-center text-2xl font-medium leading-normal md:mt-9 md:px-0 lg:text-start lg:text-4xl">
              {name}
            </h1>
            <p
              className="mt-8 text-lg font-light"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <EventDetail className="mt-8 md:hidden" event={event} />
            <hr className="my-16 border-t border-light-gray" />
          </section>
          <section className="w-full">
            <div className="relative flex flex-col items-center md:mt-0 lg:flex-row">
              <Link href="/" className="relative h-16 w-16 lg:mr-5">
                <Image
                  alt=""
                  src="/images/2.png"
                  className="rounded-full object-cover"
                  fill
                />
              </Link>
              <div>
                <h2 className="mt-4 text-center text-xl font-medium leading-normal md:px-0 lg:mt-0 lg:whitespace-nowrap lg:text-start lg:text-3xl">
                  Sportuj s Instruktorkou{' '}
                  <Link href="/" className="hover:text-primary">
                    {mockEventHost.name}
                  </Link>
                </h2>
                <p className="font-light lg:whitespace-nowrap">
                  Instruktorkou na SportujSpolu od roku {mockEventHost.since}
                </p>
              </div>
            </div>
            <p
              className="mt-8 text-lg font-light"
              dangerouslySetInnerHTML={{ __html: mockEventHost.description }}
            />
            <hr className="my-16 w-full border-t border-light-gray" />
          </section>
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
                      alt=""
                      src={review.image}
                      className="rounded-full object-cover"
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
                    <p className="font-light">{review.date}</p>
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
        <EventDetail className="sticky hidden md:block" event={event} />
      </div>
      <hr className="my-16 border-t border-light-gray" />
      <section>
        <h2 className="px-20 text-center text-xl font-medium leading-normal md:px-0 lg:text-start lg:text-3xl">
          Další sportovní akce
        </h2>
        <Events events={events} />
      </section>
    </>
  );
};

export default EventPage;
