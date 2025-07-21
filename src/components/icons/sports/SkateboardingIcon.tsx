import { SVGProps } from 'react';

export const SkateboardingIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    className="stroke-text"
    {...props}
  >
    <g
      strokeLinejoin="round"
      strokeMiterlimit="10"
      clipPath="url(#clip0_4681_413)"
    >
      <path d="M30.5 20.56 19.43 9.5l3.32-3.32L33.8 17.24l-3.32 3.32ZM23.3 3.42A9.42 9.42 0 0 1 36.58 16.7M20.55 30.5 9.5 19.45l-3.31 3.32L17.23 33.8l3.32-3.31Z" />
      <path
        className="fill-pistachio"
        d="m31.6 24.98-2.21-2.21c-.3-.3-.3-.8 0-1.1l5.52-5.53c.3-.3.8-.3 1.1 0l2.22 2.2c.3.31.3.8 0 1.11l-5.53 5.53c-.3.3-.8.3-1.1 0ZM17.23 10.61l-2.2-2.2a.78.78 0 0 1 0-1.11l5.52-5.53c.3-.3.8-.3 1.1 0l2.21 2.21c.3.3.3.8 0 1.1l-5.52 5.53c-.3.3-.8.3-1.1 0Z"
      />
      <path d="m3.41 23.31-.2.25A9.45 9.45 0 0 0 4.7 36.78a9.45 9.45 0 0 0 11.99-.2" />
      <path
        className="fill-pistachio"
        d="m24.97 31.6-2.21-2.2a.77.77 0 0 0-1.1 0l-5.53 5.52c-.3.3-.3.8 0 1.1l2.2 2.21c.31.3.8.3 1.11 0l5.53-5.52c.3-.3.3-.8 0-1.1ZM10.6 17.24l-2.2-2.2a.78.78 0 0 0-1.11 0l-5.52 5.52c-.3.3-.3.8 0 1.1l2.2 2.21c.31.3.8.3 1.11 0l5.52-5.52c.31-.3.31-.8 0-1.1Z"
      />
      <path d="M16.13 9.5 9.5 16.15m21 7.72-6.64 6.63" />
    </g>
    <defs>
      <clipPath id="clip0_4681_413">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
