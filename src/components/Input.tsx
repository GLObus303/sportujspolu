import cx from 'classnames';
import { useFormContext } from 'react-hook-form';

import { useWatchedValue } from '../hooks/useWatchedValue';
import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';

type InputProps = {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  outerClassName?: string;
  className?: string;
  labelClassName?: string;
};

export const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  label,
  placeholder,
  outerClassName = 'relative w-full mb-5',
  className = 'border',
  labelClassName = 'text-xs text-dark-gray dark:text-text',
}) => {
  const watchedValue = useWatchedValue(name);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor={name} className={outerClassName}>
      <span className={labelClassName}>{label}</span>
      <input
        id={name}
        aria-describedby={`${name}-error`}
        aria-invalid={!!errors?.[name]}
        className={cx(
          className,
          'w-full bg-card px-5 py-3 placeholder-low-contrast focus:outline-primary',
          {
            'border-primary': !errors?.[name] && watchedValue,
            'border-medium-gray': !errors?.[name] && !watchedValue,
            'border-secondary': errors?.[name],
          }
        )}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
      <AriaLiveErrorMessage
        className="absolute bottom-0 right-0 translate-y-5 text-xs"
        errorMessage={String(errors?.[name]?.message || '')}
        id={`${name}-error`}
      />
    </label>
  );
};
