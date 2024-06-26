import Image from 'next/image';

import { SanitizedHTML } from '../../../../components/SanitizedHTML';
import { EventOwner } from '../../../../types/Event';

type OwnerCardProps = {
  eventOwner: EventOwner;
  className?: string;
};

export const OwnerCard: React.FC<OwnerCardProps> = ({
  eventOwner,
  className,
}) => {
  const { name, image, since, description } = eventOwner || {};

  return (
    <section className={className}>
      <div className="relative flex flex-col items-center md:mt-0 lg:flex-row">
        <figure className="relative h-16 w-16 lg:mr-5">
          <Image
            alt={`Zobrazit profil - ${name}`}
            src={image || '/images/running/7.avif'}
            className="rounded-full object-cover"
            sizes="auto"
            fill
          />
        </figure>
        <div>
          <h2 className="mt-4 text-center text-xl font-medium leading-normal lg:mt-0 lg:whitespace-nowrap lg:text-start lg:text-3xl">
            Sportuj s {name}
          </h2>
          {since && (
            <p className="font-light text-accent lg:whitespace-nowrap">
              na SportujSpolu od roku {since}
            </p>
          )}
        </div>
      </div>
      {description && (
        <>
          <SanitizedHTML
            htmlContent={description}
            className="mt-8 text-lg font-light"
          />
          <hr className="my-16 w-full border-t border-low-contrast" />
        </>
      )}
    </section>
  );
};
