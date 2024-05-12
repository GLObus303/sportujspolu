import cx from 'classnames';

type CrossButtonProps = {
  onClick: () => void;
  className?: string;
};

export const CrossButton = ({ onClick, className }: CrossButtonProps) => (
  <button
    type="button"
    aria-label="Zavřít"
    className={cx('group', className)}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        className="fill-text group-hover:fill-secondary"
        fillRule="evenodd"
        d="M13.44 15.56 0 2.12 2.12 0l13.44 13.44-2.13 2.12Z"
        clipRule="evenodd"
      />
      <path
        className="fill-text group-hover:fill-secondary"
        fillRule="evenodd"
        d="M0 13.44 13.44 0l2.12 2.12L2.12 15.56 0 13.44Z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);
