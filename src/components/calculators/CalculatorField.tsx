'use client';

import cx from 'classnames';

type CalculatorFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'number';
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
};

export const CalculatorField: React.FC<CalculatorFieldProps> = ({
  id,
  label,
  value,
  onChange,
  type = 'number',
  placeholder,
  min,
  max,
  step,
}) => (
  <label htmlFor={id} className="relative w-full mb-5 block">
    <span className="text-xs text-dark-gray dark:text-text">{label}</span>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      min={min}
      max={max}
      step={step}
      className={cx(
        'w-full bg-card px-2 sm:px-5 py-3 placeholder-low-contrast focus:outline-primary border',
        value ? 'border-primary' : 'border-medium-gray',
      )}
    />
  </label>
);

type CalculatorSelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

export const CalculatorSelect: React.FC<CalculatorSelectProps> = ({
  id,
  label,
  value,
  onChange,
  options,
}) => (
  <label htmlFor={id} className="relative w-full mb-5 block">
    <span className="text-xs text-dark-gray dark:text-text">{label}</span>
    <select
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={cx(
        'w-full bg-card px-2 sm:px-5 py-3 focus:outline-primary border',
        value ? 'border-primary' : 'border-medium-gray',
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);
