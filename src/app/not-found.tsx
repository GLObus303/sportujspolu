import Link from 'next/link';

import { Container } from '../components/Container';
import { MainHeading } from '../components/MainHeading';

const NotFound = () => (
  <Container>
    <MainHeading className="xl:text-start">
      <span className="text-secondary">404 </span>- Stránka nenalezena
    </MainHeading>
    <p className="text-xl underline hover:text-primary text-center xl:text-start">
      <Link href="/">Zpět na domovskou stránku</Link>
    </p>
  </Container>
);

export default NotFound;
