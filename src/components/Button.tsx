import { ComponentProps } from 'react';
import cx from 'classnames';

type ButtonProps = {
  ariaLabel?: string;
  variant?: 'primary' | 'secondary';
} & ComponentProps<'button'>;

export const Button: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  className,
  variant = 'primary',
  type = 'button',
  ...rest
}) => (
  <button
    aria-label={ariaLabel}
    className={cx(
      'min-w-[5rem] rounded-full bg-button px-4 py-2 text-reverse-text',
      className,
      {
        'hover:text-primary focus:text-primary': variant === 'primary',
        'hover:text-secondary focus:text-secondary': variant === 'secondary',
      },
    )}
    type={type}
    {...rest}
  >
    {children}
  </button>
);
