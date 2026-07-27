import type { PregnancyWeek } from "../types/pregnancy";

interface Props {
  week: PregnancyWeek;
}

export default function BabyDevelopmentCard({ week }: Props) {
  return (
    <div className="rounded-3xl border border-yellow-100 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">

      <h2 className="text-3xl font-bold">
        🧠 Baby Development
      </h2>

      {/* Illustration */}

      <div className="mt-8 flex justify-center">

        <div className="flex h-52 w-52 items-center justify-center rounded-full bg-yellow-50 text-7xl shadow-inner">
          👶
        </div>

      </div>

      {/* Description */}

      <p className="mt-8 text-lg leading-9 text-gray-700">
        {week.babyDevelopment}
      </p>

    </div>
  );
}