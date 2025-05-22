import { Container } from '../components/Container';
import { MainHeading } from '../components/MainHeading';
import { Routes } from '../constants';
import { CustomLink } from '../components/CustomLink';

const NotFound = () => (
  <Container className="h-full flex flex-col">
    <MainHeading className="xl:text-start">
      <span className="text-secondary">404 </span>- Stránka nenalezena
    </MainHeading>
    <div className="h-full flex justify-center items-center">
      <CustomLink href={Routes.DASHBOARD}>Zpět na domovskou stránku</CustomLink>
    </div>
  </Container>
);

export default NotFound;
