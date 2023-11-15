import { SVGProps } from 'react';
import cx from 'classnames';

export const Loading: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  const { className, ...restProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 45 44"
      className={cx(className, 'animate-spin')}
      {...restProps}
    >
      <circle fill="none" />
      <path
        fill="#00E526"
        d="M31.72 14.03c1.79 1.75 2.73 4.34 2.73 7.49 0 3.63-.49 6.76-.88 8.5H29.3c1.48-2.63 1.7-5.68 1.7-7.31 0-2.29-.45-4.08-1.34-5.34a4.28 4.28 0 0 0-3.55-1.88 3.9 3.9 0 0 0-3.4 1.81c-.72 1.08-1.06 2.56-1.06 4.53 0 1.75-.34 2.63-.62 3.06-.28.44-.65.63-1.22.63-.58 0-1.05-.26-1.42-.78-.39-.55-.85-1.65-.85-3.79 0-1.45.2-4.2 1.57-6.37 1.27-2.01 3.28-3.03 5.97-3.03 2.68 0 4.97.86 6.63 2.48zm-17.5 15.6c-1.79-1.75-2.73-4.34-2.73-7.49 0-3.63.5-6.76.88-8.5h4.26c-1.48 2.63-1.7 5.68-1.7 7.31 0 2.29.45 4.08 1.34 5.34a4.28 4.28 0 0 0 3.55 1.88 3.9 3.9 0 0 0 3.4-1.82c.72-1.08 1.06-2.56 1.06-4.52 0-1.75.34-2.63.62-3.06.29-.44.65-.63 1.22-.63.58 0 1.05.26 1.42.78.4.55.86 1.65.86 3.79 0 1.44-.2 4.2-1.58 6.37-1.27 2.01-3.28 3.03-5.97 3.03a9.24 9.24 0 0 1-6.63-2.48zm4.58-18.65h-8.42l-.28.95c-.05.17-1.24 4.26-1.24 10.22 0 3.88 1.22 7.12 3.53 9.38a11.95 11.95 0 0 0 8.46 3.23 9.6 9.6 0 0 0 6.29-2.08h8.42l.28-.95c.05-.17 1.24-4.26 1.24-10.22 0-3.88-1.22-7.12-3.53-9.38a11.95 11.95 0 0 0-8.46-3.23 9.6 9.6 0 0 0-6.29 2.08z"
      />
    </svg>
  );
};
