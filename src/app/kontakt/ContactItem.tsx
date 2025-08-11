import Link from 'next/link';

export const ContactItem = ({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) => (
  <li className="flex flex-col items-center text-center gap-2 rounded-md bg-card shadow-md p-5">
    {icon}
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="hover-marker font-medium"
    >
      <span>{label}</span>
    </Link>
  </li>
);
