import { useFormContext } from 'react-hook-form';

type Option = {
  value: string;
  label: string;
};

type RadioInputProps = {
  name: string;
  label: string;
  options: Option[];
};

export const RadioInput: React.FC<RadioInputProps> = ({
  name,
  label,
  options,
}) => {
  const { register, watch } = useFormContext();
  const watchedValue = String(watch(name));

  return (
    <div className="flex w-full flex-row items-start justify-between">
      <span className="text-normal mb-4 pt-3 text-start md:pt-2 md:text-xl">
        {label}
      </span>
      <div className="mt-5 grid md:grid-cols-2 w-3/5 gap-4">
        {options.map(({ value, label: optionLabel }, index) => (
          <label key={value} className="relative flex cursor-pointer">
            <input
              {...register(name)}
              type="radio"
              value={value}
              defaultChecked={index === 0}
              className="peer sr-only"
            />
            <span
              className={`rounded-full px-4 py-2 text-center w-full leading-5 peer-focus:outline peer-focus:outline-primary ${
                watchedValue === value
                  ? 'border border-pistachio bg-pistachio'
                  : 'border border-low-contrast bg-card hover:border-primary'
              }`}
            >
              {optionLabel}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
