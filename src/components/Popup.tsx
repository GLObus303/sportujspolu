import { ReactNode } from 'react';
import cx from 'classnames';

import { CrossButton } from './CrossButton';

type PopupProps = {
  children: ReactNode;
  onClose: () => void;
  className?: string;
};

export const Popup: React.FC<PopupProps> = ({
  children,
  className,
  onClose,
}) => (
  <section
    className={cx(
      'fixed inset-0 z-popup flex h-full w-full items-center justify-center bg-black bg-opacity-50 px-5',
      className
    )}
  >
    <article className="relative flex w-full max-w-md flex-col items-center justify-center rounded-md bg-card p-7 text-center text-xl">
      {children}
      <CrossButton onClick={onClose} className="absolute right-5 top-5" />
    </article>
  </section>
);
