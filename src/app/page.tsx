import { Events } from '../components/Events';
import { getAllEvents } from '../api/events';

const Home = async () => {
  const events = (await getAllEvents()) || [];

  return (
    <>
      <h1 className="mt-24 px-28 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 lg:text-start lg:text-4xl">
        Všechny sportovní akce v&nbsp;Česku
      </h1>
      <Events events={events} />
    </>
  );
};

export default Home;
