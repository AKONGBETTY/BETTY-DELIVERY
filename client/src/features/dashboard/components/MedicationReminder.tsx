import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

export default function MedicationReminder() {
  return (
    <Card>

      <SectionTitle
        emoji="💊"
        title="Medication"
      />

      <div className="space-y-4">

        <div className="rounded-xl bg-yellow-50 p-4">
          <p className="font-semibold">
            8:00 AM
          </p>

          <p className="text-gray-600">
            Iron + Vitamin C
          </p>
        </div>

        <div className="rounded-xl bg-yellow-50 p-4">
          <p className="font-semibold">
            2:00 PM
          </p>

          <p className="text-gray-600">
            Calcium + Vitamin D
          </p>
        </div>

      </div>

    </Card>
  );
}