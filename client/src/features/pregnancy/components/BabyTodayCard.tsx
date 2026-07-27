import type { PregnancyWeek } from "../types/pregnancy";

interface Props {
  week: PregnancyWeek;
}

export default function BabyTodayCard({ week }: Props) {
  return (
     <div className="
rounded-3xl
border
border-yellow-100
bg-white
p-8
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
">
      <h3 className="text-2xl font-bold text-yellow-600">
         👶 Baby Today
      </h3>

      <p className="mt-1 text-gray-500">
          Pregnancy Week {week.week}
      </p>

      <div className="mt-5 grid grid-cols-3 gap-6">
        <div>
          <p className="text-sm text-gray-500">Size</p>
          <p className="text-xl font-bold">{week.fruit}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Length</p>
          <p className="text-xl font-bold">{week.lengthCm} cm</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Weight</p>
          <p className="text-xl font-bold">{week.weightKg} kg</p>
        </div>
      </div>
    </div>
  );
}