'use client';

import { useMemo, useState } from 'react';

import { calculateBmi } from '../../utils/calculators/bmi';
import { CalculatorField } from './CalculatorField';
import { CalculatorResult, CalculatorResultRow } from './CalculatorResult';

export const BmiCalculator = () => {
  const [weight, setWeight] = useState('75');
  const [height, setHeight] = useState('180');

  const result = useMemo(() => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);

    return calculateBmi(weightKg, heightCm);
  }, [weight, height]);

  return (
    <section className="rounded-md bg-card shadow-md p-5 sm:p-8">
      <CalculatorField
        id="bmi-weight"
        label="Váha (kg)"
        value={weight}
        onChange={setWeight}
        min={0}
      />
      <CalculatorField
        id="bmi-height"
        label="Výška (cm)"
        value={height}
        onChange={setHeight}
        min={0}
      />
      {result && (
        <CalculatorResult>
          <CalculatorResultRow label="BMI" value={String(result.bmi)} />
          <CalculatorResultRow label="Kategorie" value={result.category} />
        </CalculatorResult>
      )}
    </section>
  );
};
