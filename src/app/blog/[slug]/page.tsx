import { NextPage } from 'next';
import Image from 'next/image';

import { SanitizedHTML } from '../../../components/SanitizedHTML';
import { postsData, defaultPost } from '../postsData';
import { Container } from '../../../components/Container';
import { MainHeading } from '../../../components/MainHeading';
import { TextContent } from '../../../components/TextContent/TextContent';

type BlogPostProps = {
  params: {
    slug: string;
  };
};

const BlogPost: NextPage<BlogPostProps> = ({ params: { slug } }) => {
  const post =
    postsData.find(({ slug: postSlug }) => postSlug === slug) || defaultPost;

  return (
    <Container className="max-w-4xl">
      <TextContent>
        <Image
          src={post?.image}
          alt={post?.title}
          className="rounded-md mt-3"
          width={854}
          height={284}
        />
        <MainHeading className="lg:text-start">{post?.title}</MainHeading>
        <SanitizedHTML
          htmlContent={post?.content}
          className="space-y-10 mt-8"
        />
      </TextContent>
    </Container>
  );
};

export default BlogPost;
