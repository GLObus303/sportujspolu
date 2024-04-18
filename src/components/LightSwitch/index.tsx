import { useTheme } from 'next-themes';
import nookies from 'nookies';

import { SECONDS_IN_MONTH } from '../../utils/constants';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';

type LightSwitchProps = {
  defaultTheme: string;
};

export const LightSwitch: React.FC<LightSwitchProps> = ({ defaultTheme }) => {
  const { theme, setTheme } = useTheme();

  const currentTheme = theme || defaultTheme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  const toggleTheme = () => {
    setTheme(nextTheme);
    nookies.set(null, 'theme', nextTheme, {
      path: '/',
      maxAge: SECONDS_IN_MONTH,
    });
  };

  return (
    <button
      className="group flex w-fit items-center rounded-full bg-low-contrast text-base hover:text-primary md:w-14 md:text-lg"
      onClick={toggleTheme}
      aria-label={`Nastavit ${
        currentTheme === 'dark' ? 'světlý' : 'tmavý'
      } vzhled`}
    >
      <span
        className={`rouned flex h-full w-full items-center justify-center rounded-full bg-background text-base transition-transform duration-300 ease-in-out md:mx-1 md:h-6 md:w-6 ${
          currentTheme === 'dark' ? 'md:translate-x-0' : 'md:translate-x-full'
        }`}
      >
        {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
};
