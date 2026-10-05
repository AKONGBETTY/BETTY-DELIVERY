import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const resources = [
  { title: "Preparing for labor", category: "Birth education", length: "12 min read", accent: "bg-yellow-100" },
  { title: "Postpartum recovery essentials", category: "Recovery", length: "8 min read", accent: "bg-amber-100" },
  { title: "Healthy snacks for busy days", category: "Nutrition", length: "6 min read", accent: "bg-emerald-100" },
  { title: "How to talk with your care team", category: "Communication", length: "5 min read", accent: "bg-pink-100" },
];

export default function LibraryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle title="Library" subtitle="Helpful articles and gentle guidance for each stage" emoji="📚" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <Card key={resource.title} className="h-full">
            <div className={`mb-5 h-28 rounded-2xl ${resource.accent}`} />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{resource.category}</p>
            <h3 className="mt-3 text-xl font-black text-gray-900">{resource.title}</h3>
            <p className="mt-3 text-sm text-gray-600">{resource.length}</p>
            <button type="button" className="mt-5 rounded-full bg-yellow-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-400">
              Read now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}