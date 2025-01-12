import { NextPage } from 'next';

import { EventForm } from '../../../components/EventForm';
import { getEvent } from '../../../api/events';
import { Container } from '../../../components/Container';
import { MainHeading } from '../../../components/MainHeading';

type EditEventPageProps = {
  params: Promise<{ id: string }>;
};

const EditEventPage: NextPage<EditEventPageProps> = async ({ params }) => {
  const { id } = await params;
  const event = await getEvent(id);

  return (
    <Container className="flex flex-col items-center justify-center lg:justify-between xl:flex-row xl:items-start">
      <MainHeading className="xl:text-start">
        Upravit sportovní událost
      </MainHeading>
      <EventForm event={event} />
    </Container>
  );
};

export default EditEventPage;
