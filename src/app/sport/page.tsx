import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';
import { SportsType, sportsSet, Routes } from '../../constants';
import NotFound from '../not-found';
import { Events } from '../../components/Events';
import { getAllEvents } from '../../api/events';
import { SportsNavigation } from '../../components/SportsNavigation';
import { BeFirst } from '../../components/BeFirst';
import { RankingIcon } from '../../components/icons/RankingIcon';

type SportPageProps = {
  params: Promise<{ sport: SportsType }>;
};

const SportPage: React.FC<SportPageProps> = async ({ params }) => {
  const { sport } = await params;

  if (!sportsSet.has(sport)) {
    return <NotFound />;
  }

  const events = await getAllEvents();

  return (
    <Container className="flex flex-col h-full">
      <SportsNavigation />
      <MainHeading className="lg:text-start">
        Všechny sportovní akce v Česku
      </MainHeading>
      {events.length ? (
        <Events events={events} />
      ) : (
        <BeFirst
          imageIcon={<RankingIcon />}
          buttonText="Přidat sportovní akci"
          link={Routes.CREATE_EVENT}
          caption="Buď první, kdo vytvoří sportovní událost!"
        />
      )}
    </Container>
  );
};

export default SportPage;
