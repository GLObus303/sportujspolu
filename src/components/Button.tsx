import cx from 'classnames';
import { ComponentProps } from 'react';

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
      'min-w-[10rem] rounded-md bg-button p-2 text-white',
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
