import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';

import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';
import { useWatchedValue } from '../hooks/useWatchedValue';

type SelectProps = {
  register: any;
  type?: string;
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  errors: FieldErrors;
  className?: string;
};

export const Select: React.FC<SelectProps> = ({
  register,
  type = 'text',
  name,
  label,
  placeholder,
  options,
  errors,
  className = '',
}) => {
  const watchedValue = useWatchedValue(name);

  return (
    <label className="relative flex w-full flex-row justify-between">
      <span className="text-normal w-3/5 pt-3 text-start md:pt-2 md:text-xl">
        {label}
      </span>
      <select
        aria-describedby={`${name}-error`}
        aria-invalid={!!errors?.[name]}
        className={cx(
          className,
          'w-full border-b px-5 py-3 placeholder-light-gray focus:border-white focus:outline-primary',
          {
            'border-primary': !errors?.[name] && watchedValue,
            'border-medium-gray': !errors?.[name] && !watchedValue,
            'border-secondary': errors?.[name],
          }
        )}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        rows={3}
      >
        <option value="" disabled selected={!watchedValue}>
          {placeholder || 'Select an option'}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <AriaLiveErrorMessage
          className="absolute bottom-0 right-0 translate-y-5 text-xs"
          errorMessage={String(errors?.[name]?.message)}
          id={`${name}-error`}
        />
      )}
    </label>
  );
};
