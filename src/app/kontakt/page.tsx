import { NextPage } from 'next';
import Link from 'next/link';

import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';

const Contact: NextPage = () => (
  <Container>
    <MainHeading>Kontakt</MainHeading>
    <section className="max-w-3xl flex flex-col mx-auto mt-8 text-lg leading-8">
      <Link
        href="mailto:sportujspolu@gmail.com"
        className="hover:text-primary font-medium"
      >
        sportujspolu@gmail.com
      </Link>
      <Link
        href="https://www.instagram.com/sportujspolu/#"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="hover:text-primary font-medium"
      >
        Instagram
      </Link>
    </section>
  </Container>
);

export default Contact;
