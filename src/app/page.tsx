import { NextPage } from 'next';

import { Events } from '../components/Events';
import { getAllEvents } from '../api/events';
import { Pagination } from '../components/Pagination';
import { PAGINATION } from '../constants';
import { getFirstQueryParam } from '../utils/getFirstQueryParam';

type HomeProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

const Home: NextPage<HomeProps> = async ({ searchParams }) => {
  const page = getFirstQueryParam(searchParams?.page, PAGINATION.PAGE);
  const limit = getFirstQueryParam(searchParams?.limit, PAGINATION.LIMIT);

  const events = await getAllEvents(page, limit);

  const limitNumber = Number(limit) || 1;
  const pageNumber = Number(page) || 1;

  return (
    <>
      <h1 className="mt-24 px-28 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 lg:text-start lg:text-4xl">
        Všechny sportovní akce v&nbsp;Česku
      </h1>
      <Events events={events} />
      <Pagination
        hasNextPage={events.length === limitNumber}
        hasPrevPage={pageNumber !== 1}
        page={pageNumber}
        limit={limit}
      />
    </>
  );
};

export default Home;
