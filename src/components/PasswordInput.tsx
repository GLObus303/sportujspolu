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
};

export const PasswordInput: React.FC<InputProps> = ({
  register,
  name = 'password',
  errors,
  isVisiblePassword = false,
  togglePasswordVisibility,
  className = '',
}) => {
  const watchedValue = useWatchedValue(name);

  return (
    <label className="relative mb-5 w-full">
      <span className="text-xs text-dark-gray">Heslo</span>
      <input
        aria-describedby={`${name}-error`}
        aria-invalid={!!errors?.[name]}
        className={cx(
          className,
          'w-full border px-5 py-3 placeholder-light-gray focus:outline-primary',
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
          className={cx('fill-light-gray', {
            'fill-primary': isVisiblePassword,
          })}
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
