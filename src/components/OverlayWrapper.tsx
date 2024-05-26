import cx from 'classnames';

import { CrossButton } from './CrossButton';
import { ChildrenFC } from '../utils/type';

type OverlayWrapperProps = {
  className?: string;
  onClose: () => void;
};

export const OverlayWrapper: ChildrenFC<OverlayWrapperProps> = ({
  children,
  className,
  onClose,
}) => (
  <section
    className={cx(
      'fixed inset-0 z-popup grid h-full w-full place-items-center overflow-auto bg-smoke-glass px-5 py-10',
      className
    )}
  >
    <article className="relative mx-auto flex h-fit w-fit flex-col items-center justify-center rounded-md bg-card p-7 text-center text-xl">
      {children}
      <CrossButton onClick={onClose} className="absolute right-5 top-5" />
    </article>
  </section>
);
