import TodaysFocus from "../components/TodaysFocus";
import MedicationReminder from "../components/MedicationReminder";
import RecoveryTimeline from "@/features/recovery/components/RecoveryTimeline";
import { profile } from "@/features/profile/services/profileData";
import BabySummary from "@/features/baby/components/BabySummary";
import PregnancyCountdown from "@/features/pregnancy/components/PregnancyCountdown";

export default function DashboardPage() {
    
  return (
    <div className="mx-auto max-w-6xl">

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Good Morning, {profile.firstName} 🌼
        </h1>
        <p className="mt-2 text-lg text-gray-600">
           {profile.stage === "pregnancy"
           ? `Week ${profile.pregnancyWeek} Pregnancy`
           : `Postpartum Day ${profile.postpartumDay}`
           }
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <TodaysFocus />
        <MedicationReminder />
        <PregnancyCountdown />
        <div className="mt-8">
        <RecoveryTimeline />
        </div>
        <div className="mt-6">
           <BabySummary />
        </div>
      </div>

    </div>
    
  );
}