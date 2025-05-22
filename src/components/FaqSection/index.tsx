'use client';

import { useState } from 'react';
import Link from 'next/link';

import { faqData } from '../../app/faq/faqData';
import { Routes } from '../../constants';
import { FaqItem } from './FaqItem';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      <h2 className="px-20 text-center text-xl font-medium leading-normal md:px-0 lg:text-start lg:text-3xl">
        Často kladené{' '}
        <Link href={Routes.FAQ} className="hover:text-primary">
          otázky
        </Link>
      </h2>
      <dl className="mt-10 md:mt-14">
        {faqData.map((question, index) => (
          <FaqItem
            key={index}
            question={question}
            openIndex={openIndex}
            handleToggle={handleToggle}
            index={index}
          />
        ))}
      </dl>
    </section>
  );
};
