import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';

import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';
import { EyeIcon } from './icons/EyeIcon';

type InputProps = {
  register: any;
  type?: string;
  name: 'name' | 'password' | 'email';
  placeholder?: string;
  errors: FieldErrors;
  watchedValue?: string;
  isPassword?: boolean;
  isVisiblePassword?: boolean;
  togglePasswordVisibility?: () => void;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  register,
  type = 'text',
  name,
  placeholder,
  errors,
  watchedValue,
  isPassword = false,
  isVisiblePassword = false,
  togglePasswordVisibility,
  className = '',
}) => (
  <label className="relative mb-10 w-full">
    <span className="absolute -translate-y-5 text-xs text-dark-gray">
      {placeholder}
    </span>
    <input
      aria-describedby={`${name}-error}`}
      aria-invalid={!!errors?.[name]}
      className={cx(
        className,
        'w-full border px-5 py-3 placeholder-light-gray focus:outline-primary',
        {
          'border-primary': !errors?.[name] && watchedValue,
          'border-secondary': errors?.[name],
          'border-medium-gray': !errors?.[name] && !watchedValue,
        }
      )}
      placeholder={placeholder}
      type={(isPassword && (isVisiblePassword ? 'text' : 'password')) || type}
      {...register(name)}
    />
    {isPassword && (
      <button
        type="button"
        aria-label={isVisiblePassword ? 'Skrýt heslo' : 'Ukázat heslo'}
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={togglePasswordVisibility}
      >
        <EyeIcon
          className={cx('fill-light-gray', {
            'fill-primary': isVisiblePassword,
          })}
        />
      </button>
    )}
    {errors[name] && (
      <AriaLiveErrorMessage
        className="absolute right-0 pt-1 text-xs"
        errorMessage={errors?.[name]?.message as string}
        id={`${name}`}
      />
    )}
  </label>
);
