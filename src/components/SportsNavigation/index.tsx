import Link from 'next/link';

import { getSportLabel } from '../../utils/getSportLabel';
import { Routes, sportsArray } from '../../constants';
import { SportIcon } from './SportIcon';

export const SportsNavigation = () => (
  <nav className="mt-8 font-medium text-md overflow-x-auto overflow-y-hidden scrollbar-hide flex-shrink-0">
    <ul className="flex gap-16 px-4 md:px-0 whitespace-nowrap">
      {sportsArray?.map((sport) => (
        <li key={sport}>
          <Link
            href={`${Routes.SPORT}/${sport}`}
            className="hover:text-primary flex flex-col items-center gap-1"
          >
            <SportIcon sport={sport} />
            <p className="text-center hover-marker">
              <span>{getSportLabel(sport)}</span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
