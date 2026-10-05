import Card from "@/components/ui/Card";
import PregnancyHero from "@/features/pregnancy/components/PregnancyHero";
import PregnancyOverviewCards from "@/features/pregnancy/components/PregnancyOverviewCards";
import BabyDevelopmentCard from "@/features/pregnancy/components/BabyDevelopmentCard";
import MotherChangesCard from "@/features/pregnancy/components/MotherChangesCard";
import { getPregnancyData } from "@/features/pregnancy/services/pregnancyCalculator";

const prenatalChecklist = [
  "Stay hydrated and eat balanced meals",
  "Take your prenatal vitamins with food",
  "Move gently with a walk or stretching",
  "Rest and monitor any unusual symptoms",
  "Review your appointment plan for the week",
];

const trimesterMilestones = [
  { label: "First trimester", detail: "Early growth and hormones", active: false },
  { label: "Second trimester", detail: "Feeling movement and growth", active: false },
  { label: "Third trimester", detail: "Final preparation and baby growth", active: true },
];

export default function PregnancyPage() {
  const pregnancy = getPregnancyData();

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <PregnancyHero />
      <PregnancyOverviewCards />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <BabyDevelopmentCard week={pregnancy.currentWeek} />
        <MotherChangesCard week={pregnancy.currentWeek} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h2 className="text-2xl font-black text-gray-900">Pregnancy profile</h2>

          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <div className="rounded-2xl bg-yellow-50 p-4">
              <p className="font-semibold uppercase tracking-[0.2em] text-gray-500">Current stage</p>
              <p className="mt-2 text-xl font-black text-yellow-700">{pregnancy.trimester}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-yellow-100 p-4">
                <p className="font-semibold text-gray-500">Due date</p>
                <p className="mt-2 text-lg font-bold text-gray-900">Nov 3, 2026</p>
              </div>
              <div className="rounded-2xl border border-yellow-100 p-4">
                <p className="font-semibold text-gray-500">Current week</p>
                <p className="mt-2 text-lg font-bold text-gray-900">Week {pregnancy.weeks}</p>
              </div>
              <div className="rounded-2xl border border-yellow-100 p-4">
                <p className="font-semibold text-gray-500">Days remaining</p>
                <p className="mt-2 text-lg font-bold text-gray-900">{pregnancy.daysRemaining}</p>
              </div>
              <div className="rounded-2xl border border-yellow-100 p-4">
                <p className="font-semibold text-gray-500">Progress</p>
                <p className="mt-2 text-lg font-bold text-gray-900">{pregnancy.percentage}%</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-gray-900">This week’s checklist</h2>

          <div className="mt-6 space-y-3">
            {prenatalChecklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-yellow-50 p-4 text-gray-700">
                <span className="mt-0.5 text-xl">✅</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-2xl font-black text-gray-900">Trimester flow</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {trimesterMilestones.map((milestone) => (
            <div
              key={milestone.label}
              className={`rounded-2xl border p-5 ${
                milestone.active
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-yellow-100 bg-white"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{milestone.label}</p>
              <p className="mt-3 text-lg font-bold text-gray-900">{milestone.detail}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}