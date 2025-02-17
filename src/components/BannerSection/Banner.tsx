import cx from 'classnames';

import { CustomLink } from '../CustomLink';

type BannerProps = {
  variant?: 'primary' | 'secondary';
  content: {
    title: string;
    description: string;
    link: string;
    linkText: string;
  };
};

export const Banner: React.FC<BannerProps> = ({
  variant = 'primary',
  content,
}) => (
  <article
    className={cx(
      'p-5 md:p-20 rounded-lg lg:text-start text-center',
      variant === 'primary' && 'bg-gradient-banner-primary',
      variant === 'secondary' && 'bg-gradient-banner-secondary',
    )}
  >
    <h2 className="px-5 0 mb-2 text-xl font-medium max-w-2xl leading-normal md:px-0 lg:text-3xl">
      {content.title}
    </h2>
    <p className="max-w-2xl text-lg mb-10">{content.description}</p>
    <CustomLink href={content.link}>{content.linkText}</CustomLink>
  </article>
);
