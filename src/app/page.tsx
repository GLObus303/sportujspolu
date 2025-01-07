import { NextPage } from 'next';

import { Events } from '../components/Events';
import { getPaginatedEvents } from '../api/events';
import { Pagination } from '../components/Pagination';
import { PAGINATION, Routes } from '../constants';
import { getFirstQueryParam } from '../utils/getFirstQueryParam';
import { Container } from '../components/Container';
import { MainHeading } from '../components/MainHeading';

type HomeProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

const Home: NextPage<HomeProps> = async ({ searchParams }) => {
  const page = getFirstQueryParam(searchParams?.page, PAGINATION.PAGE);
  const limit = getFirstQueryParam(searchParams?.limit, PAGINATION.LIMIT);

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
    </Container>
  );
};

export default Home;
