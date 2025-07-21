import { Container } from '../../../components/Container';
import { MainHeading } from '../../../components/MainHeading';
import { SportsType, sportsLabels, sportsSet } from '../../../constants';
import NotFound from '../../not-found';
import { Events } from '../../../components/Events';
import { getAllEvents } from '../../../api/events';
import { SportsNavigation } from '../../../components/SportsNavigation';
import { BeFirst } from '../../../components/BeFirst';
import { Routes } from '../../../constants';
import { RankingIcon } from '../../../components/icons/RankingIcon';

type SportPageProps = {
  params: Promise<{ sport: SportsType }>;
};

const SportPage = async ({ params }: SportPageProps) => {
  const { sport } = await params;

  if (!sportsSet.has(sport)) {
    return <NotFound />;
  }

  const events = await getAllEvents();

  const filteredEvents = events.filter((event) => event.sport === sport);

  return (
    <Container className="flex flex-col h-full">
      <SportsNavigation />
      <MainHeading className="lg:text-start">
        Sportovní akce v Česku - <span>{sportsLabels[sport]}</span>
      </MainHeading>
      {!!filteredEvents.length ? (
        <Events events={filteredEvents} />
      ) : (
        <BeFirst
          imageIcon={<RankingIcon />}
          buttonText="Přidat sportovní akci"
          link={`${Routes.CREATE_EVENT}?sport=${sport}`}
          caption={`V kategorii ${sportsLabels[sport]} zatím není žádná sportovní událost. Buď první, kdo si ji vytvoří!`}
        />
      )}
    </Container>
  );
};

export default SportPage;
