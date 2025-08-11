import { CustomLink } from './CustomLink';
import { HeroImage } from './HomeHero/HeroImage';
import { Routes } from '../constants';
import { getDefaultTheme } from '../utils/getDefaultTheme';

export const CTABanner = async () => {
  const defaultTheme = await getDefaultTheme();

  return (
    <section className="flex flex-col items-center justify-between lg:flex-row w-full rounded-lg py-10 pl-10 bg-soft-background mt-10">
      <div className="w-full max-w-md text-center lg:text-left lg:w-1/2 lg:mr-5 flex flex-col items-center lg:items-start">
        <h1 className="text-3xl font-semibold mb-4">
          Líbil se ti článek? Začni&nbsp;s&nbsp;námi sportovat!
        </h1>
        <p className="mb-10">
          Jednoduše vytvoř sportovní událost a&nbsp;pozvi své přátele. Nebo
          seber odvahu a vyraz na sportovní akci ve svém okolí.
        </p>
        <CustomLink href={Routes.CREATE_EVENT}>
          Přidat sportovní akci
        </CustomLink>
      </div>
      <figure className="w-full lg:w-1/2 mt-10 lg:mt-0 max-w-sm">
        <HeroImage defaultTheme={defaultTheme} />
      </figure>
    </section>
  );
};
