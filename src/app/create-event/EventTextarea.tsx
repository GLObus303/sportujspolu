import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';

import { AriaLiveErrorMessage } from '../../components/AriaLiveErrorMessage';

type InputProps = {
  register: any;
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  errors: FieldErrors;
  watchedValue?: string;
  className?: string;
};

export const EventTextarea: React.FC<InputProps> = ({
  register,
  type = 'text',
  name,
  placeholder,
  label,
  errors,
  watchedValue,
  className = '',
}) => (
  <label className="relative flex w-full flex-row justify-between">
    <span className="text-normal pt-3 md:pt-2 md:text-xl">{label}</span>
    <div className="w-3/5">
      <textarea
        aria-describedby={`${name}-error}`}
        aria-invalid={!!errors?.[name]}
        className={cx(
          className,
          'w-full border-b px-5 py-3 pb-0 placeholder-medium-gray focus:border-white focus:outline-primary',
          {
            'border-primary': !errors?.[name] && watchedValue,
            'border-secondary': errors?.[name],
            'border-medium-gray': !errors?.[name] && !watchedValue,
          }
        )}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        rows={3}
      />
      {errors[name] && (
        <AriaLiveErrorMessage
          className="absolute right-0 pt-1 text-xs"
          errorMessage={errors?.[name]?.message as string}
          id={`${name}-error`}
        />
      )}
    </div>
  </label>
);
