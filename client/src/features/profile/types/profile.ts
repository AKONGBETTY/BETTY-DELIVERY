export type Stage = "pregnancy" | "postpartum";

export interface UserProfile {
  firstName: string;
  stage: Stage;

  pregnancyWeek: number;

  postpartumDay: number;

  dueDate: string;

  deliveryDate: string;

  babyName: string;

  deliveryType: "vaginal" | "c-section";
}