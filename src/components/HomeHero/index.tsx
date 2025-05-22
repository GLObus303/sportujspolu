import { CustomLink } from '../../components/CustomLink';
import { Routes } from '../../constants';
import { HeroImage } from './HeroImage';

export const HomeHero = () => (
  <section className="flex flex-col items-center justify-between gap-10 md:gap-20 lg:flex-row w-full rounded-lg pt-36 pr-6 pl-6 md:pr-10 md:pl-10 pb-10 bg-soft-background">
    <div className="w-full lg:w-1/2 lg:mr-20">
      <h1 className="text-4xl md:text-6xl leading-snug font-medium mb-4 max-w-xl md:leading-tight">
        <span className="relative">
          <span className="absolute bottom-[10%] left-0 w-full h-[55%] bg-pistachio rounded-full translate-x-3" />
          <span className="relative px-2">SportujSpolu</span>
        </span>{' '}
        – zážitky začínají pohybem.
      </h1>
      <p className="text-xl mb-10 max-w-xl">
        Sportuj s&nbsp;námi! Vytvoř sportovní události a&nbsp;pozvi své přátele.
        Nebo seber odvahu a vyraz na sportovní akci ve svém okolí.
      </p>
      <CustomLink href={Routes.CREATE_EVENT}>Přidat sportovní akci</CustomLink>
    </div>
    <figure className="w-full lg:w-1/2">
      <HeroImage />
    </figure>
  </section>
);
