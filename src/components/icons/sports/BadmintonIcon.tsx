import { SVGProps } from 'react';

export const BadmintonIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="m8.258 3.696-2.204-.114-3.147 2.745 10.928 21.487M31.83 3.7l2.116-.118 3.147 2.745-10.928 21.487M16.134 2.685l-4.182-.937-3.694 1.948 5.577 24.118"
    />
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="m23.942 2.685 4.106-.937L31.83 3.7l-5.665 24.114m-3.783 0 1.56-25.128-3.904-1.482-3.904 1.482 1.56 25.128"
    />
    <path
      className="fill-pistachio stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M20.298 38.796h-.596a5.867 5.867 0 0 1-5.867-5.866v-5.116h12.33v5.116a5.867 5.867 0 0 1-5.867 5.866Z"
    />
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M13.835 32.53h12.33"
    />
  </svg>
);
