'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

import { ChildrenFC } from '../utils/type';

export const ThemeProvider: ChildrenFC<ThemeProviderProps> = ({
  children,
  defaultTheme,
  ...props
}) => (
  <NextThemesProvider
    {...props}
    enableSystem={false}
    defaultTheme={defaultTheme}
    attribute="class"
  >
    {children}
  </NextThemesProvider>
);
