import { pregnancyWeeks } from "../data/pregnancyWeeks";
import type { PregnancyWeek } from "../types/pregnancy";

export interface PregnancyData {
  weeks: number;
  days: number;
  trimester: string;
  daysRemaining: number;
  percentage: number;
  currentWeek: PregnancyWeek;
}

const DUE_DATE = new Date("2026-11-03");

export function getPregnancyData(): PregnancyData {
  const today = new Date();

  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const TOTAL_PREGNANCY_DAYS = 280;

  const daysRemaining = Math.max(
    0,
    Math.ceil((DUE_DATE.getTime() - today.getTime()) / MS_PER_DAY)
  );

  const daysPregnant = TOTAL_PREGNANCY_DAYS - daysRemaining;

  const weeks = Math.max(
    1,
    Math.min(40, Math.floor(daysPregnant / 7))
  );

  const days = daysPregnant % 7;

  const percentage = Math.min(
    100,
    Math.round((daysPregnant / TOTAL_PREGNANCY_DAYS) * 100)
  );

  let trimester: string;

  if (weeks <= 13) {
    trimester = "First Trimester";
  } else if (weeks <= 27) {
    trimester = "Second Trimester";
  } else {
    trimester = "Third Trimester";
  }

  const currentWeek =
    pregnancyWeeks.find((item) => item.week === weeks) ??
    pregnancyWeeks[pregnancyWeeks.length - 1];

  return {
    weeks,
    days,
    trimester,
    daysRemaining,
    percentage,
    currentWeek,
  };
}