import Image from 'next/image';
import Link from 'next/link';

import { postsData } from './postsData';
import { Routes } from '../../constants';
import { SanitizedHTML } from '../../components/SanitizedHTML';

type BlogPostsProps = {
  variant?: 'preview' | 'full';
};

export const BlogPosts: React.FC<BlogPostsProps> = ({ variant = 'full' }) => {
  const isPreview = variant === 'preview';

  const posts = isPreview ? postsData.slice(0, 3) : postsData;

  return (
    <section className="mt-10 grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2 sm:px-5 md:mt-14 md:px-0 lg:grid-cols-3">
      {posts.map((post) => (
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
            <p className="absolute top-4 left-4 text-sm px-3 py-1 bg-pistachio rounded-full mb-2 inline-block">
              {post.category}
            </p>
            <div className="p-4">
              <h2
                id={`post-title-${post.id}`}
                className="text-2xl font-medium line-clamp-2"
              >
                {post.title}
              </h2>
              <SanitizedHTML
                htmlContent={(isPreview ? post.preview : post.content) || ''}
                className="mt-2 line-clamp-4"
              />
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
};
