import React from 'react';
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
    <LiveMessage aria-live="polite" message={errorMessage || ''} />
  </>
);
