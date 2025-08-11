import { SVGProps } from 'react';

export const OtherSportIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    className="stroke-text"
    {...props}
  >
    <path
      className="fill-pistachio"
      d="m6.2 32.7 13.75-5.65L33.7 32.7v5.4l-13.75-5.95L6.2 38.1v-5.4Z"
    />
    <path
      className="stroke-text"
      d="M33.75 38.15 20 32.35l-13.74 5.8V1.26h27.49v36.89Z"
    />
    <path
      className="fill-pistachio stroke-text"
      d="M20 22.2a8.18 8.18 0 1 0 0-16.36 8.18 8.18 0 0 0 0 16.35Z"
    />
    <path
      className="stroke-text"
      d="M33.75 32.8 20 27 6.26 32.8M33.71 1.26h5.12V5.8h-5.12m-27.45 0h-5.1V1.26h5.1M20 10.58 21.43 12l1.79.91-.91 1.8-.32 1.99-1.99-.31-1.99.3-.32-1.98-.9-1.8 1.78-.91L20 10.58Z"
    />
  </svg>
);
