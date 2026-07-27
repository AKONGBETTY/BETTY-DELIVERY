import TodaysFocus from "../components/TodaysFocus";
import MedicationReminder from "../components/MedicationReminder";
import BabyTodayCard from "@/features/pregnancy/components/BabyTodayCard";
import DueDateCard from "@/features/pregnancy/components/DueDateCard";
import BabyDevelopmentCard from "@/features/pregnancy/components/BabyDevelopmentCard";
import MotherChangesCard from "@/features/pregnancy/components/MotherChangesCard";
import WeeklyTipCard from "@/features/pregnancy/components/WeeklyTipCard";
import PregnancyHero from "@/features/pregnancy/components/PregnancyHero";
import { getPregnancyData } from "@/features/pregnancy/services/pregnancyCalculator";
import PregnancyOverviewCards from "@/features/pregnancy/components/PregnancyOverviewCards";
import CountdownTimer from "@/features/pregnancy/components/CountdownTimer";
export default function DashboardPage() {
  const pregnancy = getPregnancyData();

  return (
    <div className="mx-auto max-w-7xl min-h-screen bg-linear
    -to-br from-yellow-50 via-white to-yellow-100 p-8">
       <PregnancyHero />
      

       <div className="mt-8">
         <PregnancyOverviewCards />
       </div>
       <CountdownTimer />
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