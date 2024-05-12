import cx from 'classnames';

type ButtonProps = {
  children: React.ReactNode | string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
  children,
  onClick,
  disabled,
  ariaLabel,
  className,
  variant = 'primary',
  type = 'button',
}: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    type={type}
    className={cx(
      'min-w-[10em] rounded-md bg-button p-2 text-white',
      className,
      {
        'hover:text-primary focus:text-primary': variant === 'primary',
        'hover:text-secondary focus:text-secondary': variant === 'secondary',
      }
    )}
  >
    {children}
  </button>
);
