import { SVGProps } from 'react';

export const VolleyballIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width="34"
      height="34"
      x="3"
      y="3"
      maskUnits="userSpaceOnUse"
      style={{ maskType: 'luminance' }}
    >
      <path fill="#fff" d="M37 3H3v34h34V3Z" />
    </mask>
    <g mask="url(#a)">
      <path
        className="fill-pistachio"
        d="M14.178 23.57c-4.624-6.46-4.59-13.487-3.996-16.193 1.97-1.26 6.699-3.697 9.86-3.357-3.875 6.834-1.076 13.133.808 15.428-.949 1.048-3.613 3.34-6.673 4.122Z"
      />
      <path
        className="fill-pistachio"
        d="M18.346 11.847c7.671-2.064 14.24.433 16.565 1.94.49 2.286 1.732 7.961.304 10.803-5.04-6.027-11.64-6.23-14.45-5.27-.649-1.256-2.76-4.333-2.42-7.473Z"
      />
      <path
        className="fill-pistachio"
        d="M29.945 20.425c-6.927 10.753-15.13 11.433-20.485 11.73-1.706-1.6-4.994-6.669-5.44-9.817 9.223 3.995 14.703-.534 16.465-2.924 3.68-1.029 8.398.204 9.46 1.011Z"
      />
      <path
        className="stroke-text"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M20 36.004c-8.845 0-16.004-7.158-16.004-16.004 0-8.845 7.158-16.004 16.004-16.004 8.845 0 16.004 7.158 16.004 16.004 0 8.845-7.158 16.004-16.004 16.004Z"
      />
      <path
        className="stroke-text"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M35.15 24.96c-2.295-3.637-6.349-6.058-10.958-6.058a12.93 12.93 0 0 0-3.195.4m-6.765 4.283a20.81 20.81 0 0 1-4.193-12.55c0-1.276.115-2.525.335-3.738"
      />
      <path
        className="stroke-text"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M20.05 4.063a12.873 12.873 0 0 0-2.042 6.972 12.89 12.89 0 0 0 2.989 8.266 12.93 12.93 0 0 1-9.962 4.683c-2.511 0-4.858-.718-6.845-1.961"
      />
      <path
        className="stroke-text"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M18.034 11.859a20.848 20.848 0 0 1 6.158-.925 20.79 20.79 0 0 1 10.473 2.815m-4.828 6.45c-3.403 6.954-10.552 11.754-18.802 11.754-.555 0-1.105-.022-1.65-.064"
      />
    </g>
  </svg>
);
