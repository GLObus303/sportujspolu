import { NextPage } from 'next';
import Link from 'next/link';

import { Container } from '../../components/Container';
import { dictionaryData, dictionaryLetters } from './dictionaryData';
import { MainHeading } from '../../components/MainHeading';
import '../../styles/content.scss';

const Dictionary: NextPage = () => (
  <Container className="max-w-4xl">
    <MainHeading>Slovník Pojmů</MainHeading>
    <nav className="mb-20">
      <ul className="flex px-5 lg:px-0 justify-center text-lg mx-auto md:max-w-md lg:max-w-full space-x-4 lg:justify-between flex-wrap mt-8">
        {dictionaryLetters.map((letter) => (
          <li key={letter}>
            <Link className="hover:text-primary" href={`#${letter}`}>
              {letter}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    {dictionaryData.map((letterSection, letter) => (
      <section key={letter} className="mb-12 content">
        <h2 id={letterSection.letter} className="mb-5">
          <strong>{letterSection.letter}</strong>
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
  </Container>
);

export default Dictionary;
