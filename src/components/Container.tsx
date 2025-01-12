import cx from 'classnames';

import { ChildrenFC } from '../utils/type';

type ContainerProps = {
  className?: string;
};

export const Container: ChildrenFC<ContainerProps> = ({
  children,
  className,
}) => (
  <div className={cx('mx-auto px-5 py-14 md:px-14', className)}>{children}</div>
);
