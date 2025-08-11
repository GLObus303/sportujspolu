import Link from 'next/link';

import { Routes } from '../../constants';

const footerLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=61579596710502',
    label: 'Facebook',
    isSocials: true,
  },
  {
    href: 'https://www.instagram.com/sportujspolu/#',
    label: 'Instagram',
    isSocials: true,
  },
  { href: Routes.BLOG, label: 'Blog', isSocials: false },
  { href: Routes.GUIDELINES, label: 'Zásady platformy', isSocials: false },
  { href: Routes.CONTACT, label: 'Kontakt', isSocials: false },
  { href: Routes.DICTIONARY, label: 'Slovník', isSocials: false },
  { href: Routes.FAQ, label: 'FAQ', isSocials: false },
];

export const Footer: React.FC = () => (
  <footer className="border-t border-low-contrast min-h-max flex-shrink-0">
    <section className="mx-auto max-w-layout px-5 py-10 justify-between flex-col lg:flex-row flex gap-5 md:gap-10">
      <p className="">&copy; {new Date().getFullYear()} SportujSpolu.cz</p>
      <ul className="flex gap-5 lg:gap-10 flex-col lg:flex-row">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover-marker font-medium"
              target={link.isSocials ? '_blank' : '_self'}
              rel={link.isSocials ? 'noopener noreferrer nofollow' : undefined}
            >
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </footer>
);
