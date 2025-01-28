import { NextPage } from 'next';

import { Events } from '../components/Events';
import { getPaginatedEvents } from '../api/events';
import { Pagination } from '../components/Pagination';
import { PAGINATION, Routes } from '../constants';
import { getFirstQueryParam } from '../utils/getFirstQueryParam';
import { Container } from '../components/Container';
import { MainHeading } from '../components/MainHeading';
import { BlogPreview } from '../components/BlogPreview';
import { BannerSection } from '../components/BannerSection';

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
    <Container>
      <MainHeading className="lg:text-start">
        Všechny sportovní akce v&nbsp;Česku
      </MainHeading>
      <Events events={events} className="grid-rows-2" />
      <Pagination
        hasNextPage={events.length === limitNumber}
        hasPrevPage={pageNumber !== 1}
        page={pageNumber}
        route={Routes.DASHBOARD}
        limit={limit}
      />
      <hr className="my-16 border-t border-low-contrast" />
      <BannerSection />
      <hr className="my-16 border-t border-low-contrast" />
      <BlogPreview />
    </Container>
  );
};

export default Home;
