import { NextPage } from 'next';

import { getPaginatedEvents } from '../api/events';
import { PAGINATION } from '../constants';
import { getFirstQueryParam } from '../utils/getFirstQueryParam';
import { Container } from '../components/Container';
import { BlogPreview } from '../components/BlogPreview';
import { SportsNavigation } from '../components/SportsNavigation';
import { FaqSection } from '../components/FaqSection';
import { HomeHero } from '../components/HomeHero';
import { EventSection } from '../components/EventSection';

type HomeProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const Home: NextPage<HomeProps> = async ({ searchParams }) => {
  const { page: pageParam, limit: limitParam } = (await searchParams) || {};
  const page = getFirstQueryParam(pageParam, PAGINATION.PAGE);
  const limit = getFirstQueryParam(limitParam, PAGINATION.LIMIT);

  const events = await getPaginatedEvents({ page, limit });

  const limitNumber = Number(limit) || 1;
  const pageNumber = Number(page) || 1;

  return (
    <>
      <HomeHero />
      <Container className="pt-0">
        <SportsNavigation />
        <EventSection
          events={events}
          headline="Všechny sportovní akce v&nbsp;Česku"
          limitNumber={limitNumber}
          pageNumber={pageNumber}
          limit={limit}
        />
        <hr className="my-16 border-t border-low-contrast" />
        <BlogPreview />
        <hr className="my-16 border-t border-low-contrast" />
        <FaqSection />
      </Container>
    </>
  );
};

export default Home;
