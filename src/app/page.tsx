import { api } from './api/client';
import { Events } from '../components/Events';

type Event = {
  id: number;
  sport: string;
  name: string;
};

const Home = async () => {
  const response = await api('events');
  const events: Event[] = await response.json();

  return <Events events={events} />;
};

export default Home;
