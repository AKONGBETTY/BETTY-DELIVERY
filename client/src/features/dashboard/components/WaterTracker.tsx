import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

export default function WaterTracker() {
  return (
    <Card>

      <SectionTitle
        emoji="💧"
        title="Water Intake"
      />

      <div className="space-y-5">

        <p className="text-5xl font-black text-yellow-500">
          0 / 3 L
        </p>

        <button className="w-full rounded-xl bg-yellow-500 py-3 font-semibold text-black transition hover:bg-yellow-400">
          + Add Glass
        </button>

      </div>

    </Card>
  );
}