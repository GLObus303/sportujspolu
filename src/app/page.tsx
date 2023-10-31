import { Events } from '../components/Events';
import { getAllEvents } from '../api/events';

const Home = async () => {
  const events = (await getAllEvents()) || [];

  return <Events events={events} />;
};

export default Home;
