'use client';

import { useMemo, useState } from 'react';

import {
  ActivityLevel,
  calculateTdee,
  Sex,
} from '../../utils/calculators/tdee';
import { CalculatorField, CalculatorSelect } from './CalculatorField';
import { CalculatorResult, CalculatorResultRow } from './CalculatorResult';

const SEX_OPTIONS = [
  { value: 'male', label: 'Muž' },
  { value: 'female', label: 'Žena' },
];

const ACTIVITY_OPTIONS: { value: ActivityLevel; label: string }[] = [
  { value: 'sedentary', label: 'Sedavý (málo pohybu)' },
  { value: 'light', label: 'Lehká aktivita (1–3× týdně)' },
  { value: 'moderate', label: 'Střední (3–5× týdně)' },
  { value: 'active', label: 'Aktivní (6–7× týdně)' },
  { value: 'veryActive', label: 'Velmi aktivní (2× denně)' },
];

export const TdeeCalculator = () => {
  const [weight, setWeight] = useState('80');
  const [height, setHeight] = useState('180');
  const [age, setAge] = useState('30');
  const [sex, setSex] = useState<Sex>('male');
  const [activity, setActivity] = useState<ActivityLevel>('moderate');

  const result = useMemo(() => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageNum = parseInt(age, 10);

    return calculateTdee(weightKg, heightCm, ageNum, sex, activity);
  }, [weight, height, age, sex, activity]);

  return (
    <section className="rounded-md bg-card shadow-md p-5 sm:p-8">
      <CalculatorSelect
        id="tdee-sex"
        label="Pohlaví"
        value={sex}
        onChange={(value) => setSex(value as Sex)}
        options={SEX_OPTIONS}
      />
      <CalculatorField
        id="tdee-weight"
        label="Váha (kg)"
        value={weight}
        onChange={setWeight}
        min={0}
      />
      <CalculatorField
        id="tdee-height"
        label="Výška (cm)"
        value={height}
        onChange={setHeight}
        min={0}
      />
      <CalculatorField
        id="tdee-age"
        label="Věk (let)"
        value={age}
        onChange={setAge}
        min={1}
      />
      <CalculatorSelect
        id="tdee-activity"
        label="Úroveň aktivity"
        value={activity}
        onChange={(value) => setActivity(value as ActivityLevel)}
        options={ACTIVITY_OPTIONS}
      />
      {result && (
        <CalculatorResult>
          <CalculatorResultRow
            label="Bazální metabolismus (BMR)"
            value={`${result.bmr} kcal`}
          />
          <CalculatorResultRow
            label="Denní příjem (TDEE)"
            value={`${result.tdee} kcal`}
          />
        </CalculatorResult>
      )}
    </section>
  );
};
