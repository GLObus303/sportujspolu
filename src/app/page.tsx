import { api } from '../api/base';
import { Events } from '../components/Events';
import { Event } from '../types';

const Home = async () => {
  const response = await api('events');
  const events: Event[] = await response.json();

  return <Events events={events} />;
};

export default Home;
