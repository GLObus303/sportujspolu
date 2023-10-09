import { SVGProps } from 'react';

export const EyeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" {...props}>
    <circle cx="10" cy="7" r="3" />
    <path
      d="M10.222 0C5.998 0 2.263 2.766 0 7c2.263 4.234 5.997 7 10.222 7 4.224 0 7.959-2.766 10.222-7-2.263-4.234-5.997-7-10.222-7zm-.221 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
      clip-rule="evenodd"
      fill-rule="evenodd"
    />
  </svg>
);
