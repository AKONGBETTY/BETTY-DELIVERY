import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const feeds = [
  { time: "7:40 AM", method: "Breastfeeding", amount: "15 min" },
  { time: "11:10 AM", method: "Bottle", amount: "3 oz" },
  { time: "2:25 PM", method: "Breastfeeding", amount: "12 min" },
  { time: "6:50 PM", method: "Bottle", amount: "4 oz" },
];

const diapers = [
  { time: "6:15 AM", type: "Wet" },
  { time: "9:40 AM", type: "Dirty" },
  { time: "1:25 PM", type: "Wet" },
  { time: "5:05 PM", type: "Dirty" },
];

const sleep = [
  { label: "Morning sleep", value: "1 hr 45 mins" },
  { label: "Afternoon nap", value: "2 hrs 10 mins" },
  { label: "Night sleep", value: "7 hrs 20 mins" },
];

export default function BabyPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle title="Baby" subtitle="Feeding, sleep, growth and daily care" emoji="👶" />

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Age</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">12 days</h3>
          <p className="mt-2 text-sm text-gray-600">Since birth</p>
        </Card>
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Weight</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">3.4 kg</h3>
          <p className="mt-2 text-sm text-gray-600">Current</p>
        </Card>
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Length</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">49 cm</h3>
          <p className="mt-2 text-sm text-gray-600">Birth length</p>
        </Card>
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Sleep</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">11 hrs</h3>
          <p className="mt-2 text-sm text-gray-600">Today</p>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h2 className="text-2xl font-black text-gray-900">Recent feeds</h2>
          <div className="mt-6 space-y-4">
            {feeds.map((feed) => (
              <div key={`${feed.time}-${feed.method}`} className="flex items-center justify-between rounded-2xl border border-yellow-100 bg-yellow-50 p-4">
                <div>
                  <p className="text-lg font-bold text-gray-900">{feed.method}</p>
                  <p className="text-sm text-gray-600">{feed.time}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-yellow-700">{feed.amount}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-gray-900">Sleep summary</h2>
          <div className="mt-6 space-y-4">
            {sleep.map((item) => (
              <div key={item.label} className="rounded-2xl border border-yellow-100 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{item.label}</p>
                <p className="mt-2 text-xl font-black text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h2 className="text-2xl font-black text-gray-900">Diaper log</h2>
          <div className="mt-6 space-y-4">
            {diapers.map((diaper) => (
              <div key={`${diaper.time}-${diaper.type}`} className="flex items-center justify-between rounded-2xl bg-yellow-50 p-4">
                <p className="font-semibold text-gray-900">{diaper.type}</p>
                <p className="text-sm text-gray-600">{diaper.time}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-gray-900">Growth notes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-yellow-50 p-4 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Weight</p>
              <h3 className="mt-3 text-3xl font-black text-yellow-700">3.4 kg</h3>
            </div>
            <div className="rounded-2xl bg-yellow-50 p-4 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Length</p>
              <h3 className="mt-3 text-3xl font-black text-yellow-700">49 cm</h3>
            </div>
            <div className="rounded-2xl bg-yellow-50 p-4 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Head</p>
              <h3 className="mt-3 text-3xl font-black text-yellow-700">35 cm</h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}