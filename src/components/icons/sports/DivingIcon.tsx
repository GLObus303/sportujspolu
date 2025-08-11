import { SVGProps } from 'react';

export const DivingIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#clip0_4876_366)">
      <mask
        id="mask0_4876_366"
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
        mask="url(#mask0_4876_366)"
      >
        <path
          className="fill-pistachio"
          d="M16.01 20.313a9.879 9.879 0 0 1-7.567 0L7.7 8.592h9.051l-.742 11.72Z"
        />
        <path d="M16.758 8.594H7.695v-1.81a2.877 2.877 0 0 1 2.878-2.878h3.307a2.877 2.877 0 0 1 2.878 2.878v1.81Zm-8.866 3.023-6.72 27.211s3.75-2.656 7.656 0c0 0 1.563-.938 3.438-.938m4.374-26.273 6.72 27.211s-3.75-2.656-7.657 0c0 0-1.562-.938-3.437-.938m-3.438.938 1.328-17.969m5.469 17.969L14.297 20.86" />
        <path
          className="fill-pistachio"
          d="M31.48 17.578a9.879 9.879 0 0 1-7.569 0L23.17 5.86h9.052l-.742 11.72Z"
        />
        <path d="M32.227 5.86h-9.063V4.05a2.877 2.877 0 0 1 2.878-2.878h3.307a2.877 2.877 0 0 1 2.878 2.877v1.81Zm-4.493 29.296c-1.875 0-3.437.938-3.437.938a6.89 6.89 0 0 0-1.834-.895m.897-26.316-3.697 14.976M32.108 8.882l6.72 27.212s-3.75-2.657-7.656 0c0 0-1.563-.938-3.438-.938m-3.437.938 1.328-17.969m5.469 17.969-1.328-17.969" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_4876_366">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
