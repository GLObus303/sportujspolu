import { NextPage } from 'next';
import Link from 'next/link';

import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';
import { InstagramIcon } from '../../components/icons/InstagramIcon';
import { EmailIcon } from '../../components/icons/EmailIcon';

const Contact: NextPage = () => (
  <Container className="h-full flex flex-col justify-center">
    <MainHeading>Kontakt</MainHeading>
    <section className="flex flex-col mx-auto max-w-3xl items-center h-full justify-center mt-10">
      <ul className="flex flex-col md:flex-row gap-6">
        <li className="flex flex-col items-center gap-2 rounded-md bg-card shadow-md p-5">
          <EmailIcon />
          <Link
            href="mailto:sportujspolu@gmail.com"
            className="hover-marker font-medium"
          >
            <span>sportujspolu@gmail.com</span>
          </Link>
        </li>

        <li className="flex flex-col items-center gap-2 rounded-md bg-card shadow-md p-5">
          <InstagramIcon />
          <Link
            href="https://www.instagram.com/sportujspolu/#"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover-marker font-medium"
          >
            <span>Instagram @sportujspolu</span>
          </Link>
        </li>
      </ul>
    </section>
  </Container>
);

export default Contact;
