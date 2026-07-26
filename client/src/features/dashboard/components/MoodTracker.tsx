import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const moods = [
  "😀",
  "🙂",
  "😐",
  "😣",
  "😢",
];

export default function MoodTracker() {
  return (
    <Card>

      <SectionTitle
        emoji="😊"
        title="Mood Today"
      />

      <div className="flex justify-between text-4xl">

        {moods.map((mood) => (
          <button
            key={mood}
            className="transition hover:scale-125"
          >
            {mood}
          </button>
        ))}

      </div>

    </Card>
  );
}