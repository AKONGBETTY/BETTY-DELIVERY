import Card from "@/components/ui/Card";
import ExerciseVideoButton from "./ExerciseVideoButton";
import type { Exercise } from "@/features/exercise/types/exercise";
interface Props {
  exercise: Exercise;
  onToggle: (id: number) => void;
}

export default function ExerciseCard({
  exercise,
  onToggle,
}: Props) {
  return (
    <Card className="transition-all duration-300 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-2xl font-bold">
            {exercise.title}
          </h3>

         <div className="mt-5 grid grid-cols-3 gap-3">

  <div className="rounded-xl bg-yellow-50 p-3 text-center">
    <p className="text-xs text-gray-500">
      Duration
    </p>

    <p className="font-bold">
      {exercise.duration}
    </p>
  </div>

  <div className="rounded-xl bg-green-50 p-3 text-center">
    <p className="text-xs text-gray-500">
      Difficulty
    </p>

    <p className="font-bold">
      {exercise.difficulty}
    </p>
  </div>

  <div className="rounded-xl bg-blue-50 p-3 text-center">
    <p className="text-xs text-gray-500">
      Stage
    </p>

    <p className="font-bold text-sm">
      {exercise.stage}
    </p>
  </div>

</div>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-bold ${
            exercise.difficulty === "Easy"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {exercise.difficulty}
        </span>

      </div>

      <div className="mt-8">

        <h4 className="font-bold">
          Benefits
        </h4>
        <div className="mt-8">

  <h4 className="font-bold text-blue-700">
    📋 How to Perform
  </h4>

  <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-600">

    {exercise.instructions.map((step) => (
      <li key={step}>
        {step}
      </li>
    ))}

  </ol>

</div>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">

          {exercise.benefits.map((benefit) => (
            <li key={benefit}>
              {benefit}
            </li>
          ))}

        </ul>

      </div>

      <div className="mt-8">

       <h4 className="font-bold text-red-600">
            ⚠ Safety Tips
       </h4>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">

          {exercise.precautions.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}

        </ul>

      </div>

      <div className="mt-8">

        <ExerciseVideoButton
          youtube={exercise.youtube}
        />

      </div>
      <button
         onClick={() => onToggle(exercise.id)}
          className="mt-6 w-full rounded-lg bg-yellow-500 py-3 font-bold"
          >
           {exercise.completed ? "✅ Completed" : "Mark as Completed"}
       </button>

    </Card>
  );
}