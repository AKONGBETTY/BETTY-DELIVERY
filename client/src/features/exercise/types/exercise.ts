export type ExerciseStage =
  | "Third Trimester"
  | "Postpartum 24 Hours"
  | "Postpartum Week 1"
  | "Postpartum Weeks 2-6"
  | "Postpartum Weeks 6-12"
  | "Postpartum 3-6 Months";

export interface Exercise {
  
  id: number;
  title: string;
  stage: ExerciseStage;
  duration: string;
  difficulty: "Easy" | "Moderate";
  benefits: string[];
  precautions: string[];
  youtube: string;
  completed?: boolean;
  instructions: string[];

  favorite?: boolean;
}
