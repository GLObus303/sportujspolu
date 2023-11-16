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
};

export const Textarea: React.FC<InputProps> = ({
  register,
  type = 'text',
  name,
  placeholder,
  label,
  errors,
  className = '',
}) => {
  const watchedValue = useWatchedValue(name);

  return (
    <label className="relative flex w-full flex-row justify-between">
      <span className="text-normal w-3/5 pt-3 text-start md:pt-2 md:text-xl">
        {label}
      </span>
      <textarea
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
