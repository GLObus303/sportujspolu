import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';

import { useWatchedValue } from '../hooks/useWatchedValue';
import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';

type InputProps = {
  register: any;
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  errors: FieldErrors;
  watchedValue?: string | number | Date;
  outerClassName?: string;
  className?: string;
  labelClassName?: string;
};

export const Input: React.FC<InputProps> = ({
  register,
  type = 'text',
  name,
  label,
  placeholder,
  errors,
  outerClassName = 'relative w-full mb-5',
  className = 'border',
  labelClassName = 'text-xs text-dark-gray',
}) => {
  const watchedValue = useWatchedValue(name);

  return (
    <label htmlFor={name} className={outerClassName}>
      <span className={labelClassName}>{label}</span>
      <input
        id={name}
        aria-describedby={`${name}-error`}
        aria-invalid={!!errors?.[name]}
        className={cx(
          className,
          'w-full px-5 py-3 placeholder-light-gray focus:outline-primary',
          {
            'border-primary': !errors?.[name] && watchedValue,
            'border-medium-gray text-light-gray':
              !errors?.[name] && !watchedValue,
            'border-secondary': errors?.[name],
          }
        )}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
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
