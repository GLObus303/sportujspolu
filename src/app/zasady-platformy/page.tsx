import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { SanitizedHTML } from '../../components/SanitizedHTML';
import { guidelineData } from './guidelineData';
import { MainHeading } from '../../components/MainHeading';
import { TextContent } from '../../components/TextContent/TextContent';

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
