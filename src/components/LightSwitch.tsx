import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import cx from 'classnames';

export const LightSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className="flex w-8 items-center rounded-full bg-low-contrast text-base hover:text-primary md:w-14 md:text-lg"
      onClick={toggleTheme}
      aria-label={`Nastavit ${theme === 'dark' ? 'světlý' : 'tmavý'} vzhled`}
    >
      <span
        className={cx(
          'rouned flex h-full w-full items-center justify-center rounded-full bg-background text-base transition-transform duration-300 ease-in-out md:mx-1 md:h-6 md:w-6',
          {
            'md:translate-x-0': theme === 'dark',
            'md:translate-x-full': theme !== 'dark',
          }
        )}
      >
        {theme === 'dark' ? '☼' : '☾'}
      </span>
    </button>
  );
};
