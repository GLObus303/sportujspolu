'use client';

import { useMemo, useState } from 'react';

import { calculatePace } from '../../utils/calculators/pace';
import { CalculatorField } from './CalculatorField';
import { CalculatorResult, CalculatorResultRow } from './CalculatorResult';

export const PaceCalculator = () => {
  const [distance, setDistance] = useState('10');
  const [time, setTime] = useState('50');

  const result = useMemo(() => {
    const distanceKm = parseFloat(distance);
    const timeMinutes = parseFloat(time);

    return calculatePace(distanceKm, timeMinutes);
  }, [distance, time]);

  return (
    <section className="rounded-md bg-card shadow-md p-5 sm:p-8">
      <CalculatorField
        id="pace-distance"
        label="Vzdálenost (km)"
        value={distance}
        onChange={setDistance}
        min={0}
        step={0.1}
      />
      <CalculatorField
        id="pace-time"
        label="Čas (minuty)"
        value={time}
        onChange={setTime}
        min={0}
        step={0.1}
      />
      {result && (
        <CalculatorResult>
          <CalculatorResultRow label="Tempo" value={result.paceFormatted} />
          <CalculatorResultRow
            label="Rychlost"
            value={`${result.speedKmh} km/h`}
          />
        </CalculatorResult>
      )}
    </section>
  );
};
