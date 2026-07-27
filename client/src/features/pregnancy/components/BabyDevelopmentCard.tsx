import type { PregnancyWeek } from "../types/pregnancy";

interface Props {
  week: PregnancyWeek;
}

export default function BabyDevelopmentCard({ week }: Props) {
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
        🧠 Baby Development
      </h3>

      <p className="mt-4 leading-8 text-gray-700">
        {week.babyDevelopment}
      </p>
    </div>
  );
}