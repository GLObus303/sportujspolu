import cx from 'classnames';
import { useFormContext } from 'react-hook-form';

import { AriaLiveErrorMessage } from './AriaLiveErrorMessage';
import { useWatchedValue } from '../hooks/useWatchedValue';

type TextareaProps = {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  outerClassName?: string;
  labelClassName?: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  label,
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
