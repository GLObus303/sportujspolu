import { CustomLink } from '../../components/CustomLink';
import { Routes } from '../../constants';
import { HeroImage } from './HeroImage';

export const HomeHero = () => (
  <section className="flex flex-col items-center justify-between gap-20 lg:flex-row w-full rounded-lg pt-36 pr-10 pl-10 pb-10 bg-soft-background">
    <div className="w-full lg:w-1/2 lg:mr-20">
      <h1 className="text-5xl font-semibold mb-4 max-w-xl hover-marker">
        SportujSpolu – zážitky začínají pohybem.
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
