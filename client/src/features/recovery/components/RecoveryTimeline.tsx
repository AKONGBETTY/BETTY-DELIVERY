import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

import { recoveryTimeline } from "../services/recoveryData";

export default function RecoveryTimeline() {
  const today = recoveryTimeline[0];

  return (
    <Card>

      <SectionTitle
        emoji="🌸"
        title={`Postpartum Day ${today.day}`}
      />

      <h3 className="mb-2 text-xl font-bold">
        {today.title}
      </h3>

      <p className="mb-6 text-gray-600">
        {today.goal}
      </p>

      <div className="space-y-3">

        {today.reminders.map((item) => (
          <div
            key={item}
            className="rounded-lg bg-yellow-50 p-3"
          >
            ✅ {item}
          </div>
        ))}

      </div>

    </Card>
  );
}