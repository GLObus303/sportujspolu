import { SVGProps } from 'react';

export const ArrowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="12"
    viewBox="0 0 19 12"
    {...props}
  >
    <path
      d="m0.93945 2.8108 2.1213-2.1213 6.4393 6.4393 6.4394-6.4393 2.1213 2.1213-8.5607 8.5606-8.5607-8.5606z"
      clip-rule="evenodd"
      fill-rule="evenodd"
    />
  </svg>
);
