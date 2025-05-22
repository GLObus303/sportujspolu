import Link from 'next/link';

import { Routes } from '../../constants';

export const Footer: React.FC = () => (
  <footer className="border-t border-low-contrast min-h-max flex-shrink-0">
    <section className="mx-auto max-w-layout px-5 py-10 justify-between flex-col md:flex-row flex gap-5 md:gap-10">
      <p className="">&copy; {new Date().getFullYear()} SportujSpolu.cz</p>
      <ul className="flex gap-5 md:gap-10 flex-col md:flex-row">
        <li>
          <Link
            href="https://www.instagram.com/sportujspolu/#"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover-marker font-medium"
          >
            <span>Instagram</span>
          </Link>
        </li>
        <li>
          <Link href={Routes.BLOG} className="hover-marker font-medium">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link href={Routes.GUIDELINES} className="hover-marker font-medium">
            <span>Zásady platformy</span>
          </Link>
        </li>
        <li>
          <Link href={Routes.CONTACT} className="hover-marker font-medium">
            <span>Kontakt</span>
          </Link>
        </li>
        <li>
          <Link href={Routes.DICTIONARY} className="hover-marker font-medium">
            <span>Slovník</span>
          </Link>
        </li>
        <li>
          <Link href={Routes.FAQ} className="hover-marker font-medium">
            <span>FAQ</span>
          </Link>
        </li>
      </ul>
    </section>
  </footer>
);
