import { LiveMessage } from 'react-aria-live';

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
    <p id={id} role="alert" className={`${className} text-secondary`}>
      {errorMessage}
    </p>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <LiveMessage aria-live="polite" message={errorMessage || ''} />
  </>
);
