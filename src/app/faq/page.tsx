import { Fragment } from 'react';
import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { SanitizedHTML } from '../../components/SanitizedHTML';
import { faqData } from './faqData';
import { MainHeading } from '../../components/MainHeading';
import { TextContent } from '../../components/TextContent/TextContent';

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
