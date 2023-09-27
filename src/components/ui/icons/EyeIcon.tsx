import { SVGProps } from 'react';

export const EyeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="14"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx="10" cy="7" r="3" />
    <path
      d="m10.222 0c-4.224 0-7.9587 2.7657-10.222 7 2.2628 4.2343 5.9975 7 10.222 7 4.2241 0 7.9588-2.7657 10.222-7-2.2627-4.2343-5.9974-7-10.222-7zm-0.2214 12c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5z"
      clip-rule="evenodd"
      fill-rule="evenodd"
    />
  </svg>
);
