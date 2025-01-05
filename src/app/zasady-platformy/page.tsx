import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { SanitizedHTML } from '../../components/SanitizedHTML';
import { guidelineData } from './guidelineData';
import { MainHeading } from '../../components/MainHeading';

const PlatformGuideLines: NextPage = () => (
  <Container className="max-w-4xl">
    <MainHeading>Zásady platformy SportujSpolu</MainHeading>
    <SanitizedHTML
      htmlContent={guidelineData}
      className="prose space-y-10 mt-8"
    />
  </Container>
);

export default PlatformGuideLines;
