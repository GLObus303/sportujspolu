import { FC } from 'react';

type SocialButtonProps = {
  Icon: FC<{ className?: string }>;
  label: string;
};

export const SocialButton = ({ Icon, label }: SocialButtonProps) => (
  <button
    type="button"
    aria-label={label}
    title="🚀 Feature coming soon! 🌟"
    className="focus-within:fill-primary motion-reduce:focus-within:scale-100"
  >
    <Icon className="mx-3 transition-transform duration-200 ease-in-out hover:scale-115 hover:fill-primary motion-reduce:hover:scale-100" />
  </button>
);
