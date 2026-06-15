import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';
import { TextContent } from '../../components/TextContent/TextContent';
import { CalculatorsList } from './CalculatorsList';

export const generateMetadata = () => ({
  title: 'Kalkulačky',
  description:
    'Sportovní kalkulačky zdarma: běžecké tempo, BMI, srdeční zóny, spálené kalorie, 1RM a další. Nástroje pro aktivní sportovce v Česku.',
  alternates: { canonical: '/kalkulacky' },
  openGraph: {
    type: 'website',
    title: 'Kalkulačky | SportujSpolu',
    description:
      'Bezplatné sportovní kalkulačky pro běžce, cyklisty i fitness nadšence. Vypočítej tempo, kalorie, zóny a makra.',
  },
});

const CalculatorsPage: NextPage = () => (
  <Container className="max-w-4xl">
    <MainHeading>Kalkulačky</MainHeading>
    <TextContent>
      <p>
        Praktické nástroje pro sportovce — od běžeckého tempa po výpočet kalorií
        a maker. Vše zdarma, bez registrace. Výsledky jsou orientační; pro
        zdravotní rozhodnutí se poraď s odborníkem.
      </p>
    </TextContent>
    <CalculatorsList />
  </Container>
);

export default CalculatorsPage;
