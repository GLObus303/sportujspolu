'use client';

import { useMemo, useState } from 'react';

import { calculateOneRepMax } from '../../utils/calculators/oneRepMax';
import { CalculatorField } from './CalculatorField';
import { CalculatorResult, CalculatorResultRow } from './CalculatorResult';

export const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState('100');
  const [reps, setReps] = useState('5');

  const result = useMemo(() => {
    const weightKg = parseFloat(weight);
    const repsNum = parseInt(reps, 10);

    return calculateOneRepMax(weightKg, repsNum);
  }, [weight, reps]);

  return (
    <section className="rounded-md bg-card shadow-md p-5 sm:p-8">
      <CalculatorField
        id="1rm-weight"
        label="Váha (kg)"
        value={weight}
        onChange={setWeight}
        min={0}
      />
      <CalculatorField
        id="1rm-reps"
        label="Počet opakování"
        value={reps}
        onChange={setReps}
        min={1}
        max={30}
      />
      {result && (
        <CalculatorResult>
          <CalculatorResultRow label="Odhad 1RM" value={`${result.oneRm} kg`} />
          <div className="pt-3 border-t border-low-contrast mt-3">
            <p className="text-sm text-dark-gray dark:text-text mb-2">
              Tréninková váha:
            </p>
            <ul className="space-y-1">
              {result.percentages.map((entry) => (
                <li
                  key={entry.percent}
                  className="flex justify-between text-sm"
                >
                  <span>{entry.percent} %</span>
                  <span className="font-medium">{entry.weight} kg</span>
                </li>
              ))}
            </ul>
          </div>
        </CalculatorResult>
      )}
    </section>
  );
};
