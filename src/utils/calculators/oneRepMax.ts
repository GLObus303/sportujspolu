export const calculateOneRepMax = (weightKg: number, reps: number) => {
  if (weightKg <= 0 || reps <= 0 || reps > 30) {
    return null;
  }

  const oneRm = weightKg * (1 + reps / 30);

  return {
    oneRm: Math.round(oneRm * 10) / 10,
    percentages: [95, 90, 85, 80, 75, 70].map((percent) => ({
      percent,
      weight: Math.round(((oneRm * percent) / 100) * 10) / 10,
    })),
  };
};
