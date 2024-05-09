import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';

import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';
import { useWatchedValue } from '../hooks/useWatchedValue';

type InputProps = {
  register: any;
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  errors: FieldErrors;
  className?: string;
  outerClassName?: string;
  labelClassName?: string;
};

export const Textarea: React.FC<InputProps> = ({
  register,
  type = 'text',
  name,
  placeholder,
  label,
  errors,
  outerClassName = 'relative w-full mb-5',
  className = 'border',
  labelClassName = 'text-xs text-dark-gray dark:text-text',
}) => {
  const watchedValue = useWatchedValue(name);

  return (
    <label className={outerClassName}>
      <span className={labelClassName}>{label}</span>
      <textarea
        aria-describedby={`${name}-error`}
        aria-invalid={!!errors?.[name]}
        className={cx(
          className,
          'h-40 w-full border-b bg-card px-5 py-3 placeholder-low-contrast focus:border-white focus:outline-primary',
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
      />
      <AriaLiveErrorMessage
        className="absolute bottom-0 right-0 translate-y-5 text-xs"
        errorMessage={String(errors?.[name]?.message || '')}
        id={`${name}-error`}
      />
    </label>
  );
};
