import cx from 'classnames';
import { useFormContext } from 'react-hook-form';

import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';
import { useWatchedValue } from '../hooks/useWatchedValue';

type SelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  className?: string;
};

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  placeholder,
  options,
  className = '',
}) => {
  const watchedValue = useWatchedValue(name);
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
          'placeholder-light-gray w-full border-b px-5 py-3 focus:border-white focus:outline-primary',
          {
            'border-primary': !errors?.[name] && watchedValue,
            'border-medium-gray': !errors?.[name] && !watchedValue,
            'border-secondary': errors?.[name],
          },
        )}
        placeholder={placeholder}
        {...register(name)}
      >
        <option value="" disabled>
          {placeholder || 'Select an option'}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <AriaLiveErrorMessage
        className="absolute bottom-0 right-0 translate-y-5 text-xs"
        errorMessage={String(errors?.[name]?.message || '')}
        id={`${name}-error`}
      />
    </label>
  );
};
