import { SportsType } from '../../constants';

export const MET_VALUES: Record<SportsType, number> = {
  running: 9.8,
  cycling: 7.5,
  swimming: 8.0,
  football: 7.0,
  iceHockey: 8.0,
  floorball: 7.0,
  volleyball: 4.0,
  basketball: 6.5,
  fitness: 5.0,
  hiking: 6.0,
  skiing: 7.0,
  badminton: 5.5,
  tableTennis: 4.0,
  snowboarding: 5.5,
  martialArts: 10.0,
  boxing: 9.0,
  golf: 4.5,
  kayaking: 5.0,
  canoe: 5.0,
  dancing: 4.8,
  skateboarding: 5.0,
  rollerSkating: 7.0,
  yoga: 2.5,
  bowling: 3.0,
  diving: 7.0,
  fencing: 6.0,
  cricket: 5.0,
  tennis: 7.0,
  other: 5.0,
};

export const calculateCaloriesBurned = (
  sport: SportsType,
  weightKg: number,
  durationMinutes: number,
) => {
  if (weightKg <= 0 || durationMinutes <= 0) {
    return null;
  }

  const met = MET_VALUES[sport];
  const hours = durationMinutes / 60;
  const calories = met * weightKg * hours;

  return {
    calories: Math.round(calories),
    met,
  };
};
