import { getPregnancyData } from "../services/pregnancyCalculator";

export default function PregnancyCountdown() {
  const pregnancy = getPregnancyData();

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-yellow-600">
        🌸 Pregnancy Progress
      </h2>

      <p className="mt-4 text-4xl font-black">
        {pregnancy.weeks} Weeks {pregnancy.days} Days
      </p>

      <p className="mt-2 text-gray-600">
        {pregnancy.trimester}
      </p>

      <div className="mt-6 h-4 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-yellow-500 transition-all duration-500"
          style={{
            width: `${pregnancy.percentage}%`,
          }}
        />
      </div>

      <div className="mt-3 flex justify-between text-sm">
        <span>{pregnancy.percentage}% Complete</span>

        <span>{pregnancy.daysRemaining} Days Remaining</span>
      </div>

      <div className="mt-6 rounded-xl bg-yellow-50 p-4">
        <p className="font-semibold">Estimated Due Date</p>

        <p className="text-lg font-bold">
          November 3, 2026
        </p>
      </div>
    </div>
  );
}