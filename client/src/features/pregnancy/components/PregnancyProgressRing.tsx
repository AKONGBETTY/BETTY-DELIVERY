import { getPregnancyData } from "../services/pregnancyCalculator";

export default function PregnancyProgressRing() {
  const pregnancy = getPregnancyData();

  const radius = 90;
  const stroke = 14;

  const normalizedRadius = radius - stroke / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (pregnancy.percentage / 100) * circumference;

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-3xl font-black text-yellow-500">
        🐝 Pregnancy Progress
      </h2>

      <div className="flex justify-center">

        <div className="relative">

          <svg
            height={radius * 2}
            width={radius * 2}
            className="-rotate-90"
          >
            <circle
              stroke="#F3F4F6"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            <circle
              stroke="#EAB308"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              style={{
                transition: "stroke-dashoffset 1s ease",
              }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <span className="text-5xl font-black">
              {pregnancy.percentage}%
            </span>
            <p className="mt-3 text-sm text-gray-500">
                Week {pregnancy.weeks}
            </p>
            <p className="text-sm font-semibold text-yellow-600">
              {pregnancy.trimester}
            </p>
            <span className="mt-2 text-gray-500">
              Complete
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}