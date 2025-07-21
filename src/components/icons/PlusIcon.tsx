import { SVGProps } from 'react';

export const PlusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    {...props}
  >
    <path
      className="fill-text"
      fillRule="evenodd"
      d="M8 10v8h2v-8h8V8h-8V0H8v8H0v2h8Z"
      clipRule="evenodd"
    />
  </svg>
);
