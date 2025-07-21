'use client';

import { Container } from '../components/Container';
import { MainHeading } from '../components/MainHeading';
import { Button } from '../components/Button';

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => (
  <Container className="h-full flex flex-col">
    <MainHeading className="xl:text-start">
      <span className="text-secondary">Ajéje, </span>
      {error.message === 'Request timed out'
        ? 'server je zamrzlý'
        : 'něco se pokazilo'}
    </MainHeading>
    <p className="text-xl mt-5 text-center xl:text-start">
      {' '}
      {error.message === 'Request timed out'
        ? 'Vrať se pár minut a bude fungovat.'
        : 'Na opravě pracujeme, zkus to později.'}
    </p>
    <div className="h-full flex justify-center items-center">
      <Button onClick={reset}>Zkusit znovu</Button>
    </div>
  </Container>
);

export default ErrorPage;
