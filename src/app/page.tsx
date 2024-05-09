import { Events } from '../components/Events';
import { getAllEvents } from '../api/events';
import { Pagination } from '../components/Pagination';
import { PAGINATION } from '../utils/constants';

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page: string =
    typeof searchParams?.page === 'string'
      ? searchParams.page
      : PAGINATION.PAGE;
  const limit: string =
    typeof searchParams?.limit === 'string'
      ? searchParams.limit
      : PAGINATION.LIMIT;

  const events = (await getAllEvents(page, limit)) || [];

  return (
    <>
      <h1 className="mt-24 px-28 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 lg:text-start lg:text-4xl">
        Všechny sportovní akce v&nbsp;Česku
      </h1>
      <Events events={events} />
      <Pagination
        hasNextPage={events.length === Number(limit)}
        hasPrevPage={Number(page) !== 1}
      />
    </>
  );
};

export default Home;
