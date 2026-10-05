import type { HospitalBagItem } from "../types/hospitalBag";

interface Props {
  item: HospitalBagItem;
  onToggle: (id: number) => void;
}

export default function ChecklistItem({
  item,
  onToggle,
}: Props) {
  return (
    <label
      className="
        flex items-center justify-between
        rounded-xl border border-yellow-100
        p-4
        transition
        hover:bg-yellow-50
      "
    >
      <div>
        <p className="font-semibold">
          {item.name}
        </p>

        {item.essential && (
          <p className="text-sm text-yellow-600">
            Essential
          </p>
        )}
      </div>

      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggle(item.id)}
        className="h-5 w-5 accent-yellow-500"
      />
    </label>
  );
}