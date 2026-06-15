import Link from 'next/link';

import { Routes } from '../../../constants';
import { findCalculator } from '../calculatorsData';

type RelatedCalculatorsProps = {
  slugs: string[];
  currentSlug: string;
};

export const RelatedCalculators: React.FC<RelatedCalculatorsProps> = ({
  slugs,
  currentSlug,
}) => {
  const related = slugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => findCalculator(slug))
    .filter(Boolean);

  if (!related.length) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-medium mb-5">Související kalkulačky</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {related.map(
          (calculator) =>
            calculator && (
              <li key={calculator.slug}>
                <Link
                  href={`${Routes.CALCULATORS}/${calculator.slug}`}
                  className="block rounded-md bg-card shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  <span className="font-medium">{calculator.title}</span>
                </Link>
              </li>
            ),
        )}
      </ul>
    </section>
  );
};
