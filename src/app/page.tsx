import { Events } from '../components/Events';
import { getEvents } from '../api/events';

const Home = async () => {
  const events = (await getEvents()) || [];

  return <Events events={events} />;
};

export default Home;
