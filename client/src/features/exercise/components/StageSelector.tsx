import type { ExerciseStage } from "../types/exercise";
import { exerciseStages } from "../data/exerciseStages";

interface Props {
  value: ExerciseStage;
  onChange: (stage: ExerciseStage) => void;
}

export default function StageSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="font-semibold">
        Current Exercise Stage
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value as ExerciseStage)
        }
        className="w-full rounded-xl border border-yellow-300 bg-white px-5 py-4 text-lg"
      >
        {exerciseStages.map((stage) => (
          <option
            key={stage}
            value={stage}
          >
            {stage}
          </option>
        ))}
      </select>
    </div>
  );
}