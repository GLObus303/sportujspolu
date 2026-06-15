'use client';

import { useMemo, useState } from 'react';

import { sportsOptions, SportsType } from '../../constants';
import { calculateCaloriesBurned } from '../../utils/calculators/calories';
import { CalculatorField, CalculatorSelect } from './CalculatorField';
import { CalculatorResult, CalculatorResultRow } from './CalculatorResult';

export const CaloriesCalculator = () => {
  const [sport, setSport] = useState<SportsType>('running');
  const [weight, setWeight] = useState('70');
  const [duration, setDuration] = useState('60');

  const result = useMemo(() => {
    const weightKg = parseFloat(weight);
    const durationMinutes = parseFloat(duration);

    return calculateCaloriesBurned(sport, weightKg, durationMinutes);
  }, [sport, weight, duration]);

  return (
    <section className="rounded-md bg-card shadow-md p-5 sm:p-8">
      <CalculatorSelect
        id="calories-sport"
        label="Sport"
        value={sport}
        onChange={(value) => setSport(value as SportsType)}
        options={sportsOptions}
      />
      <CalculatorField
        id="calories-weight"
        label="Váha (kg)"
        value={weight}
        onChange={setWeight}
        min={0}
      />
      <CalculatorField
        id="calories-duration"
        label="Délka aktivity (minuty)"
        value={duration}
        onChange={setDuration}
        min={0}
      />
      {result && (
        <CalculatorResult>
          <CalculatorResultRow
            label="Spálené kalorie"
            value={`${result.calories} kcal`}
          />
          <CalculatorResultRow label="MET hodnota" value={String(result.met)} />
        </CalculatorResult>
      )}
    </section>
  );
};
