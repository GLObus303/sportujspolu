import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';
import { useState } from 'react';

import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';
import { EyeIcon } from './icons/EyeIcon';
import { useWatchedValue } from '../hooks/useWatchedValue';

type InputProps = {
  register: any;
  name?: 'password' | 'passwordConfirmation';
  label?: string;
  errors: FieldErrors;
  watchedValue?: string;
  className?: string;
  labelClassName?: string;
};

export const PasswordInput: React.FC<InputProps> = ({
  register,
  name = 'password',
  label = 'Heslo',
  errors,
  className = '',
  labelClassName = 'text-xs text-dark-gray dark:text-text',
}) => {
  const watchedValue = useWatchedValue(name);
  const [isVisiblePassword, setVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setVisiblePassword(!isVisiblePassword);
  };

  return (
    <label className="relative mb-5 w-full">
      <span className={labelClassName}>{label}</span>
      <input
        aria-describedby={`${name}-error`}
        aria-invalid={!!errors?.[name]}
        className={cx(
          className,
          'w-full border bg-card px-5 py-3 placeholder-low-contrast focus:outline-primary',
          {
            'border-primary': !errors?.[name] && watchedValue,
            'border-medium-gray': !errors?.[name] && !watchedValue,
            'border-secondary': errors?.[name],
          }
        )}
        placeholder="Heslo"
        type={isVisiblePassword ? 'text' : 'password'}
        {...register(name)}
      />
      <button
        type="button"
        aria-label={isVisiblePassword ? 'Skrýt heslo' : 'Ukázat heslo'}
        className="absolute right-0 top-1/2 mt-1.5 flex translate-x-8"
        onClick={togglePasswordVisibility}
      >
        <EyeIcon
          className={isVisiblePassword ? 'fill-primary' : 'fill-accent'}
        />
      </button>
      <AriaLiveErrorMessage
        className="absolute right-0 pt-1 text-xs"
        errorMessage={String(errors?.[name]?.message || '')}
        id={`${name}-error`}
      />
    </label>
  );
};
