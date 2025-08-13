import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';
import { InstagramIcon } from '../../components/icons/InstagramIcon';
import { FacebookIcon } from '../../components/icons/FacebookIcon';
import { EmailIcon } from '../../components/icons/EmailIcon';
import { ContactItem } from './ContactItem';

export const generateMetadata = () => ({
  title: 'Kontaktuj nás',
  description:
    'Kontaktuj tým SportujSpolu s dotazy, návrhy nebo zpětnou vazbou. Napiš nám e-mail nebo se ozvi přes sociální sítě.',
  alternates: { canonical: `/kontakt` },
  openGraph: {
    type: 'website',
    title: 'Kontaktuj nás | SportujSpolu',
    description:
      'Máte dotaz, nápad nebo zpětnou vazbu? Kontaktujte tým SportujSpolu e-mailem nebo přes naše sociální sítě.',
  },
});

const Contact: NextPage = () => (
  <Container className="h-full flex flex-col justify-center">
    <MainHeading>Kontakt</MainHeading>
    <section className="flex flex-col mx-auto max-w-3xl items-center h-full justify-center mt-10">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContactItem
          icon={<EmailIcon />}
          href="mailto:sportujspolu@gmail.com"
          label="sportujspolu@gmail.com"
        />
        <ContactItem
          icon={<InstagramIcon />}
          href="https://www.instagram.com/sportujspolu/#"
          label="Instagram @sportujspolu"
        />
        <ContactItem
          icon={<FacebookIcon />}
          href="https://www.facebook.com/profile.php?id=61579596710502"
          label="Facebook SportujSpolu"
        />
      </ul>
    </section>
  </Container>
);

export default Contact;
