import { SVGProps } from 'react';

export const EmailIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    fill="none"
    viewBox="0 0 61 60"
    {...props}
  >
    <ellipse
      cx="32.2011"
      cy="30.3298"
      className="fill-pistachio"
      rx="28.6506"
      ry="27.033"
    />
    <circle cx="30.9459" cy="30" r="29.5" className="stroke-text" />
    <g clipPath="url(#clip0_4740_291)">
      <path
        className="fill-background"
        d="M11.9996 18.4614h37.7985v23.0769H11.9996z"
      />
      <path
        className="stroke-text"
        strokeLinejoin="round"
        d="m49.3688 18.8624-36.9301-.2437 18.6685 15.3609 18.2616-15.1172Z"
      />
      <path
        className="fill-text"
        d="M26.698 30.4639a.5.5 0 0 0-.6409-.7676l.3204.3838.3205.3838ZM12.8392 41.3841l-.3205-.3838a.5.5 0 0 0 .3205.8838v-.5Zm36.2091 0v.5a.5.5 0 0 0 .3205-.8838l-.3205.3838Zm-22.6708-11.304-.3204-.3838-13.5384 11.304.3205.3838.3204.3838 13.5384-11.304-.3205-.3838Zm-13.5383 11.304v.5h36.2091v-1H12.8392v.5Zm36.2091 0 .3205-.3838L35.9906 29.829l-.3205.3837-.3204.3838 13.3781 11.1714.3205-.3838Z"
      />
      <path
        className="stroke-text"
        d="m12.4387 18.6187.4005 22.7653m36.2091-.0001.3204-22.5216"
      />
    </g>
    <path
      className="fill-pistachio"
      d="m36.4337 30.3296 2.6046 1.978 6.2702-9.3147-8.8748 7.3367Zm-10.744-.3293-2.279 1.978-6.3552-8.9849 8.6342 7.0069Z"
    />
    <defs>
      <clipPath id="clip0_4740_291">
        <path
          className="fill-background"
          d="M11.9996 18.4614h37.7985v23.0769H11.9996z"
        />
      </clipPath>
    </defs>
  </svg>
);
