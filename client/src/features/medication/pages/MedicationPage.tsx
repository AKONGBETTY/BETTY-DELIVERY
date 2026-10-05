import { useState } from "react";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const initialMedication = [
  { id: 1, name: "Prenatal Vitamin", time: "8:00 AM", dose: "1 capsule", taken: true },
  { id: 2, name: "Iron + Vitamin C", time: "12:30 PM", dose: "1 tablet", taken: false },
  { id: 3, name: "Calcium", time: "8:00 PM", dose: "1 tablet", taken: false },
];

export default function MedicationPage() {
  const [medications, setMedications] = useState(initialMedication);

  const toggleTaken = (id: number) => {
    setMedications((current) =>
      current.map((item) => (item.id === id ? { ...item, taken: !item.taken } : item)),
    );
  };

  const takenCount = medications.filter((item) => item.taken).length;

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle title="Medication" subtitle="Stay on track with your daily care routine" emoji="💊" />

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Today</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">{takenCount}/{medications.length}</h3>
          <p className="mt-2 text-sm text-gray-600">Completed</p>
        </Card>
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Refill</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">7 days</h3>
          <p className="mt-2 text-sm text-gray-600">Until next refill</p>
        </Card>
        <Card className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Pharmacy</p>
          <h3 className="mt-4 text-3xl font-black text-yellow-600">CVS</h3>
          <p className="mt-2 text-sm text-gray-600">Preferred location</p>
        </Card>
      </div>

      <Card>
        <h2 className="mb-6 text-2xl font-black text-gray-900">Medication schedule</h2>
        <div className="space-y-4">
          {medications.map((medication) => (
            <div
              key={medication.id}
              className="flex items-center justify-between rounded-2xl border border-yellow-100 bg-yellow-50 p-5"
            >
              <div>
                <p className="text-lg font-bold text-gray-900">{medication.name}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {medication.time} • {medication.dose}
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleTaken(medication.id)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  medication.taken
                    ? "bg-emerald-500 text-white"
                    : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100"
                }`}
              >
                {medication.taken ? "Taken" : "Mark taken"}
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}