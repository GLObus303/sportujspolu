import { SVGProps } from 'react';

export const FencingIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#clip0_4876_300)">
      <mask
        id="mask0_4876_300"
        width="40"
        height="40"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'luminance' }}
      >
        <path fill="#fff" d="M40 0H0v40h40V0Z" />
      </mask>
      <g
        className="stroke-text"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        mask="url(#mask0_4876_300)"
      >
        <path d="M37.835 38.074a2.573 2.573 0 0 1-3.639 0l-5.823-5.823 3.64-3.64 5.822 5.824a2.573 2.573 0 0 1 0 3.639Z" />
        <path
          className="fill-pistachio"
          d="M35.419 25.206 24.605 36.019A7.646 7.646 0 1 1 35.42 25.206Z"
        />
        <path d="m1.162 1.131 23.443 24.075m10.814 0 1.998 1.998a4.817 4.817 0 0 1 0 6.813M2.165 38.074a2.573 2.573 0 0 0 3.639 0l5.823-5.823-3.64-3.64-5.822 5.824a2.573 2.573 0 0 0 0 3.639Z" />
        <path
          className="fill-pistachio"
          d="m4.581 25.206 10.814 10.813A7.646 7.646 0 1 0 4.58 25.206Z"
        />
        <path d="M38.838 1.131 15.395 25.206m-10.814 0-1.998 1.998a4.817 4.817 0 0 0 0 6.813" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_4876_300">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
