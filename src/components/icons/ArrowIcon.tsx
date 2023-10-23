import { SVGProps } from 'react';

export const ArrowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 12" {...props}>
    <path
      fill-rule="evenodd"
      d="M.94 2.81 3.06.69 9.5 7.13 15.94.69l2.12 2.12-8.56 8.56L.94 2.81z"
      clip-rule="evenodd"
    />
  </svg>
);
