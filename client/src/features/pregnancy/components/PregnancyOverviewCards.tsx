import StatCard from "@/components/ui/StatCard";
import { getPregnancyData } from "../services/pregnancyCalculator";

export default function PregnancyOverviewCards() {
  const pregnancy = getPregnancyData();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        icon="📅"
        title="Days Remaining"
        value={pregnancy.daysRemaining}
        subtitle="Days to go"
      />

      <StatCard
        icon="🎯"
        title="Due Date"
        value="Nov 3"
        subtitle="2026"
      />

      <StatCard
        icon="🌼"
        title="Trimester"
        value={pregnancy.trimester}
      />

      <StatCard
        icon="👣"
        title="Pregnancy Week"
        value={pregnancy.weeks}
        subtitle="of 40 weeks"
      />

    </div>
  );
}