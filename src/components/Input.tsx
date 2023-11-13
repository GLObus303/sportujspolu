import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';

import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';

type InputProps = {
  register: any;
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  errors: FieldErrors;
  watchedValue?: string | number | Date;
  className?: string;
  isEventInput?: boolean;
};

export const Input: React.FC<InputProps> = ({
  register,
  type = 'text',
  name,
  label,
  placeholder,
  errors,
  watchedValue,
  className = '',
  isEventInput = false,
}) => (
  <label
    className={cx('relative w-full', {
      'relative flex w-full flex-row justify-between': isEventInput,
      'mb-10': !isEventInput,
    })}
  >
    <span
      className={
        isEventInput
          ? 'text-normal pt-3 md:pt-2 md:text-xl'
          : 'absolute -translate-y-5 text-xs text-dark-gray'
      }
    >
      {label}
    </span>
    <div className={cx({ 'w-3/5': isEventInput })}>
      <input
        aria-describedby={`${name}-error}`}
        aria-invalid={!!errors?.[name]}
        className={cx(
          className,
          'w-full px-5 py-3 placeholder-light-gray focus:outline-primary',
          {
            'border-primary': !errors?.[name] && watchedValue,
            'border-secondary': errors?.[name],
            'border-medium-gray text-light-gray':
              !errors?.[name] && !watchedValue,
            'border-b': isEventInput,
            border: !isEventInput,
          }
        )}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
    </div>
    {errors[name] && (
      <AriaLiveErrorMessage
        className="absolute right-0 pt-1 text-xs"
        errorMessage={errors?.[name]?.message as string}
        id={`${name}-error`}
      />
    )}
  </label>
);
