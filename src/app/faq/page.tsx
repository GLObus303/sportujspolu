import { Fragment } from 'react';
import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { SanitizedHTML } from '../../components/SanitizedHTML';
import { faqData } from './faqData';
import { MainHeading } from '../../components/MainHeading';
import { TextContent } from '../../components/TextContent/TextContent';

export const generateMetadata = () => ({
  title: 'FAQ – Často kladené otázky',
  description:
    'Odpovědi na nejčastější dotazy ke sportovním akcím, registraci, úrovním a organizaci. Najdi řešení rychle a sportuj s námi.',
  alternates: { canonical: `/faq` },
  openGraph: {
    type: 'article',
    title: 'FAQ – Často kladené otázky | SportujSpolu',
    description:
      'Odpovědi na nejčastější dotazy ke sportovním akcím, registraci, úrovním a organizaci. Najdi řešení rychle a sportuj s námi.',
  },
});

const FAQ: NextPage = () => (
  <Container className="max-w-4xl">
    <MainHeading className="mb-12">FAQ</MainHeading>
    <TextContent>
      <dl>
        {faqData.map((question, index) => (
          <Fragment key={index}>
            <dt className="text-2xl font-medium">
              <span className="text-2xl pr-2 font-black text-pistachio [-webkit-text-stroke:1px_black]">
                {index + 1}.
              </span>
              {question.title}
            </dt>
            <dd>
              <SanitizedHTML
                htmlContent={question.description}
                className="mb-5"
              />
            </dd>
          </Fragment>
        ))}
      </dl>
    </TextContent>
  </Container>
);

export default FAQ;
