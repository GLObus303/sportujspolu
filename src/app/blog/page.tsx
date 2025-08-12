import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';
import { BlogPosts } from './BlogPosts';

export const generateMetadata = () => ({
  title: 'Blog',
  description: 'Přečti si naše články o sportu a sportovních akcích.',
  alternates: { canonical: `/blog` },
  openGraph: {
    type: 'website',
    title: 'Blog | SportujSpolu',
    description:
      'Blog SportujSpolu – články o sportu, sportovních akcích a praktické tipy pro sportovní nadšence.',
  },
});

const Blog: NextPage = () => (
  <Container>
    <MainHeading>Blog SportujSpolu</MainHeading>
    <BlogPosts />
  </Container>
);

export default Blog;
