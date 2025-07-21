import { SVGProps } from 'react';

export const TennisIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-text"
    {...props}
  >
    <path
      stroke="none"
      d="M36.9998 20.0749C36.9996 22.9037 36.1868 25.6826 34.6432 28.1317C33.0997 30.5809 30.8799 32.614 28.2072 34.0262C25.5346 35.4385 22.5034 36.1801 19.4189 36.1765C16.3344 36.1728 13.3054 35.424 10.6367 34.0054C7.78806 31.1658 6.14592 27.4824 6.00927 23.6259C5.87262 19.7693 7.25058 15.9959 9.89219 12.9926C12.5338 9.98936 16.2634 7.95586 20.4023 7.26229C24.5411 6.56873 28.814 7.26123 32.4429 9.21372C35.3938 12.1816 37.0203 16.0584 36.9998 20.0749V20.0749Z"
      className="fill-pistachio"
    />
    <path
      d="M4 23.3419C4 23.3419 11.0157 33.8074 17.5472 30.2698C24.0786 26.7322 12.3816 8.8173 34 11.2211"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="20" r="16.5" />
  </svg>
);
