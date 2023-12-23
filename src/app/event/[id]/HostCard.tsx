import Image from 'next/image';
import Link from 'next/link';

import { EventHost } from '../../../types/EventHost';
import { SanitizedHTML } from '../../../components/SanitizedHTML';

type HostCardProps = {
  eventHost: EventHost;
  className?: string;
};

export const HostCard: React.FC<HostCardProps> = ({ eventHost, className }) => {
  const { name, since, description } = eventHost;

  return (
    <section className={className}>
      <div className="relative flex flex-col items-center md:mt-0 lg:flex-row">
        <Link href="/" className="relative h-16 w-16 lg:mr-5">
          <Image
            alt={`Zobrazit profil - ${name}`}
            src="/images/2.png"
            className="rounded-full object-cover"
            fill
          />
        </Link>
        <div>
          <h2 className="mt-4 text-center text-xl font-medium leading-normal lg:mt-0 lg:whitespace-nowrap lg:text-start lg:text-3xl">
            Sportuj s Instruktorkou{' '}
            <Link href="/" className="hover:text-primary">
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
