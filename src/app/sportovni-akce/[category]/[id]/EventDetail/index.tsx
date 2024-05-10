import cx from 'classnames';

import { HeartButton } from '../../../../../components/HeartButton';
import { Event } from '../../../../../types/Event';
import { EditLink } from './EditLink';
import { getSportLabel } from '../../../../../utils/functions';
import { levelLabels } from '../../../../../utils/constants';

type EventDetailProps = {
  event: Event;
  className?: string;
  formattedDate: string;
  formattedTime: string;
};

export const EventDetail: React.FC<EventDetailProps> = ({
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
            {!!price && (
              <tr className="border-b border-low-contrast">
                <td className="py-2 md:py-4">Cena</td>
                <td className="py-2 font-light md:py-4">{price} Kč/osoba</td>
              </tr>
            )}
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Místo konání</td>
              <td className="py-2 font-light md:py-4">{location}</td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Datum</td>
              <td className="py-2 font-light md:py-4">
                <time className="truncate">{formattedDate}</time>
              </td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Čas</td>
              <td className="py-2 font-light md:py-4">
                <time className="truncate">{formattedTime}</time>
              </td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Sport</td>
              <td className="py-2 font-light md:py-4">{sportLabel}</td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Pokročilost</td>
              <td className="py-2 font-light md:py-4">{levelLabel}</td>
            </tr>
          </tbody>
        </table>

        <EditLink eventId={id} ownerId={ownerId} />
      </article>
    </section>
  );
};
