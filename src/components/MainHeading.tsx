import cx from 'classnames';

import { ChildrenFC } from '../utils/type';

type MainHeadingProps = {
  className?: string;
};

export const MainHeading: ChildrenFC<MainHeadingProps> = ({
  children,
  className,
}) => (
  <h1
    className={cx(
      'mt-16 px-5 xl:px-0 text-center text-3xl font-medium leading-normal md:mt-14 lg:text-4xl',
      className,
    )}
  >
    {children}
  </h1>
);
