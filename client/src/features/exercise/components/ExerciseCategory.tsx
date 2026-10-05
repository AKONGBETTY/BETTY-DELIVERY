import Card from "@/components/ui/Card";
import type { Exercise } from "../types/exercise";
import ExerciseCard from "./ExerciseCard";

interface Props {
  emoji: string;
  title: string;
  description: string;
  exercises: Exercise[];
  onToggle: (id: number) => void;

}

export default function ExerciseCategory({
  emoji,
  title,
  description,
  exercises,
  onToggle,
  
}: Props) {
  return (
    <Card className="transition-all duration-300 hover:shadow-xl">
      <div className="text-5xl">{emoji}</div>

      <h2 className="mt-5 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onToggle={onToggle}
          />
        ))}
      </div>
    </Card>
  );
}