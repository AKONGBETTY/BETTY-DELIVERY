import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const appointments = [
  { title: "OB-GYN Visit", date: "Tue, Oct 8", time: "9:30 AM", place: "Northside Clinic", type: "Routine checkup" },
  { title: "Ultrasound", date: "Thu, Oct 10", time: "2:00 PM", place: "Women’s Imaging Center", type: "Growth scan" },
  { title: "Prenatal Class", date: "Sat, Oct 12", time: "11:00 AM", place: "Community Center", type: "Breathing & labor prep" },
];

export default function AppointmentsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle title="Appointments" subtitle="Your upcoming care and check-ins" emoji="📅" />

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">This month</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">3</h3>
          <p className="mt-2 text-sm text-gray-600">Upcoming visits</p>
        </Card>
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Next</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">2d</h3>
          <p className="mt-2 text-sm text-gray-600">Until your next visit</p>
        </Card>
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Checklist</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">5</h3>
          <p className="mt-2 text-sm text-gray-600">Items prepared</p>
        </Card>
      </div>

      <Card>
        <div className="space-y-5">
          {appointments.map((appointment) => (
            <div key={appointment.title} className="rounded-2xl border border-yellow-100 bg-yellow-50 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">{appointment.type}</p>
                  <h3 className="mt-2 text-2xl font-black text-gray-900">{appointment.title}</h3>
                </div>
                <button type="button" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100">
                  Add reminder
                </button>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-500">Date</p>
                  <p className="mt-1">{appointment.date}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-500">Time</p>
                  <p className="mt-1">{appointment.time}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-500">Location</p>
                  <p className="mt-1">{appointment.place}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}