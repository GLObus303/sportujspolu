import { Event } from '../../types/Event';
import { EventCard } from './EventCard';

type EventsProps = {
  events: Event[];
};

export const Events: React.FC<EventsProps> = ({ events }) => (
  <>
    <section className="flex justify-center">
      <div className="mt-10 grid max-w-[350px] grid-cols-1 gap-5 gap-y-5 sm:max-w-[750px] sm:grid-cols-2 sm:px-5 md:mt-14 md:px-0 lg:max-w-[1000px] lg:grid-cols-3 xl:max-w-[1440px] xl:grid-cols-4">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
    <section className="text-center">
      <button
        type="button"
        title="🚀 Feature coming soon! 🌟"
        className="mt-12 hover:text-primary focus:text-primary"
      >
        <p className="text-semibold mx-3 text-xl">Zobrazit další akce</p>
      </button>
    </section>
  </>
);
