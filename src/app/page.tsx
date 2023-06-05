import ky from 'ky';

import { Events } from '../components/Events';

type Event = {
  id: number;
  sport: string;
  name: string;
};

const Home = async () => {
  const response = await ky(
    'https://sportujspolu-api.onrender.com/api/v1/events',
  );
  const events: Event[] = await response.json();

  return <Events events={events} />;
};

export default Home;
