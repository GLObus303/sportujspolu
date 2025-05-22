import { SVGProps } from 'react';

export const BoxingIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M1.5 15.3H7.8V25.8L6.55 27.25L4.65 27.95L2.9 27.25L1.5 25.8V15.3Z"
      className="fill-pistachio"
    />
    <path
      d="M14.0625 15.3125H1.5625V34.0625H14.0625V15.3125Z"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M14.0625 15.3125C14.0625 11.8607 16.8607 9.0625 20.3125 9.0625H25.9375C27.6634 9.0625 29.0625 10.4616 29.0625 12.1875V15.3125"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M14.0625 34.0625C16.0634 36.0634 18.7772 37.1875 21.6069 37.1875H32.1875C35.6393 37.1875 38.4375 34.3893 38.4375 30.9375V21.5625C38.4375 18.1107 35.6393 15.3125 32.1875 15.3125H23.4375"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M7.8125 15.3125V24.6875C7.8125 26.4134 6.41336 27.8125 4.6875 27.8125C2.96164 27.8125 1.5625 26.4134 1.5625 24.6875V15.45"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
  </svg>
);
