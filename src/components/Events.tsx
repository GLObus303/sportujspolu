import { useState, useEffect } from "react";

interface Event {
  id: number;
  sport: string;
  name: string;
}

const fetchEventsData = async () => {
  const response = await fetch("https://sportujspolu-api.onrender.com/events");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const events = await response.json();
  return events as Event[];
};

export const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const events = await fetchEventsData();
        setEvents(events);
        console.log("events:", events);
      } catch (error) {
        console.error(error);
      }
    })();
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
