import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';

import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';
import { EyeIcon } from './icons/EyeIcon';
import { useWatchedValue } from '../hooks/useWatchedValue';

type InputProps = {
  register: any;
  name?: 'password';
  errors: FieldErrors;
  watchedValue?: string;
  isVisiblePassword?: boolean;
  togglePasswordVisibility?: () => void;
  className?: string;
  labelClassName?: string;
};

export const PasswordInput: React.FC<InputProps> = ({
  register,
  name = 'password',
  errors,
  isVisiblePassword = false,
  togglePasswordVisibility,
  className = '',
  labelClassName = 'text-xs text-dark-gray dark:text-text',
}) => {
  const watchedValue = useWatchedValue(name);

  return (
    <label className="relative mb-5 w-full">
      <span className={labelClassName}>Heslo</span>
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
        className="absolute right-4 top-1/2 mt-1.5 flex"
        onClick={togglePasswordVisibility}
      >
        <EyeIcon
          className={isVisiblePassword ? 'fill-primary' : 'fill-accent'}
        />
      </button>
      {errors[name] && (
        <AriaLiveErrorMessage
          className="absolute right-0 pt-1 text-xs"
          errorMessage={String(errors?.[name]?.message)}
          id={`${name}-error`}
        />
      )}
    </label>
  );
};
