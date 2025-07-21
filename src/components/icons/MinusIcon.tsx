import { SVGProps } from 'react';

export const MinusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" {...props}>
    <path
      className="fill-text"
      fillRule="evenodd"
      d="M18 10H0V8h18v2Z"
      clipRule="evenodd"
    />
  </svg>
);
