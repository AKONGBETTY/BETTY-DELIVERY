import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const recoveryChecklist = [
  "Rest whenever possible and avoid overexertion",
  "Drink water consistently and eat nutrient-dense meals",
  "Use pain relief as recommended by your care team",
  "Monitor bleeding and any signs of heavy blood loss",
  "Check in with your support person for emotional support",
];

const phases = [
  { label: "First 24 hours", detail: "Rest, pain relief, hydration, feeding support", active: true },
  { label: "Days 2–7", detail: "Bleeding, mobility, sleep, wound care", active: false },
  { label: "Weeks 2–6", detail: "Gentle movements and pelvic floor healing", active: false },
  { label: "Weeks 6–12", detail: "Strength, stamina, and confidence building", active: false },
];

const reminders = [
  { title: "Pain level", value: "3/10", tone: "bg-yellow-50" },
  { title: "Bleeding", value: "Light", tone: "bg-amber-50" },
  { title: "Hydration", value: "2.1L", tone: "bg-sky-50" },
  { title: "Sleep", value: "6.5 hrs", tone: "bg-emerald-50" },
];

export default function RecoveryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle title="Recovery" subtitle="Gentle postpartum healing and daily support" emoji="❤️" />

      <div className="grid gap-6 md:grid-cols-4">
        {reminders.map((reminder) => (
          <Card key={reminder.title} className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{reminder.title}</p>
            <div className={`mt-4 rounded-2xl p-4 ${reminder.tone}`}>
              <h3 className="text-3xl font-black text-yellow-700">{reminder.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card>
          <h2 className="text-2xl font-black text-gray-900">Today’s recovery focus</h2>
          <div className="mt-6 space-y-3">
            {recoveryChecklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-yellow-50 p-4 text-gray-700">
                <span className="text-xl">✅</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-gray-900">Healing timeline</h2>
          <div className="mt-6 space-y-4">
            {phases.map((phase) => (
              <div
                key={phase.label}
                className={`rounded-2xl border p-4 ${
                  phase.active ? "border-yellow-400 bg-yellow-50" : "border-yellow-100 bg-white"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{phase.label}</p>
                <p className="mt-2 text-lg font-bold text-gray-900">{phase.detail}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}