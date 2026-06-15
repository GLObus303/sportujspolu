'use client';

import { useMemo, useState } from 'react';

import {
  parseTimeToMinutes,
  predictRaceTime,
} from '../../utils/calculators/racePredictor';
import { CalculatorField } from './CalculatorField';
import { CalculatorResult, CalculatorResultRow } from './CalculatorResult';

const DISTANCE_OPTIONS = [
  { value: '5', label: '5 km' },
  { value: '10', label: '10 km' },
  { value: '21.097', label: 'Půlmaraton (21,1 km)' },
  { value: '42.195', label: 'Maraton (42,2 km)' },
];

export const RacePredictorCalculator = () => {
  const [knownDistance, setKnownDistance] = useState('5');
  const [knownTime, setKnownTime] = useState('25:00');
  const [targetDistance, setTargetDistance] = useState('10');

  const result = useMemo(() => {
    const timeMinutes = parseTimeToMinutes(knownTime);
    const knownDist = parseFloat(knownDistance);
    const targetDist = parseFloat(targetDistance);

    if (timeMinutes === null) {
      return null;
    }

    return predictRaceTime(knownDist, timeMinutes, targetDist);
  }, [knownDistance, knownTime, targetDistance]);

  return (
    <section className="rounded-md bg-card shadow-md p-5 sm:p-8">
      <CalculatorField
        id="race-known-distance"
        label="Známá vzdálenost (km)"
        value={knownDistance}
        onChange={setKnownDistance}
        min={0}
        step={0.1}
      />
      <CalculatorField
        id="race-known-time"
        label="Čas na známé trase (mm:ss)"
        value={knownTime}
        onChange={setKnownTime}
        type="text"
        placeholder="25:00"
      />
      <label
        htmlFor="race-target-distance"
        className="relative w-full mb-5 block"
      >
        <span className="text-xs text-dark-gray dark:text-text">
          Cílová vzdálenost
        </span>
        <select
          id="race-target-distance"
          value={targetDistance}
          onChange={(event) => setTargetDistance(event.target.value)}
          className="w-full bg-card px-2 sm:px-5 py-3 focus:outline-primary border border-medium-gray"
        >
          {DISTANCE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {result && (
        <CalculatorResult>
          <CalculatorResultRow
            label="Predikovaný čas"
            value={result.formatted}
          />
        </CalculatorResult>
      )}
    </section>
  );
};
