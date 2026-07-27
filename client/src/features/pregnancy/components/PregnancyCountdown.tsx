import { getPregnancyData } from "../services/pregnancyCalculator";

export default function PregnancyCountdown() {
  const pregnancy = getPregnancyData();

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-black text-yellow-500">
        🌸 Pregnancy Progress
      </h2>

      <p className="mt-4 text-5xl font-black">
        {pregnancy.weeks} Weeks {pregnancy.days} Days
      </p>

      <p className="mt-2 text-lg text-gray-600">
        {pregnancy.trimester}
      </p>

      {/* Progress Bar */}

      <div className="mt-8 h-5 overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-yellow-500 transition-all duration-700"
          style={{
            width: `${pregnancy.percentage}%`,
          }}
        />

      </div>

      <div className="mt-3 flex justify-between">

        <span className="font-semibold">
          {pregnancy.percentage}% Complete
        </span>

        <span className="font-semibold">
          {pregnancy.daysRemaining} Days Remaining
        </span>

      </div>

      {/* Baby Today */}

      <div className="mt-10 rounded-2xl bg-yellow-50 p-6">

        <h3 className="text-2xl font-bold">
          👶 Baby Today
        </h3>

        <div className="mt-5 grid grid-cols-3 gap-6">

          <div>
            <p className="text-sm text-gray-500">Size</p>
            <p className="text-xl font-bold">
              {pregnancy.currentWeek.fruit}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Length</p>
            <p className="text-xl font-bold">
              {pregnancy.currentWeek.lengthCm} cm
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Weight</p>
            <p className="text-xl font-bold">
              {pregnancy.currentWeek.weightKg} kg
            </p>
          </div>

        </div>

      </div>

      {/* Baby Development */}

      <div className="mt-8 rounded-2xl bg-white border p-6">

        <h3 className="text-2xl font-bold text-yellow-600">
          🧠 Baby Development
        </h3>

        <p className="mt-3 leading-8 text-gray-700">
          {pregnancy.currentWeek.babyDevelopment}
        </p>

      </div>

      {/* Mother's Body */}

      <div className="mt-8 rounded-2xl bg-white border p-6">

        <h3 className="text-2xl font-bold text-yellow-600">
          🤰 Your Body
        </h3>

        <p className="mt-3 leading-8 text-gray-700">
          {pregnancy.currentWeek.motherChanges}
        </p>

      </div>

    </div>
  );
}