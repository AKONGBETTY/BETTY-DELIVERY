import { getPregnancyData } from "../services/pregnancyCalculator";

export default function WeeklyTipCard() {
  const pregnancy = getPregnancyData();

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

      <h2 className="text-2xl font-black text-yellow-500">
        💡 Tip of Week {pregnancy.weeks}
      </h2>

      <p className="mt-5 leading-8 text-gray-700">
        Stay hydrated, eat balanced meals, attend your antenatal appointments,
        and take time to rest. Gentle walking and pelvic floor exercises can
        help prepare your body for delivery if your healthcare provider has
        advised they are appropriate.
      </p>

    </div>
  );
}