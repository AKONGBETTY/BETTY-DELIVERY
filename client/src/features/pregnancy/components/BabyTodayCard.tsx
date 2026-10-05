import Card from "@/components/ui/Card";
import type { PregnancyWeek } from "../types/pregnancy";

interface Props {
  week: PregnancyWeek;
}

export default function BabyTodayCard({ week }: Props) {
  return (
    <Card>

      <h2 className="text-3xl font-bold text-yellow-700">
        👶 Baby Today
      </h2>

      <p className="mt-2 text-gray-500">
        Pregnancy Week {week.week}
      </p>

      <div className="mt-8 grid grid-cols-2 items-center gap-8">

        <div className="flex justify-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-yellow-100 text-center text-3xl font-black text-green-700">
            {week.fruit}
          </div>
        </div>

        <div>
          <p className="text-gray-500">
            Baby Size
          </p>

          <h3 className="text-4xl font-black">
            {week.fruit}
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Your little one continues to grow stronger every day.
          </p>
        </div>

      </div>

      <div className="mt-10 grid grid-cols-3 gap-4 border-t border-yellow-100 pt-6">

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Length
          </p>

          <p className="text-2xl font-bold">
            {week.lengthCm} cm
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Weight
          </p>

          <p className="text-2xl font-bold">
            {week.weightKg} kg
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Week
          </p>

          <p className="text-2xl font-bold">
            {week.week}
          </p>
        </div>

      </div>

    </Card>
  );
}