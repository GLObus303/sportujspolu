import { FC } from 'react';
import cx from 'classnames';

import { HeartButton } from '../../../../../components/HeartButton';
import { Event } from '../../../../../types/Event';
import { EditLink } from './EditLink';
import { getSportLabel } from '../../../../../utils/functions';
import { levelLabels } from '../../../../../utils/constants';
import { TableRow } from './TableRow';

type EventDetailProps = {
  event: Event;
  className?: string;
  formattedDate: string;
  formattedTime: string;
};

export const EventDetail: FC<EventDetailProps> = ({
  event: { id, sport, location, price, level, ownerId },
  className,
  formattedDate,
  formattedTime,
}) => {
  const sportLabel = getSportLabel(sport);
  const levelLabel = levelLabels[level];

  return (
    <section
      className={cx(
        className,
        'top-14 w-full max-w-lg rounded-md bg-card p-7 text-lg shadow-md lg:max-w-md'
      )}
    >
      <article className="flex flex-col rounded-md">
        <HeartButton className="ml-auto" />
        <table className="text-s mb-6 font-medium">
          <tbody>
            {!!price && <TableRow label="Cena" value={`${price} Kč/osoba`} />}
            <TableRow label="Místo konání" value={location} />
            <TableRow
              label="Datum"
              value={<time className="truncate">{formattedDate}</time>}
            />
            <TableRow
              label="Čas"
              value={<time className="truncate">{formattedTime}</time>}
            />
            <TableRow label="Sport" value={sportLabel} />
            <TableRow label="Pokročilost" value={levelLabel} />
          </tbody>
        </table>

        <EditLink eventId={id} ownerId={ownerId} />
      </article>
    </section>
  );
};
