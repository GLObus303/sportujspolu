import { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';

type EmailWithCopyProps = {
  email?: string;
  className?: string;
};

export const EmailWithCopy: React.FC<EmailWithCopyProps> = ({
  email,
  className,
}) => {
  const [caption, setCaption] = useState('[Copy]');

  if (!email) {
    return null;
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCaption('Copied!');
    } catch {
      setCaption('Failed to copy');
    }
  };

  return (
    <div className={cx('flex items-center space-x-2', className)}>
      <Link href={`mailto:${email}`} className="font-medium hover:text-primary">
        {email}
      </Link>

      <button
        onClick={handleCopy}
        className="cursor-pointer text-primary hover:text-primary font-medium"
      >
        {caption}
      </button>
    </div>
  );
};
