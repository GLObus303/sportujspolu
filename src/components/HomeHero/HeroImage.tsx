'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

import { THEME } from '../../constants';

type HeroImageProps = {
  defaultTheme: string;
};

export const HeroImage: React.FC<HeroImageProps> = ({ defaultTheme }) => {
  const { theme } = useTheme();
  const currentTheme = theme || defaultTheme;

  return (
    <Image
      alt="SportujSpolu sportovní ilustrace"
      src={
        currentTheme === THEME.DARK
          ? '/illustrations/hero-image-dark.svg'
          : '/illustrations/hero-image.svg'
      }
      width={500}
      height={480}
    />
  );
};
