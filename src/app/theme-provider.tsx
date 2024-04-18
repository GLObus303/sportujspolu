'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export const ThemeProvider = ({
  children,
  defaultTheme,
  ...props
}: ThemeProviderProps) => (
  <NextThemesProvider
    {...props}
    enableSystem={false}
    defaultTheme={defaultTheme}
    attribute="class"
  >
    {children}
  </NextThemesProvider>
);
