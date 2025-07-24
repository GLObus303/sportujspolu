'use client';

import cx from 'classnames';

import { Event } from '../../types/Event';
import { formatDate } from '../../utils/formatDate';
import { EventCard } from './EventCard';
import { BeFirst } from '../BeFirst';
import { Routes } from '../../constants';
import { RankingIcon } from '../icons/RankingIcon';
import { BrokenHeartIcon } from '../icons/BrokenHeartIcon';
import { EventIcon } from '../icons/EventIcon';
import { isBrowser } from '../../utils/env';

type EventsProps = {
  events: Event[];
  isLikedEvents?: boolean;
  className?: string;
  pageNumber?: number;
};

export const Events: React.FC<EventsProps> = ({
  events,
  isLikedEvents = false,
  className,
  pageNumber = 1,
}) => {
  const likedEventIdArray = JSON.parse(
    isBrowser() ? localStorage.getItem('likedEvents') || '[]' : '[]',
  );

  const displayedEvents = !isLikedEvents
    ? events
    : events.filter((event) => likedEventIdArray.includes(event.id));

  if (!displayedEvents.length && isLikedEvents) {
    return (
      <BeFirst
        imageIcon={<BrokenHeartIcon />}
        buttonText="Prohlédnout si akce"
        link={`${Routes.DASHBOARD}#events`}
        caption="V oblíbených zatím není žádná sportovní událost. Koukni na všechny sportovní akce!"
      />
    );
  }

  if (!displayedEvents.length && pageNumber === 1) {
    return (
      <BeFirst
        imageIcon={<RankingIcon />}
        buttonText="Přidat sportovní akci"
        link={Routes.CREATE_EVENT}
        caption="Buď první, kdo vytvoří sportovní událost!"
      />
    );
  }

  if (!displayedEvents.length && pageNumber > 1) {
    return (
      <BeFirst
        imageIcon={<EventIcon />}
        buttonText="Přidat sportovní akci"
        link={Routes.CREATE_EVENT}
        caption="Žádné další sportovní události nejsou k&nbsp;dispozici. Můžeš však vytvořit novou sportovní událost!"
      />
    );
  }

  return (
    <section className={cx('flex justify-center', className)}>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[350px] mt-10 gap-5 gap-y-5 sm:px-5 md:mt-14 md:px-0 sm:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1440px]">
        {displayedEvents?.map((event, index) => (
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
};
