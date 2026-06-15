import Link from 'next/link';

import { Routes } from '../../constants';
import {
  calculatorCategoryLabels,
  CalculatorCategory,
  calculatorsData,
} from './calculatorsData';

const CATEGORY_ORDER: CalculatorCategory[] = ['beh', 'fitness', 'vyziva'];

export const CalculatorsList = () => (
  <div className="mt-10 space-y-12">
    {CATEGORY_ORDER.map((category) => {
      const items = calculatorsData.filter(
        (calculator) => calculator.category === category,
      );

      if (!items.length) {
        return null;
      }

      return (
        <section key={category}>
          <h2 className="text-2xl font-medium mb-5">
            <span className="text-2xl pr-2 font-black text-pistachio [-webkit-text-stroke:1px_black]">
              {calculatorCategoryLabels[category].charAt(0)}
            </span>
            {calculatorCategoryLabels[category]}
          </h2>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((calculator) => (
              <li key={calculator.slug}>
                <Link
                  href={`${Routes.CALCULATORS}/${calculator.slug}`}
                  className="block rounded-md bg-card shadow-md p-5 h-full hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-medium mb-2">
                    {calculator.title}
                  </h3>
                  <p className="text-sm text-dark-gray dark:text-text line-clamp-3">
                    {calculator.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      );
    })}
  </div>
);
