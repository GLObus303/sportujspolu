'use client';

import { useState, useEffect } from 'react';

type Event = {
  id: number;
  sport: string;
  name: string;
};

const fetchEventsData = async () => {
  const response = await fetch(
    'https://sportujspolu-api.onrender.com/api/v1/events',
  );
  const events = await response.json();

  return events as Event[];
};

export const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchEventsData();
      setEvents(response);
    };

    getData();
  }, []);

  return (
    <>
      <section className="flex h-hero min-h-300 items-center justify-center">
        <h1 className="text-center text-3xl">Už nikdy nesportuj sám</h1>
      </section>
      <section className="grid grid-cols-1 gap-x-20 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map(({ id, sport, name }) => (
          <article
            className="flex h-article flex-col justify-between bg-primary p-4"
            key={id}
          >
            <p>{sport}</p>
            <span className="flex items-center justify-between">
              <p>od: {name}</p>
              <button
                onClick={() => alert('Otevřeno')}
                className=" transition-property: background-color transition-duration: 0.3s transition-timing-function: h-rounded bg-secondary px-4 py-2 text-white ease-in-out hover:bg-tertiary"
              >
                Otevřít
              </button>
            </span>
          </article>
        ))}
      </section>
    </>
  );
};
