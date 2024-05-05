import Image from 'next/image';
import Link from 'next/link';

import { EventOwner } from '../../../types/EventOwner';
import { SanitizedHTML } from '../../../components/SanitizedHTML';
import { Routes } from '../../../utils/constants';

type OwnerCardProps = {
  eventOwner: EventOwner;
  className?: string;
};

export const OwnerCard: React.FC<OwnerCardProps> = ({
  eventOwner,
  className,
}) => {
  const { name, since, description } = eventOwner;

  return (
    <section className={className}>
      <div className="relative flex flex-col items-center md:mt-0 lg:flex-row">
        <Link
          href={`${Routes.USER}/2tjsxi7028a7`}
          className="relative h-16 w-16 lg:mr-5"
        >
          <Image
            alt={`Zobrazit profil - ${name}`}
            src="/images/running/7.avif"
            className="rounded-full object-cover"
            sizes="auto"
            fill
          />
        </Link>
        <div>
          <h2 className="mt-4 text-center text-xl font-medium leading-normal lg:mt-0 lg:whitespace-nowrap lg:text-start lg:text-3xl">
            Sportuj s Instruktorkou{' '}
            <Link
              href={`${Routes.USER}/2tjsxi7028a7`}
              className="hover:text-primary"
            >
              {name}
            </Link>
          </h2>
          <p className="font-light text-accent lg:whitespace-nowrap">
            Instruktorkou na SportujSpolu od roku {since}
          </p>
        </div>
      </div>
      <SanitizedHTML
        htmlContent={description}
        className="mt-8 text-lg font-light"
      />
      <hr className="my-16 w-full border-t border-low-contrast" />
    </section>
  );
};
