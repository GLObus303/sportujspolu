import { NextPage } from 'next';

import { EventForm } from '../../components/EventForm';
import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';

const CreateEventPage: NextPage = () => (
  <Container className="flex flex-col items-center justify-center lg:justify-between xl:flex-row xl:items-start">
    <MainHeading className="xl:text-start">
      Vytvořit sportovní událost
    </MainHeading>
    <EventForm />
  </Container>
);

export default CreateEventPage;
