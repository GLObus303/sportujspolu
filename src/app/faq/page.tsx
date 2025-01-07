import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { SanitizedHTML } from '../../components/SanitizedHTML';
import { faqData } from './faqData';
import { MainHeading } from '../../components/MainHeading';

const FAQ: NextPage = () => (
  <Container className="max-w-4xl">
    <MainHeading>FAQ</MainHeading>
    <SanitizedHTML htmlContent={faqData} className="content space-y-10 mt-8" />
  </Container>
);

export default FAQ;
