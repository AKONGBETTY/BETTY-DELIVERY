import { getPregnancyData } from "../services/pregnancyCalculator";
import PregnancyProgressRing from "./PregnancyProgressRing";

export default function PregnancyHero() {
  const pregnancy = getPregnancyData();

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-yellow-100 bg-white p-10 shadow-lg">

      {/* Due Date Pill */}
      <div className="absolute right-8 top-8 rounded-full bg-yellow-100 px-6 py-3 shadow-sm">
        <p className="font-semibold text-gray-800">
          📅 Due Date: Nov 3, 2026
        </p>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <h1 className="text-5xl font-black text-black">
            Pregnancy Progress 💛
          </h1>

          <div className="mt-8 flex items-end gap-4">

            <span className="text-7xl font-black text-yellow-500">
              {pregnancy.weeks}
            </span>

            <div className="pb-2">

              <span className="text-4xl font-bold">
                Weeks
              </span>

              <div className="text-3xl font-bold">
                {pregnancy.days} Days
              </div>

            </div>

          </div>

          <div className="mt-6 inline-flex rounded-full bg-yellow-100 px-5 py-2">

            <span className="font-semibold">
              🟡 {pregnancy.trimester}
            </span>

          </div>

          <p className="mt-8 max-w-md text-xl leading-9 text-gray-600">
            Every day brings you one step closer to meeting your little miracle.
          </p>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <PregnancyProgressRing />

        </div>

      </div>

    </section>
  );
}