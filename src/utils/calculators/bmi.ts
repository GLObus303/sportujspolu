export type BmiCategory = 'Podváha' | 'Normální váha' | 'Nadváha' | 'Obezita';

export const calculateBmi = (weightKg: number, heightCm: number) => {
  if (weightKg <= 0 || heightCm <= 0) {
    return null;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  let category: BmiCategory;

  if (bmi < 18.5) {
    category = 'Podváha';
  } else if (bmi < 25) {
    category = 'Normální váha';
  } else if (bmi < 30) {
    category = 'Nadváha';
  } else {
    category = 'Obezita';
  }

  return {
    bmi: Math.round(bmi * 10) / 10,
    category,
  };
};
