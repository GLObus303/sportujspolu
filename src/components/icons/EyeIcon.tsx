import { FC, SVGProps } from 'react';

export const EyeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" {...props}>
    <circle cx="10" cy="7" r="3" />
    <path
      fillRule="evenodd"
      d="M10.22 0C6 0 2.26 2.77 0 7c2.26 4.23 6 7 10.22 7 4.23 0 7.96-2.77 10.22-7-2.26-4.23-6-7-10.22-7zM10 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
      clipRule="evenodd"
    />
  </svg>
);
