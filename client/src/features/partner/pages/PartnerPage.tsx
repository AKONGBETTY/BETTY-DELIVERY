import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const tasks = [
  "Book a date night for the weekend",
  "Pick up the hospital bag essentials",
  "Help with morning coffee and breakfast routine",
  "Review birth plan together",
];

const support = [
  { title: "Emotional support", value: "Strong" },
  { title: "Household help", value: "2x this week" },
  { title: "Partner check-ins", value: "Every evening" },
];

export default function PartnerPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle title="Partner support" subtitle="A shared plan to feel connected and supported" emoji="🤝" />

      <div className="grid gap-6 md:grid-cols-3">
        {support.map((item) => (
          <Card key={item.title} className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{item.title}</p>
            <h3 className="mt-4 text-3xl font-black text-yellow-600">{item.value}</h3>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h2 className="mb-6 text-2xl font-black text-gray-900">This week’s support list</h2>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task} className="flex items-center gap-3 rounded-2xl bg-yellow-50 p-4 text-gray-700">
                <span className="text-2xl">✅</span>
                <span>{task}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-gray-900">Connection plan</h2>
          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <div className="rounded-2xl bg-pink-50 p-4">
              <p className="font-bold text-pink-700">Check-in</p>
              <p className="mt-2">Take 10 minutes each evening to talk through symptoms, stress, and what needs support.</p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-4">
              <p className="font-bold text-sky-700">Shared prep</p>
              <p className="mt-2">Keep the birth plan, hospital bag, and meal prep list visible in one place.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}