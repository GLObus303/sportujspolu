import { useTheme } from 'next-themes';
import nookies from 'nookies';

import { SECONDS_IN_YEAR, THEME } from '../../constants';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';

type LightSwitchProps = {
  defaultTheme: string;
};

export const LightSwitch: React.FC<LightSwitchProps> = ({ defaultTheme }) => {
  const { theme, setTheme } = useTheme();

  const currentTheme = theme || defaultTheme;
  const nextTheme = currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

  const toggleTheme = () => {
    setTheme(nextTheme);
    nookies.set(null, 'theme', nextTheme, {
      path: '/',
      maxAge: SECONDS_IN_YEAR,
    });
  };

  return (
    <button
      className="group flex h-8 items-center rounded-full bg-low-contrast hover:text-primary w-14 text-lg"
      onClick={toggleTheme}
      aria-label={`Nastavit ${
        currentTheme === THEME.DARK ? 'světlý' : 'tmavý'
      } vzhled`}
    >
      <span
        className={`rouned flex items-center justify-center rounded-full bg-background text-base transition-transform duration-300 ease-in-out mx-1 h-6 w-6 ${
          currentTheme === THEME.DARK ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {currentTheme === THEME.DARK ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
};
