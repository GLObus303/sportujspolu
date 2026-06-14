import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';
import { BlogPosts } from './BlogPosts';

export const generateMetadata = () => ({
  title: 'Blog',
  description:
    'Tipy, inspirace a rady pro sportovce. Přečtěte si články o trénování, motivaci, výživě a společném sportování na blogu SportujSpolu.',
  alternates: { canonical: `/blog` },
  openGraph: {
    type: 'website',
    title: 'Blog | SportujSpolu',
    description:
      'Tipy, inspirace a rady pro sportovce. Přečtěte si články o trénování, motivaci, výživě a společném sportování.',
  },
});
const Blog: NextPage = () => (
  <Container>
    <MainHeading>Blog SportujSpolu</MainHeading>
    <BlogPosts />
  </Container>
);

export default Blog;
