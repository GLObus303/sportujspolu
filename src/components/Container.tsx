import cx from 'classnames';

import { ChildrenFC } from '../utils/type';

type ContainerProps = {
  className?: string;
};

export const Container: ChildrenFC<ContainerProps> = ({
  children,
  className,
}) => (
  <div className={cx('mx-auto py-14 px-5 md:px-14', className)}>{children}</div>
);
