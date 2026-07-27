import type { PregnancyWeek } from "../types/pregnancy";

interface Props {
  week: PregnancyWeek;
}

export default function BabyTodayCard({ week }: Props) {
  return (
    <div className="rounded-3xl border border-yellow-100 bg-linear-to-br from-yellow-50 via-white to-yellow-100 p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">

      <h2 className="text-3xl font-bold text-yellow-700">
        👶 Baby Today
      </h2>

      <p className="mt-2 text-lg text-gray-500">
        Pregnancy Week {week.week}
      </p>

      <div className="mt-8 grid grid-cols-2 items-center gap-8">

        {/* Fruit */}

        <div className="flex justify-center">
          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-yellow-100 text-center text-3xl font-black text-green-700 shadow-inner">
            {week.fruit}
          </div>
        </div>

        {/* Information */}

        <div>

          <p className="text-gray-500">
            Baby Size
          </p>

          <h3 className="text-4xl font-black">
            {week.fruit}
          </h3>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Your little one is growing beautifully every single day.
          </p>

        </div>

      </div>

      <div className="mt-10 grid grid-cols-3 gap-4 border-t border-yellow-200 pt-6">

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

    </div>
  );
}