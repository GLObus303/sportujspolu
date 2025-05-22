import { MainHeading } from './MainHeading';
import { Pagination } from './Pagination';
import { Routes } from '../constants';
import { Event } from '../types/Event';
import { Events } from './Events';

type EventSectionProps = {
  events: Event[];
  headline: string;
  limitNumber?: number;
  pageNumber?: number;
  limit?: string;
  isLikedEvents?: boolean;
};

export const EventSection = ({
  events,
  headline,
  limitNumber,
  pageNumber,
  limit,
  isLikedEvents,
}: EventSectionProps) => (
  <section id="events">
    <MainHeading className="lg:text-start">{headline}</MainHeading>
    <Events
      events={events}
      className="grid-rows-2"
      isLikedEvents={isLikedEvents}
      pageNumber={pageNumber}
    />
    {limitNumber && pageNumber && limit && (
      <Pagination
        hasNextPage={events.length === limitNumber}
        hasPrevPage={pageNumber !== 1}
        page={pageNumber}
        route={Routes.DASHBOARD}
        limit={limit}
      />
    )}
  </section>
);
