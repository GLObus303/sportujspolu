import { SVGProps } from 'react';

export const IceHockeyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      className="fill-pistachio stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M16.47 15.294V1.176h2.354a2.353 2.353 0 0 1 2.352 2.353v11.765h-4.705Z"
    />
    <path
      className="fill-pistachio"
      d="M4.706 21.176h.588a4.118 4.118 0 1 1 0 8.236H2.353"
    />
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M4.706 21.176h.588a4.118 4.118 0 1 1 0 8.236H2.353"
    />
    <path
      className="stroke-text"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M21.177 10.588V20l10.41 1.487a7.06 7.06 0 0 1 6.06 6.988v5.643H20l-2.353-2.353h-3.53v2.353H2.354v-5.883l2.353-6.99V5.882H16.47m18.824 28.236a4.706 4.706 0 0 1-4.706 4.706H1.176m22.354 0v-4.706m-12.942 4.706v-4.706M21.177 20l-3.53 3.53m9.706-2.648-3.824 3.824M16.47 10.588h4.707M16.47 5.882h4.707"
    />
  </svg>
);
