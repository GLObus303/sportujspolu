type HeartRateZone = {
  name: string;
  minPercent: number;
  maxPercent: number;
  minBpm: number;
  maxBpm: number;
};

const ZONE_DEFINITIONS = [
  { name: 'Zóna 1 – Regenerace', minPercent: 50, maxPercent: 60 },
  { name: 'Zóna 2 – Vytrvalost', minPercent: 60, maxPercent: 70 },
  { name: 'Zóna 3 – Aerobní', minPercent: 70, maxPercent: 80 },
  { name: 'Zóna 4 – Anaerobní práh', minPercent: 80, maxPercent: 90 },
  { name: 'Zóna 5 – Maximum', minPercent: 90, maxPercent: 100 },
];

export const calculateHeartRateZones = (
  maxHeartRate: number,
  restingHeartRate: number,
): HeartRateZone[] | null => {
  if (
    maxHeartRate <= 0 ||
    restingHeartRate < 0 ||
    maxHeartRate <= restingHeartRate
  ) {
    return null;
  }

  const reserve = maxHeartRate - restingHeartRate;

  return ZONE_DEFINITIONS.map((zone) => ({
    ...zone,
    minBpm: Math.round((reserve * zone.minPercent) / 100 + restingHeartRate),
    maxBpm: Math.round((reserve * zone.maxPercent) / 100 + restingHeartRate),
  }));
};

export const estimateMaxHeartRate = (age: number): number | null => {
  if (age <= 0 || age > 120) {
    return null;
  }

  return 220 - age;
};
