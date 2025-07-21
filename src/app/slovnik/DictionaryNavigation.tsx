'use client';

import { dictionaryLetters } from './dictionaryData';

export const DictionaryNavigation = () => {
  const handleClick = (letter: string) => {
    const element = document.getElementById(letter);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="mb-20">
      <ul className="flex px-5 lg:px-0 justify-center text-lg mx-auto md:max-w-md lg:max-w-full space-x-4 lg:justify-between flex-wrap mt-8">
        {dictionaryLetters.map((letter) => (
          <li key={letter}>
            <button
              className="hover:text-primary"
              onClick={() => handleClick(letter)}
            >
              {letter}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
