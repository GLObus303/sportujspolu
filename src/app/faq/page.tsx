import { Fragment } from 'react';
import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { SanitizedHTML } from '../../components/SanitizedHTML';
import { faqData } from './faqData';
import { MainHeading } from '../../components/MainHeading';
import '../../styles/content.scss';

const FAQ: NextPage = () => (
  <Container className="max-w-4xl">
    <MainHeading className="mb-12">FAQ</MainHeading>
    <dl className="content">
      {faqData.map((question, index) => (
        <Fragment key={index}>
          <dt className="text-2xl font-medium">{question.title}</dt>
          <dd>
            <SanitizedHTML
              htmlContent={question.description}
              className="mb-5"
            />
          </dd>
        </Fragment>
      ))}
    </dl>
  </Container>
);

export default FAQ;
