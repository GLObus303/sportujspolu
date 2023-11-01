import { LiveMessage } from 'react-aria-live';
import cx from 'classnames';

type ErrorMessageProps = {
  errorMessage: string | undefined;
  className?: string;
  id?: string;
};

export const AriaLiveErrorMessage: React.FC<ErrorMessageProps> = ({
  errorMessage,
  className,
  id,
}) => (
  <>
    <p id={id} role="alert" className={cx(className, 'text-secondary')}>
      {errorMessage}
    </p>
    <LiveMessage aria-live="polite" message={errorMessage || ''} />
  </>
);
