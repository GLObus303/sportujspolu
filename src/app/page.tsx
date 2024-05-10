import { Events } from '../components/Events';
import { getAllEvents } from '../api/events';
import { Pagination } from '../components/Pagination';
import { PAGINATION } from '../utils/constants';
import { getFirstQueryParam, parseToNumber } from '../utils/functions';

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = getFirstQueryParam(searchParams?.page, PAGINATION.PAGE);
  const limit = getFirstQueryParam(searchParams?.limit, PAGINATION.LIMIT);

  const events = await getAllEvents(page, limit);

  const limitNumber = parseToNumber(limit);
  const pageNumber = parseToNumber(page);

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
