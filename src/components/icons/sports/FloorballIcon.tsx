import { SVGProps } from 'react';

export const FloorballIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g className="fill-pistachio stroke-text" clipPath="url(#clip0_4680_200)">
      <circle cx="19.965" cy="19.9648" r="2.5" />
      <circle
        cx="19.965"
        cy="3.9648"
        r="2.5"
        transform="rotate(-180 19.965 3.9648)"
      />
      <circle
        cx="19.965"
        cy="35.9648"
        r="2.5"
        transform="rotate(-180 19.965 35.9648)"
      />
      <circle
        cx="35.965"
        cy="19.9648"
        r="2.5"
        transform="rotate(-90 35.965 19.9648)"
      />
      <circle
        cx="3.965"
        cy="19.9648"
        r="2.5"
        transform="rotate(-90 3.965 19.9648)"
      />
      <circle cx="11.965" cy="11.9648" r="2.5" />
      <circle cx="27.965" cy="11.9648" r="2.5" />
      <circle cx="11.965" cy="27.9648" r="2.5" />
      <circle cx="27.965" cy="27.9648" r="2.5" />
    </g>
    <rect
      width="32.93"
      height="32.93"
      x="3.5"
      y="3.5"
      className="stroke-text"
      rx="16.465"
    />
    <defs>
      <clipPath id="clip0_4680_200">
        <rect width="33.93" height="33.93" x="3" y="3" rx="16.965" />
      </clipPath>
    </defs>
  </svg>
);
