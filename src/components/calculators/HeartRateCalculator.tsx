'use client';

import { useMemo, useState } from 'react';

import {
  calculateHeartRateZones,
  estimateMaxHeartRate,
} from '../../utils/calculators/heartRate';
import { CalculatorField } from './CalculatorField';
import { CalculatorResult } from './CalculatorResult';

export const HeartRateCalculator = () => {
  const [age, setAge] = useState('30');
  const [restingHr, setRestingHr] = useState('60');
  const [maxHr, setMaxHr] = useState('');

  const effectiveMaxHr = useMemo(() => {
    if (maxHr) {
      const parsed = parseInt(maxHr, 10);

      return parsed > 0 ? parsed : null;
    }

    const ageNum = parseInt(age, 10);

    return estimateMaxHeartRate(ageNum);
  }, [age, maxHr]);

  const zones = useMemo(() => {
    if (effectiveMaxHr === null) {
      return null;
    }

    const rest = parseInt(restingHr, 10);

    return calculateHeartRateZones(effectiveMaxHr, rest);
  }, [effectiveMaxHr, restingHr]);

  return (
    <section className="rounded-md bg-card shadow-md p-5 sm:p-8">
      <CalculatorField
        id="hr-age"
        label="Věk (let)"
        value={age}
        onChange={setAge}
        min={1}
      />
      <CalculatorField
        id="hr-rest"
        label="Klidová tepová frekvence (bpm)"
        value={restingHr}
        onChange={setRestingHr}
        min={30}
      />
      <CalculatorField
        id="hr-max"
        label="Maximální tep (bpm, volitelné)"
        value={maxHr}
        onChange={setMaxHr}
        placeholder={`Odhad: ${estimateMaxHeartRate(parseInt(age, 10) || 30) ?? '—'}`}
        min={100}
      />
      {zones && (
        <CalculatorResult>
          <ul className="space-y-3">
            {zones.map((zone) => (
              <li
                key={zone.name}
                className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-low-contrast pb-2 last:border-0"
              >
                <span>{zone.name}</span>
                <span className="font-semibold">
                  {zone.minBpm}–{zone.maxBpm} bpm
                </span>
              </li>
            ))}
          </ul>
        </CalculatorResult>
      )}
    </section>
  );
};
