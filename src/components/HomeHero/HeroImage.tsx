'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

import { THEME } from '../../constants';

export const HeroImage = () => {
  const { theme } = useTheme();

  return (
    <Image
      alt="SportujSpolu sportovní ilustrace"
      src={
        theme === THEME.DARK
          ? '/illustrations/hero-image-dark.svg'
          : '/illustrations/hero-image.svg'
      }
      width={500}
      height={480}
    />
  );
};
