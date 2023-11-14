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
  watchedValue,
  outerClassName = 'relative w-full mb-10',
  className = 'border',
  labelClassName = 'absolute -translate-y-5 text-xs text-dark-gray',
}) => (
  <div className={outerClassName}>
    <label htmlFor={name} className={labelClassName}>
      <span>{label}</span>
    </label>
    <div className="w-full">
      <input
        id={name}
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
  </div>
);
