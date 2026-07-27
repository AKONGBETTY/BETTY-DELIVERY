import TodaysFocus from "../components/TodaysFocus";
import MedicationReminder from "../components/MedicationReminder";

import PregnancyStats from "@/features/pregnancy/components/PregnancyStats";
import PregnancyProgressRing from "@/features/pregnancy/components/PregnancyProgressRing";
import BabyTodayCard from "@/features/pregnancy/components/BabyTodayCard";
import DueDateCard from "@/features/pregnancy/components/DueDateCard";
import BabyDevelopmentCard from "@/features/pregnancy/components/BabyDevelopmentCard";
import MotherChangesCard from "@/features/pregnancy/components/MotherChangesCard";
import WeeklyTipCard from "@/features/pregnancy/components/WeeklyTipCard";

import { getPregnancyData } from "@/features/pregnancy/services/pregnancyCalculator";

export default function DashboardPage() {
  const pregnancy = getPregnancyData();

  return (
    <div className="mx-auto max-w-7xl min-h-screen bg-linear
    -to-br from-yellow-50 via-white to-yellow-100 p-8">

      {/* Greeting */}
      <div className="mb-10">
        <h1 className="text-5xl font-black">
          Good Morning, Betty 🌸
        </h1>

        <p className="mt-2 text-xl text-gray-600">
          Pregnancy Week {pregnancy.weeks}
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-8">
        <PregnancyStats />
      </div>

      {/* Progress Ring */}
      <div className="mb-8">
        <PregnancyProgressRing />
      </div>

      {/* Today's Focus + Medication */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <TodaysFocus />
        <MedicationReminder />
      </div>

      {/* Baby Today + Due Date */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <BabyTodayCard week={pregnancy.currentWeek} />
        <DueDateCard />
      </div>

      {/* Baby Development + Mother's Changes */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <BabyDevelopmentCard week={pregnancy.currentWeek} />
        <MotherChangesCard week={pregnancy.currentWeek} />
      </div>

      {/* Weekly Tip */}
      <WeeklyTipCard />

    </div>
  );
}