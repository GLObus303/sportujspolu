import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';

import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';

type InputProps = {
  register: any;
  type?: string;
  name: 'name' | 'email';
  placeholder?: string;
  errors: FieldErrors;
  watchedValue?: string;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  register,
  type = 'text',
  name,
  placeholder,
  errors,
  watchedValue,
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
      type={type}
      {...register(name)}
    />
    {errors[name] && (
      <AriaLiveErrorMessage
        className="absolute right-0 pt-1 text-xs"
        errorMessage={errors?.[name]?.message as string}
        id={`${name}-error`}
      />
    )}
  </label>
);
