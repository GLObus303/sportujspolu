import Link from 'next/link';

import { BlogPosts } from '../../app/blog/BlogPosts';
import { Routes } from '../../constants';
import { CustomLink } from '../CustomLink';

export const BlogPreview = () => (
  <section>
    <h2 className="px-20 text-center text-xl font-medium leading-normal md:px-0 lg:text-start lg:text-3xl">
      Nejnovější články na{' '}
      <Link href={Routes.BLOG} className="hover:text-primary">
        blogu
      </Link>
    </h2>
    <BlogPosts variant="preview" />
    <div className="flex justify-center mt-10">
      <CustomLink href={Routes.BLOG}>Všechny články</CustomLink>
    </div>
  </section>
);
