import { SVGProps } from 'react';

export const SnowboardingIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      className="fill-pistachio"
      d="M14.8 11.6h10.1l-.65 5.2H15.9l-1.1-5.2Zm0 16.7h10.1l-.65-5.2H15.9l-1.1 5.2Zm5.15 4.8-5.6 2.7c.783.983 3 2.99 5.6 3.15 3.04.12 5.067-2.117 5.7-3.25l-5.7-2.6Z"
    />
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M24.115 20c0-3.414.667-6.79 1.92-9.965a6.46 6.46 0 0 0 .448-2.202c.095-3.567-2.759-6.575-6.327-6.66a6.485 6.485 0 0 0-6.196 8.85c1.248 3.182 1.925 6.559 1.925 9.977 0 3.414-.667 6.79-1.92 9.965a6.46 6.46 0 0 0-.448 2.202c-.095 3.567 2.759 6.575 6.327 6.66a6.485 6.485 0 0 0 6.196-8.85c-1.248-3.182-1.925-6.559-1.925-9.977Z"
    />
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M14.46 35.698 20 33.1l5.55 2.6m-10.628-7.526H25.25M14.6 11.826h11.025M15.85 23.135h7.978M15.8 16.827h8.028"
    />
  </svg>
);
