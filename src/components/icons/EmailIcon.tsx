import { SVGProps } from 'react';

export const EmailIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="96"
    height="96"
    className="stroke-text"
    {...props}
  >
    <ellipse
      cx="50.008"
      cy="48.527"
      className="fill-pistachio stroke-none"
      rx="45.841"
      ry="43.253"
    />
    <circle fill="none" cx="48" cy="48" r="47.5" />
    <g clipPath="url(#a)">
      <path
        className="fill-background stroke-none"
        d="M17.686 29.539h60.478v36.923H17.686z"
      />
      <path
        className="fill-background"
        strokeLinejoin="round"
        d="m77.476 30.18-59.088-.39 29.87 24.578L77.476 30.18Z"
      />
      <path
        className="stroke-none fill-text"
        d="M41.011 48.512a.5.5 0 0 0-.641-.767l.641.767ZM19.029 66.215l-.32-.384a.5.5 0 0 0 .32.884v-.5Zm57.935 0v.5a.5.5 0 0 0 .32-.884l-.32.384ZM40.69 48.128l-.321-.383L18.709 65.83l.32.384.32.384 21.662-18.087-.32-.384ZM19.029 66.215v.5h57.935v-1H19.029v.5Zm57.935 0 .32-.384L55.88 47.957l-.32.384-.32.383L76.642 66.6l.32-.384Z"
      />
      <path
        className="fill-background"
        d="m18.388 29.79.641 36.425M76.964 66.215l.512-36.035"
      />
    </g>
    <path
      className="fill-pistachio stroke-none"
      d="m56.78 48.528 4.168 3.165L70.98 36.789l-14.2 11.739ZM39.59 48l-3.647 3.165L25.776 36.79 39.59 48Z"
    />
    <defs>
      <clipPath id="a">
        <path
          className="fill-background"
          d="M17.686 29.539h60.478v36.923H17.686z"
        />
      </clipPath>
    </defs>
  </svg>
);
