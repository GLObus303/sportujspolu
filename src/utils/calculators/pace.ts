export const formatPace = (minutesPerKm: number): string => {
  if (!Number.isFinite(minutesPerKm) || minutesPerKm <= 0) {
    return '—';
  }

  const minutes = Math.floor(minutesPerKm);
  const seconds = Math.round((minutesPerKm - minutes) * 60);

  return `${minutes}:${String(seconds).padStart(2, '0')} min/km`;
};

export const calculatePace = (distanceKm: number, timeMinutes: number) => {
  if (distanceKm <= 0 || timeMinutes <= 0) {
    return null;
  }

  const paceMinPerKm = timeMinutes / distanceKm;
  const speedKmh = (distanceKm / timeMinutes) * 60;

  return {
    paceMinPerKm,
    paceFormatted: formatPace(paceMinPerKm),
    speedKmh: Math.round(speedKmh * 10) / 10,
  };
};
