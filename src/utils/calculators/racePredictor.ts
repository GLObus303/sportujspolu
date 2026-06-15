const RIEGEL_EXPONENT = 1.06;

export const parseTimeToMinutes = (time: string): number | null => {
  const parts = time.trim().split(':').map(Number);

  if (parts.some((part) => Number.isNaN(part))) {
    return null;
  }

  if (parts.length === 2) {
    const [minutes, seconds] = parts;

    if (minutes === undefined || seconds === undefined) {
      return null;
    }

    return minutes * 60 + seconds;
  }

  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;

    if (hours === undefined || minutes === undefined || seconds === undefined) {
      return null;
    }

    return hours * 60 + minutes + seconds / 60;
  }

  return null;
};

export const formatMinutesToTime = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  const seconds = Math.round((totalMinutes % 1) * 60);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return `${minutes}:${String(seconds).padStart(2, '0')}`;
};

export const predictRaceTime = (
  knownDistanceKm: number,
  knownTimeMinutes: number,
  targetDistanceKm: number,
) => {
  if (knownDistanceKm <= 0 || knownTimeMinutes <= 0 || targetDistanceKm <= 0) {
    return null;
  }

  const predictedMinutes =
    knownTimeMinutes *
    Math.pow(targetDistanceKm / knownDistanceKm, RIEGEL_EXPONENT);

  return {
    predictedMinutes,
    formatted: formatMinutesToTime(predictedMinutes),
  };
};
