import { getPregnancyData } from "../services/pregnancyCalculator";

export default function PregnancyOverviewCards() {
  const pregnancy = getPregnancyData();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {/* Days Remaining */}

      <div className="rounded-3xl bg-white p-6 shadow-md border border-yellow-100">
        <p className="text-gray-500 font-medium">
          📅 Days Remaining
        </p>

        <h2 className="mt-3 text-5xl font-black text-yellow-500">
          {pregnancy.daysRemaining}
        </h2>

        <p className="mt-2 text-gray-600">
          Days to go
        </p>
      </div>

      {/* Due Date */}

      <div className="rounded-3xl bg-white p-6 shadow-md border border-yellow-100">
        <p className="text-gray-500 font-medium">
          ⏰ Due Date
        </p>

        <h2 className="mt-3 text-3xl font-black">
          Nov 3
        </h2>

        <p className="text-gray-600">
          2026
        </p>
      </div>

      {/* Trimester */}

      <div className="rounded-3xl bg-white p-6 shadow-md border border-yellow-100">
        <p className="text-gray-500 font-medium">
          🌼 Trimester
        </p>

        <h2 className="mt-3 text-3xl font-black">
          {pregnancy.trimester}
        </h2>
      </div>

      {/* Week */}

      <div className="rounded-3xl bg-white p-6 shadow-md border border-yellow-100">
        <p className="text-gray-500 font-medium">
          👣 Pregnancy Week
        </p>

        <h2 className="mt-3 text-5xl font-black text-yellow-500">
          {pregnancy.weeks}
        </h2>

        <p className="text-gray-600">
          of 40 weeks
        </p>
      </div>

    </div>
  );
}