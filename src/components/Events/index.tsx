'use client';

import { Event } from '../../types/Event';
import { formatDate } from '../../utils/formatDate';
import { EventCard } from './EventCard';

type EventsProps = {
  events: Event[];
  className?: string;
};

export const Events: React.FC<EventsProps> = ({ events }) => (
  <section className="flex justify-center">
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[350px] mt-10 gap-5 gap-y-5 sm:px-5 md:mt-14 md:px-0 sm:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1440px]">
      {events?.map((event, index) => (
        <EventCard
          key={event.id}
          event={event}
          index={index}
          formattedDate={formatDate(event.date)}
        />
      ))}
    </ul>
  </section>
);
