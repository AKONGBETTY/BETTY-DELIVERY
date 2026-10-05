import Card from "@/components/ui/Card";
import type { HospitalBagItem } from "../types/hospitalBag";
import ChecklistItem from "./ChecklistItem";


interface Props {
  title: string;
  items: HospitalBagItem[];
  onToggle: (id: number) => void;
}

export default function CategoryCard({
  title,
  items,
  onToggle,
}: Props){ 
  return (
    <Card>

      <h2 className="mb-6 text-2xl font-bold text-yellow-600">
        {title}
      </h2>

      <div className="space-y-3">

       {items.map((item) => (
         <ChecklistItem
           key={item.id}
           item={item}
           onToggle={onToggle}
          />
       ))}

      </div>

    </Card>
  );
}