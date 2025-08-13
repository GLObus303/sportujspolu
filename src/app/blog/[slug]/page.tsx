import { NextPage } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { SanitizedHTML } from '../../../components/SanitizedHTML';
import { postsData } from '../postsData';
import { Container } from '../../../components/Container';
import { MainHeading } from '../../../components/MainHeading';
import { TextContent } from '../../../components/TextContent/TextContent';
import { CTABanner } from '../../../components/CTABanner';

type BlogPostProps = {
  params: Promise<{
    slug: string;
  }>;
};

const findPost = (slug: string) =>
  postsData.find(({ slug: postSlug }) => postSlug === slug);

export const generateMetadata = async ({ params }: BlogPostProps) => {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
    },
  };
};

const BlogPost: NextPage<BlogPostProps> = async ({ params }) => {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return notFound();
  }

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
      <CTABanner />
    </Container>
  );
};

export default BlogPost;
