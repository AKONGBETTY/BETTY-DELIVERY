import { getPregnancyData } from "../services/pregnancyCalculator";

export default function DueDateCard() {
  const pregnancy = getPregnancyData();

  return (
    <div className="rounded-3xl bg-linear-to-br from-yellow-400 to-yellow-500 p-8 text-black shadow-lg">

      <p className="text-lg font-semibold">
        ⏳ Countdown
      </p>

      <h2 className="mt-3 text-4xl font-black">
        {pregnancy.daysRemaining}
      </h2>

      <p className="mt-2 text-xl">
        Days Until Baby Arrives
      </p>

      <div className="mt-8 rounded-2xl bg-white/40 p-4 backdrop-blur-sm">

        <p className="text-sm font-semibold uppercase">
          Expected Due Date
        </p>

        <p className="mt-1 text-2xl font-black">
          November 3, 2026
        </p>

      </div>

    </div>
  );
}