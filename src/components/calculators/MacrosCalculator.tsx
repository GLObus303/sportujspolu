'use client';

import { useMemo, useState } from 'react';

import { ActivityLevel, Sex } from '../../utils/calculators/tdee';
import { calculateMacros } from '../../utils/calculators/macros';
import { CalculatorField, CalculatorSelect } from './CalculatorField';
import { CalculatorResult, CalculatorResultRow } from './CalculatorResult';

const SEX_OPTIONS = [
  { value: 'male', label: 'Muž' },
  { value: 'female', label: 'Žena' },
];

const ACTIVITY_OPTIONS: { value: ActivityLevel; label: string }[] = [
  { value: 'sedentary', label: 'Sedavý' },
  { value: 'light', label: 'Lehká aktivita' },
  { value: 'moderate', label: 'Střední' },
  { value: 'active', label: 'Aktivní' },
  { value: 'veryActive', label: 'Velmi aktivní' },
];

export const MacrosCalculator = () => {
  const [weight, setWeight] = useState('80');
  const [height, setHeight] = useState('180');
  const [age, setAge] = useState('30');
  const [sex, setSex] = useState<Sex>('male');
  const [activity, setActivity] = useState<ActivityLevel>('moderate');

  const result = useMemo(() => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageNum = parseInt(age, 10);

    return calculateMacros(weightKg, heightCm, ageNum, sex, activity);
  }, [weight, height, age, sex, activity]);

  return (
    <section className="rounded-md bg-card shadow-md p-5 sm:p-8">
      <CalculatorSelect
        id="macros-sex"
        label="Pohlaví"
        value={sex}
        onChange={(value) => setSex(value as Sex)}
        options={SEX_OPTIONS}
      />
      <CalculatorField
        id="macros-weight"
        label="Váha (kg)"
        value={weight}
        onChange={setWeight}
        min={0}
      />
      <CalculatorField
        id="macros-height"
        label="Výška (cm)"
        value={height}
        onChange={setHeight}
        min={0}
      />
      <CalculatorField
        id="macros-age"
        label="Věk (let)"
        value={age}
        onChange={setAge}
        min={1}
      />
      <CalculatorSelect
        id="macros-activity"
        label="Úroveň aktivity"
        value={activity}
        onChange={(value) => setActivity(value as ActivityLevel)}
        options={ACTIVITY_OPTIONS}
      />
      {result && (
        <CalculatorResult>
          <CalculatorResultRow
            label="Denní kalorie (TDEE)"
            value={`${result.tdee} kcal`}
          />
          <CalculatorResultRow
            label="Bílkoviny"
            value={`${result.proteinG} g`}
          />
          <CalculatorResultRow label="Sacharidy" value={`${result.carbsG} g`} />
          <CalculatorResultRow label="Tuky" value={`${result.fatG} g`} />
        </CalculatorResult>
      )}
    </section>
  );
};
