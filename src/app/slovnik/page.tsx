import { NextPage } from 'next';
import Link from 'next/link';

import { Container } from '../../components/Container';
import { SanitizedHTML } from '../../components/SanitizedHTML';
import { dictionaryData, dictionaryLetters } from './dictionaryData';
import { MainHeading } from '../../components/MainHeading';

const Dictionary: NextPage = () => (
  <Container className="max-w-4xl">
    <MainHeading>Slovník Pojmů</MainHeading>
    <nav>
      <ul className="flex px-5 justify-center text-lg mx-auto md:max-w-md lg:max-w-full space-x-4 flex-wrap mt-8">
        {dictionaryLetters.map((letter) => (
          <li key={letter}>
            <Link className="hover:text-primary" href={`#${letter}`}>
              {letter}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <SanitizedHTML
      htmlContent={dictionaryData}
      className="prose space-y-10 mt-8"
    />
  </Container>
);

export default Dictionary;
