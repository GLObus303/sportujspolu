import { NextPage } from 'next';

import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';
import { BlogPosts } from './BlogPosts';

const Blog: NextPage = () => (
  <Container>
    <MainHeading>Blog SportujSpolu</MainHeading>
    <BlogPosts />
  </Container>
);

export default Blog;
