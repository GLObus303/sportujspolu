import { SVGProps } from 'react';

export const HikingIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#clip0_4876_394)">
      <mask
        id="mask0_4876_394"
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
        mask="url(#mask0_4876_394)"
      >
        <path
          className="fill-pistachio"
          d="M16.92 9.724H11.3v-8.55h6.402l-.783 4.353v4.197Z"
        />
        <path d="M14.11 9.561v30.44m-3.412-3.989h6.666m-5.505-8.294h4.344m-4.344-7.745h4.344M11.3 3.493V9.45a2.438 2.438 0 0 1-4.876 0c0-1.117.486-2.179 1.333-2.907l3.543-3.05Z" />
        <path
          className="fill-pistachio"
          d="M23.08 9.724h5.62v-8.55h-6.402l.783 4.353v4.197Z"
        />
        <path d="M25.89 9.561v30.44m3.412-3.989h-6.666m5.505-8.294h-4.343m4.343-7.745h-4.343M28.7 3.493V9.45a2.438 2.438 0 0 0 4.876 0 3.836 3.836 0 0 0-1.333-2.907L28.7 3.493Z" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_4876_394">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
