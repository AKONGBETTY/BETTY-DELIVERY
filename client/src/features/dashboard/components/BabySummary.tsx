import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

export default function BabySummary() {
  return (
    <Card>
      <SectionTitle
        emoji="🍼"
        title="Baby Summary"
      />

      <div className="space-y-5">

        <div>
          <p className="text-sm text-gray-500">
            Next Feeding
          </p>

          <p className="text-xl font-bold">
            10:30 AM
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Last Diaper
          </p>

          <p className="text-xl font-bold">
            8:45 AM
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Sleep
          </p>

          <p className="text-xl font-bold">
            2 hrs
          </p>
        </div>

      </div>
    </Card>
  );
}