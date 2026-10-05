import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const vitals = [
  { label: "Blood pressure", value: "118/76", status: "Stable" },
  { label: "Pulse", value: "76 bpm", status: "Normal" },
  { label: "Temperature", value: "98.6°F", status: "Normal" },
  { label: "Sleep", value: "7.5 hrs", status: "Good" },
];

const symptoms = [
  { name: "Energy", level: 82 },
  { name: "Mood", level: 88 },
  { name: "Pain", level: 28 },
  { name: "Mobility", level: 76 },
];

export default function HealthPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle title="Health" subtitle="Track how your body is feeling this week" emoji="🩺" />

      <div className="grid gap-6 md:grid-cols-4">
        {vitals.map((vital) => (
          <Card key={vital.label} className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{vital.label}</p>
            <h3 className="mt-4 text-3xl font-black text-yellow-600">{vital.value}</h3>
            <p className="mt-2 text-sm text-gray-600">{vital.status}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h2 className="mb-6 text-2xl font-black text-gray-900">Wellness check-in</h2>
          <div className="space-y-5">
            {symptoms.map((symptom) => (
              <div key={symptom.name}>
                <div className="mb-2 flex items-center justify-between text-sm font-medium text-gray-700">
                  <span>{symptom.name}</span>
                  <span>{symptom.level}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-yellow-100">
                  <div
                    className="h-full rounded-full bg-yellow-500"
                    style={{ width: `${symptom.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-gray-900">Care notes</h2>
          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <div className="rounded-2xl bg-yellow-50 p-4">
              <p className="font-bold text-yellow-700">Hydration note</p>
              <p className="mt-2">You are on track with water intake today. Keep sipping water to support circulation.</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="font-bold text-emerald-700">Movement</p>
              <p className="mt-2">A 15-minute walk would support your energy and reduce swelling.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}