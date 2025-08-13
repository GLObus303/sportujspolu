import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';
import { BlogPosts } from './BlogPosts';

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
const Blog: NextPage = () => (
  <Container>
    <MainHeading>Blog SportujSpolu</MainHeading>
    <BlogPosts />
  </Container>
);

export default Blog;
