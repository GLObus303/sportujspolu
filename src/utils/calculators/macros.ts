import { ActivityLevel, calculateTdee, Sex } from './tdee';

export const calculateMacros = (
  weightKg: number,
  heightCm: number,
  age: number,
  sex: Sex,
  activity: ActivityLevel,
) => {
  const tdeeResult = calculateTdee(weightKg, heightCm, age, sex, activity);

  if (!tdeeResult) {
    return null;
  }

  const { tdee } = tdeeResult;
  const proteinG = Math.round(weightKg * 2);
  const proteinCal = proteinG * 4;
  const fatCal = Math.round(tdee * 0.25);
  const fatG = Math.round(fatCal / 9);
  const carbsCal = tdee - proteinCal - fatCal;
  const carbsG = Math.round(carbsCal / 4);

  return {
    tdee,
    proteinG,
    fatG,
    carbsG,
  };
};
