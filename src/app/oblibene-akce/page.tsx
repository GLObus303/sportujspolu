import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { EventSection } from '../../components/EventSection';
import { getAllEvents } from '../../api/events';

const LikedEvents: NextPage = async () => {
  const events = await getAllEvents();

  return (
    <Container>
      <EventSection
        events={events}
        headline="Oblíbené sportovní akce"
        isLikedEvents
      />
    </Container>
  );
};

export default LikedEvents;
