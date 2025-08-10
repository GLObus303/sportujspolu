import { SVGProps } from 'react';

export const SkiingIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#clip0_4876_314)">
      <mask
        id="mask0_4876_314"
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
        mask="url(#mask0_4876_314)"
      >
        <path d="M15.293 1.172a8.035 8.035 0 0 0-2.353 5.682v31.974h4.707V6.854a8.036 8.036 0 0 0-2.354-5.682Z" />
        <path
          className="fill-pistachio"
          d="M17.646 27.142H12.94V20h4.707v7.142Z"
        />
        <path d="M5.879 10.586v28.242m-2.354-4.707h4.707M24.707 1.172a8.035 8.035 0 0 1 2.354 5.682v31.974h-4.707V6.854c0-2.131.846-4.175 2.353-5.682Z" />
        <path
          className="fill-pistachio"
          d="M22.354 27.142h4.707V20h-4.707v7.142Z"
        />
        <path d="M34.121 10.586v28.242m2.354-4.707h-4.707" />
        <path
          className="fill-pistachio"
          d="M8.232 10.586H3.525V1.172h4.707v9.414Zm28.243 0h-4.707V1.172h4.707v9.414Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_4876_314">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
