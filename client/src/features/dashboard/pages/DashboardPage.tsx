import TodaysFocus from "../components/TodaysFocus";
import MedicationReminder from "../components/MedicationReminder";
import BabyTodayCard from "@/features/pregnancy/components/BabyTodayCard";

import BabyDevelopmentCard from "@/features/pregnancy/components/BabyDevelopmentCard";
import MotherChangesCard from "@/features/pregnancy/components/MotherChangesCard";
import WeeklyTipCard from "@/features/pregnancy/components/WeeklyTipCard";
import PregnancyHero from "@/features/pregnancy/components/PregnancyHero"
import { getPregnancyData } from "@/features/pregnancy/services/pregnancyCalculator";
import PregnancyOverviewCards from "@/features/pregnancy/components/PregnancyOverviewCards";
import CountdownTimer from "@/features/pregnancy/components/CountdownTimer";
import GreetingCard from "../components/GreetingCard";


export default function DashboardPage() {
  const pregnancy = getPregnancyData();

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-linear-to-br from-yellow-50 via-white to-yellow-100 p-8">

  {/* Greeting */}
  <GreetingCard />

  {/* Hero */}
  <section className="mt-8">
    <PregnancyHero />
  </section>

  {/* Overview */}
  <section className="mt-8">
    <PregnancyOverviewCards />
  </section>

  {/* Focus */}
  <section className="mt-8 grid gap-6 lg:grid-cols-2">
    <TodaysFocus />
    <MedicationReminder />
  </section>

  {/* Pregnancy */}
  <section className="mt-8 grid gap-6 lg:grid-cols-2">
    <BabyTodayCard week={pregnancy.currentWeek} />
    <BabyDevelopmentCard week={pregnancy.currentWeek} />
  </section>

  {/* Mother */}
  <section className="mt-8 grid gap-6 lg:grid-cols-2">
    <MotherChangesCard week={pregnancy.currentWeek} />
    <CountdownTimer />
  </section>
   
  


  {/* Weekly Tip */}
  <section className="mt-8">
    <WeeklyTipCard />
  </section>

</div>
  );
}