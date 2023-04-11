import { useState, useEffect } from "react";

type Event = {
  id: number;
  sport: string;
  name: string;
};

const fetchEventsData = async () => {
  const response = await fetch("https://sportujspolu-api.onrender.com/events");
  const events = await response.json();
  return events as Event[];
};

export const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getData = async () => {
      const events = await fetchEventsData();
      setEvents(events);
    };

    getData();
  }, []);

  return (
    <>
      {events.map(({ id, sport, name }) => (
        <article key={id}>
          <p>{sport}</p>
          <p>od: {name}</p>
          <button>Otevřít</button>
        </article>
      ))}
    </>
  );
};