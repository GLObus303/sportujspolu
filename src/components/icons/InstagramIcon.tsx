import { SVGProps } from 'react';

export const InstagramIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="96"
    height="96"
    fill="none"
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
    <rect
      width="53.261"
      height="53.943"
      x="21.369"
      y="21.028"
      className="stroke-text fill-background"
      rx="8.5"
    />
    <circle cx="48" cy="48" r="47.5" />
    <path
      className="fill-background"
      d="M47.925 35.313c7.216 0 13.044 5.692 13.044 12.686 0 6.995-5.828 12.688-13.044 12.688-7.217 0-13.044-5.693-13.044-12.688 0-6.994 5.827-12.686 13.044-12.686Z"
    />
    <path
      className="fill-pistachio"
      d="M64.594 27.929c2.02 0 3.668 1.66 3.668 3.72 0 2.06-1.649 3.72-3.668 3.72-2.02-.001-3.667-1.66-3.667-3.72 0-2.06 1.647-3.72 3.667-3.72Z"
    />
    <path
      className="fill-pistachio stroke-none"
      d="M52.874 56.368c-2.123 1.242-4.596 1.7-6.957 1.29-2.361-.41-4.45-1.66-5.875-3.518-1.426-1.858-2.092-4.196-1.873-6.578.218-2.382 1.306-4.645 3.06-6.367-.747 2.111-.763 4.375-.044 6.427a9.204 9.204 0 0 0 4.008 4.886c1.876 1.113 4.109 1.551 6.337 1.246a10.566 10.566 0 0 0 5.945-2.93 10.494 10.494 0 0 1-4.601 5.544Z"
    />
  </svg>
);
