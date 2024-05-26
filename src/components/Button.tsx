import { ComponentProps } from 'react';
import cx from 'classnames';

type ButtonProps = {
  ariaLabel?: string;
  variant?: 'primary' | 'secondary';
} & ComponentProps<'button'>;

export const Button = ({
  children,
  ariaLabel,
  className,
  variant = 'primary',
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button
    aria-label={ariaLabel}
    className={cx(
      'min-w-[5rem] rounded-md bg-button px-4 py-2 text-white',
      className,
      {
        'hover:text-primary focus:text-primary': variant === 'primary',
        'hover:text-secondary focus:text-secondary': variant === 'secondary',
      }
    )}
    type={type}
    {...rest}
  >
    {children}
  </button>
);
