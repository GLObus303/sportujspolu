import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { SanitizedHTML } from '../../components/SanitizedHTML';
import { guidelineData } from './guidelineData';
import { MainHeading } from '../../components/MainHeading';
import { TextContent } from '../../components/TextContent/TextContent';

export const generateMetadata = () => ({
  title: 'Zásady platformy – bezpečné a férové sportování',
  description:
    'Hodnoty a pravidla SportujSpolu: bezpečnost, respekt a férové chování. Pro sportovní nadšence, ženy hledající bezpečí i všechny, kdo chtějí sportovat společně.',
  alternates: { canonical: '/zasady-platformy' },
  openGraph: {
    type: 'website',
    title: 'Zásady platformy | SportujSpolu',
    description:
      'Zjisti, jak funguje SportujSpolu – bezpečné a přátelské prostředí, pravidla chování a cíle naší komunity. Připoj se a sportuj s respektem.',
  },
});

const PlatformGuideLines: NextPage = () => (
  <Container className="max-w-4xl">
    <MainHeading className="mb-12">Zásady platformy SportujSpolu</MainHeading>
    {guidelineData.map((item) => (
      <TextContent key={item.title}>
        <h2>{item.title}</h2>
        {item.description.text.map((text, index) => (
          <SanitizedHTML
            key={index}
            htmlContent={text}
            className="mb-5 font-light"
          />
        ))}
        <ul className="mb-12">
          {item.description.list.map((point, index) => (
            <li key={index} className="mb-5 flex">
              <SanitizedHTML htmlContent={point} />
            </li>
          ))}
        </ul>
      </TextContent>
    ))}
  </Container>
);

export default PlatformGuideLines;
