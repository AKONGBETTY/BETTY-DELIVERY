export interface PregnancyData {
  weeks: number;
  days: number;
  trimester: string;
  daysRemaining: number;
  percentage: number;
}

const DUE_DATE = new Date("2026-11-03");

export function getPregnancyData(): PregnancyData {
  const today = new Date();

  const totalPregnancyDays = 280;

  const msPerDay = 1000 * 60 * 60 * 24;

  const daysRemaining = Math.max(
    0,
    Math.ceil((DUE_DATE.getTime() - today.getTime()) / msPerDay)
  );

  const daysPregnant = totalPregnancyDays - daysRemaining;

  const weeks = Math.floor(daysPregnant / 7);

  const days = daysPregnant % 7;

  let trimester = "";

  if (weeks < 13) {
    trimester = "First Trimester";
  } else if (weeks < 28) {
    trimester = "Second Trimester";
  } else {
    trimester = "Third Trimester";
  }

  const percentage = Math.min(
    100,
    Math.round((daysPregnant / totalPregnancyDays) * 100)
  );

  return {
    weeks,
    days,
    trimester,
    daysRemaining,
    percentage,
  };
}