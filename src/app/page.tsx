import { api } from '../api/base';
import { Events } from '../components/Events';
import { Event } from '../types/Event';

const Home = async () => {
  const response = await api('events');
  const events = await response.json<Event[]>();

  return <Events events={events} />;
};

export default Home;
