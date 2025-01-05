import Link from 'next/link';

import { Routes } from '../../constants';

export const Footer: React.FC = () => (
  <footer className="border-t border-low-contrast min-h-max">
    <section className="mx-auto max-w-layout px-5 py-10 justify-between flex-col md:flex-row flex gap-5 md:gap-10">
      <p className="">© 2021 SportujSpolu.cz</p>
      <ul className="flex gap-5 md:gap-10 flex-col md:flex-row">
        <li>
          <Link
            href="https://www.instagram.com/sportujspolu/#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary font-medium"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link href={Routes.BLOG} className="hover:text-primary font-medium">
            Blog
          </Link>
        </li>
        <li>
          <Link
            href={Routes.GUIDELINES}
            className="hover:text-primary font-medium"
          >
            Zásady platformy
          </Link>
        </li>
        <li>
          <Link
            href={Routes.CONTACT}
            className="hover:text-primary font-medium"
          >
            Kontakt
          </Link>
        </li>
        <li>
          <Link
            href={Routes.DICTIONARY}
            className="hover:text-primary font-medium"
          >
            Slovník
          </Link>
        </li>
        <li>
          <Link href={Routes.FAQ} className="hover:text-primary font-medium">
            FAQ
          </Link>
        </li>
      </ul>
    </section>
  </footer>
);
