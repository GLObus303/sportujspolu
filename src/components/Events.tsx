'use client';

import { Event } from '../types';
import { EventCard } from './EventCard';

export const Events = ({ events }: { events: Event[] }) => (
  <>
    <h1 className="mt-24 px-20 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 lg:text-start lg:text-4xl">
      Všechny sportovní akce v&nbsp;Česku
    </h1>
    <section className="x-20 mt-4 grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:mt-14 md:gap-y-5 lg:grid-cols-3 xl:grid-cols-4">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </section>
    <section className="text-center">
      <button onClick={() => window.alert('🚀 Feature coming soon! 🌟')}>
        <p className="text-semibold mx-3 mt-12 text-xl hover:text-primary">
          Zobrazit další akce
        </p>
      </button>
    </section>
  </>
);
