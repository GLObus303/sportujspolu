'use client';

import { BmiCalculator } from './BmiCalculator';
import { CaloriesCalculator } from './CaloriesCalculator';
import { HeartRateCalculator } from './HeartRateCalculator';
import { MacrosCalculator } from './MacrosCalculator';
import { OneRepMaxCalculator } from './OneRepMaxCalculator';
import { PaceCalculator } from './PaceCalculator';
import { RacePredictorCalculator } from './RacePredictorCalculator';
import { TdeeCalculator } from './TdeeCalculator';

type CalculatorWidgetProps = {
  slug: string;
};

const CALCULATOR_MAP: Record<string, React.FC> = {
  'tempo-behu': PaceCalculator,
  'predikce-casu-zavodu': RacePredictorCalculator,
  'srdni-zony': HeartRateCalculator,
  bmi: BmiCalculator,
  tdee: TdeeCalculator,
  'spalene-kalorie': CaloriesCalculator,
  '1rm': OneRepMaxCalculator,
  makra: MacrosCalculator,
};

export const CalculatorWidget: React.FC<CalculatorWidgetProps> = ({ slug }) => {
  const Component = CALCULATOR_MAP[slug];

  if (!Component) {
    return null;
  }

  return <Component />;
};
