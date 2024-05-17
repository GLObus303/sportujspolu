import { FC } from 'react';
import { LiveMessage } from 'react-aria-live';
import cx from 'classnames';

type ErrorMessageProps = {
  errorMessage: string;
  className?: string;
  id?: string;
};

export const AriaLiveErrorMessage: FC<ErrorMessageProps> = ({
  errorMessage = '',
  className,
  id,
}) => (
  <>
    <p id={id} role="alert" className={cx(className, 'text-secondary')}>
      {errorMessage}
    </p>
    <LiveMessage aria-live="polite" message={errorMessage} />
  </>
);
