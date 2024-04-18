import { useTheme } from 'next-themes';
import nookies from 'nookies';
import { useEffect, useState } from 'react';

import { SECONDS_IN_MONTH } from '../utils/constants';

export const LightSwitch = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  const toggleTheme = () => {
    setTheme(nextTheme);
    nookies.set(null, 'theme', nextTheme, {
      path: '/',
      maxAge: SECONDS_IN_MONTH,
    });
  };

  return (
    <button
      className="flex w-fit items-center rounded-full bg-low-contrast text-base hover:text-primary md:w-14 md:text-lg"
      onClick={toggleTheme}
      aria-label={`Nastavit ${theme === 'dark' ? 'světlý' : 'tmavý'} vzhled`}
    >
      <span
        className={`rouned flex h-full w-full items-center justify-center rounded-full bg-background text-base transition-transform duration-300 ease-in-out md:mx-1 md:h-6 md:w-6 ${
          theme === 'dark' ? 'md:translate-x-0' : 'md:translate-x-full'
        }`}
      >
        {theme === 'dark' ? '☼' : '☾'}
      </span>
    </button>
  );
};
