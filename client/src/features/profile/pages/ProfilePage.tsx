import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const profileStats = [
  { label: "Name", value: "Demo Mom" },
  { label: "Due date", value: "Nov 3, 2026" },
  { label: "Current week", value: "Week 29" },
  { label: "Provider", value: "Dr. Nguyen" },
];

const reminders = [
  "Medication reminders",
  "Appointment alerts",
  "Hydration nudges",
  "Hospital bag updates",
];

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle title="Profile" subtitle="Your personal pregnancy and care preferences" emoji="👤" />

      <div className="grid gap-6 md:grid-cols-4">
        {profileStats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
            <h3 className="mt-4 text-2xl font-black text-yellow-700">{stat.value}</h3>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h2 className="text-2xl font-black text-gray-900">Account details</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-medium text-gray-700">
              Full name
              <input defaultValue="Demo Mom" className="mt-2 w-full rounded-2xl border border-yellow-100 bg-yellow-50 px-4 py-3 outline-none focus:border-yellow-400" />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Email
              <input defaultValue="demo@betty.com" className="mt-2 w-full rounded-2xl border border-yellow-100 bg-yellow-50 px-4 py-3 outline-none focus:border-yellow-400" />
            </label>
            <label className="block text-sm font-medium text-gray-700 md:col-span-2">
              Preferred hospital
              <input defaultValue="Northside Women’s Center" className="mt-2 w-full rounded-2xl border border-yellow-100 bg-yellow-50 px-4 py-3 outline-none focus:border-yellow-400" />
            </label>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-gray-900">Notifications</h2>

          <div className="mt-6 space-y-4">
            {reminders.map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-yellow-100 bg-yellow-50 p-4">
                <span className="font-medium text-gray-800">{item}</span>
                <button type="button" className="rounded-full bg-white px-3 py-1 text-sm font-bold text-yellow-700 ring-1 ring-yellow-200">
                  On
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}