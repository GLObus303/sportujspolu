import { SVGProps } from 'react';

export const CricketIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="m31.641 11.589-3.178-3.178-3.252 3.253 3.178 3.178 3.252-3.253Z"
    />
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M9.609 38.754a9.75 9.75 0 0 1-8.323-8.323l18.745-18.745 5.028-.034 3.33 3.329-.035 5.028L9.608 38.754Z"
    />
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="m34.984 1.727-9.925 9.925 3.33 3.329 9.924-9.925-3.329-3.33Zm-8.26 11.59-6.693 6.692"
    />
    <path
      className="fill-pistachio stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M7.084 12.947a5.885 5.885 0 1 0 0-11.77 5.885 5.885 0 0 0 0 11.77Z"
    />
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M1.964 9.965C5.978 6.054 8.19 8.07 12.204 4.16m19.536 7.47-3.33-3.329"
    />
  </svg>
);
