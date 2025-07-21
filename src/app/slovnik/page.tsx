import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { dictionaryData } from './dictionaryData';
import { MainHeading } from '../../components/MainHeading';
import { TextContent } from '../../components/TextContent/TextContent';
import { DictionaryNavigation } from './DictionaryNavigation';

const Dictionary: NextPage = () => (
  <Container className="max-w-4xl">
    <MainHeading>Slovník Pojmů</MainHeading>
    <DictionaryNavigation />
    <TextContent>
      {dictionaryData.map((letterSection, letter) => (
        <section key={letter} className="mb-12">
          <h2 id={letterSection.letter} className="mb-5">
            <span className="text-4xl pr-2 text-pistachio font-black [-webkit-text-stroke:1px_black]">
              {letterSection.letter}
            </span>
          </h2>
          {!!letterSection.terms.length && (
            <dl>
              {letterSection.terms.map((term, termIndex) => (
                <div key={termIndex} className="mb-5">
                  <dt>{term.title} </dt>
                  <dd>
                    <p>{term.description}</p>
                    <ul>
                      {term.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      ))}
    </TextContent>
  </Container>
);

export default Dictionary;
