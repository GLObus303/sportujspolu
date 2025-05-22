import { SVGProps } from 'react';

export const GolfIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-text"
    {...props}
  >
    <path
      d="M17.6562 24.6875H38.8281V38.8281H1.17188V24.6875H10.625V30.5469C10.625 32.4885 12.199 34.0625 14.1406 34.0625C16.0823 34.0625 17.6562 32.4885 17.6562 30.5469V24.6875Z"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M1.17188 29.375H10.625"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M17.6562 29.375H38.8281"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M8.28125 11.25V24.6875"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M8.28125 1.875V11.25L17.6562 6.5625L8.28125 1.875Z"
      className="fill-pistachio"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M31.7188 21.1719C31.7188 23.1135 30.1448 24.6875 28.2031 24.6875C26.2615 24.6875 24.6875 23.1135 24.6875 21.1719C24.6875 19.2302 26.2615 17.6562 28.2031 17.6562C30.1448 17.6562 31.7188 19.2302 31.7188 21.1719Z"
      className="fill-pistachio"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
  </svg>
);
