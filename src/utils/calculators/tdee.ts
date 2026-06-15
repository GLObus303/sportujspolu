export type Sex = 'male' | 'female';

export type ActivityLevel =
  | 'sedentary'
  | 'light'
  | 'moderate'
  | 'active'
  | 'veryActive';

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

export const calculateBmr = (
  weightKg: number,
  heightCm: number,
  age: number,
  sex: Sex,
): number | null => {
  if (weightKg <= 0 || heightCm <= 0 || age <= 0) {
    return null;
  }

  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;

  return sex === 'male' ? base + 5 : base - 161;
};

export const calculateTdee = (
  weightKg: number,
  heightCm: number,
  age: number,
  sex: Sex,
  activity: ActivityLevel,
) => {
  const bmr = calculateBmr(weightKg, heightCm, age, sex);

  if (bmr === null) {
    return null;
  }

  const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);

  return {
    bmr: Math.round(bmr),
    tdee,
  };
};
