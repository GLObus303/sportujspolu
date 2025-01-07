import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { postsData } from './postsData';
import { Routes } from '../../constants';
import { SanitizedHTML } from '../../components/SanitizedHTML';
import { Container } from '../../components/Container';
import { MainHeading } from '../../components/MainHeading';

const Blog: NextPage = () => (
  <Container>
    <MainHeading>Blog SportujSpolu</MainHeading>
    <section className="mt-10 grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2 sm:px-5 md:mt-14 md:px-0 lg:grid-cols-3">
      {postsData.map((post) => (
        <article
          key={post.id}
          className="relative rounded-md bg-card shadow-md overflow-hidden"
          aria-labelledby={`post-title-${post.id}`}
        >
          <Link href={`${Routes.BLOG}/${post.slug}`}>
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2
                id={`post-title-${post.id}`}
                className="text-2xl font-semibold line-clamp-2"
              >
                {post.title}
              </h2>
              <SanitizedHTML
                htmlContent={post.content}
                className="mt-2 line-clamp-4 content"
              />
            </div>
          </Link>
        </article>
      ))}
    </section>
  </Container>
);

export default Blog;
