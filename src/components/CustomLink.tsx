'use client';

import Link from 'next/link';
import cx from 'classnames';

import { ChildrenFC } from '../utils/type';

type CustomLinkProps = {
  href: string;
  className?: string;
};

export const CustomLink: ChildrenFC<CustomLinkProps> = ({
  href,
  children,
  className,
}) => (
  <Link
    className={cx(
      className,
      `shrink-0 h-min rounded-full bg-button px-5 py-2 text-center text-base text-reverse-text hover:text-primary`,
    )}
    href={href}
  >
    {children}
  </Link>
);
