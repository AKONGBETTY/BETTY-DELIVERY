import Card from "@/components/ui/Card";
import { hospitalBagItems } from "../data/hospitalBagItems";
import CategoryCard from "../components/CategoryCard";
import { useState } from "react";


export default function HospitalBagPage() {
  const [items, setItems] = useState(hospitalBagItems);

const packedItems = items.filter((item) => item.packed).length;

const progress = Math.round(
  (packedItems / items.length) * 100
);
const togglePacked = (id: number) => {
  setItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, packed: !item.packed }
        : item
    )
  );
};

  return (
    <main className="mx-auto max-w-7xl p-8">

      {/* Header */}

      <section className="mb-10">

        <h1 className="text-5xl font-black">
          👜 Hospital Bag
        </h1>

        <p className="mt-3 text-xl text-gray-600">
          Get everything ready before baby's arrival.
        </p>

      </section>

      {/* Progress */}

      <Card className="mb-10">

        <h2 className="text-2xl font-bold">
          Packing Progress
        </h2>

        <div className="mt-6 h-4 overflow-hidden rounded-full bg-yellow-100">

          <div
            className="h-full rounded-full bg-yellow-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />

        </div>

        <p className="mt-4 text-lg font-semibold">
          {packedItems} of {items.length} items packed ({progress}%)
        </p>

      </Card>

      {/* Categories  */}
      <section className="grid gap-6 lg:grid-cols-2">

  <CategoryCard
  title="🤱 Mother"
  items={items.filter(item => item.category === "Mother")}
  onToggle={togglePacked}
  />

  <CategoryCard
    title="👶 Baby"
    items={items.filter(
      (item) => item.category === "Baby"  )}
    onToggle={togglePacked}
  />

  <CategoryCard
    title="👨 Partner"
    items={items.filter(
      (item) => item.category === "Partner" )}
    onToggle={togglePacked}
  />

  <CategoryCard
    title="📄 Documents"
    items={items.filter(
      (item) => item.category === "Documents" )}
    onToggle={togglePacked} 
  />

</section>

    </main>
  );
}